from bs4 import BeautifulSoup
import requests
from typing import Dict
from requests.exceptions import HTTPError
from lxml import etree

BASE_LINK = "http://localhost:8000/data/Kempinski%20Hotel%20Bristol%20Berlin%2C%20Germany%20-%20Booking.com.html"


class BookingScraper:
    def __init__(self, base_link: str) -> None:
        try:
            # use fake User-Agent to deal 403 Forbidden
            headers: Dict[str, str] = {
                "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 \
            (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36",
                "Accept-Language": "en-US, en;q=0.5",
            }
            response = requests.get(base_link, headers=headers, timeout=30)
            # If the response was successful, no Exception will be raised
            response.raise_for_status()
            content = response.content
            self.html_soup = BeautifulSoup(content, "html.parser")
            self.dom = etree.HTML(str(self.html_soup))
        except HTTPError as http_err:
            # TODO: tbd logging
            print(f"HTTP error occurred: {http_err}")
            raise HTTPError from http_err

    
    def __get_element_text(self, element_xpath: str) -> str:
        """
        Get text by given XPATH
        :param element_xpath: <str> xpath for element
        :raise IndexError: if item return NoneType
        :return: <str> text from element
        """
        try:
            element = self.dom.xpath(element_xpath)[0]
            return str(element.text).strip()
        except IndexError:
            return ""

    def get_hotel_name(self) -> str:
        return self.__get_element_text('//*[@id="hp_hotel_name"]')

    def get_hotel_address(self) -> str:
        return self.__get_element_text('//*[@id="hp_address_subtitle"]')

    def get_alternative_hotels(self) -> None:
        alternative_hotels = self.html_soup.find("div", {"id": "althotels"}).find_all(
            "td", {"class": "althotelsCell tracked"}
        )
        print(alternative_hotels)

    def get_hotel_description(self) -> str:
        description_wrapper = self.html_soup.find(
            "div", {"class": "hotel_description_wrapper_exp"}
        )
        if not description_wrapper:
            return ""
        paragraphs = description_wrapper.find_all("p")
        # TODO: Prettify paragraphs
        description = "".join(
            [f"{parapgraph.text.strip()}\n" for parapgraph in paragraphs]
        )
        return description


if __name__ == "__main__":
    booking_scrapper = BookingScraper(base_link=BASE_LINK)
    print(booking_scrapper.get_hotel_description())
