from bs4 import BeautifulSoup
import requests
from typing import Dict, List
from requests.exceptions import HTTPError
from lxml import etree
import re
from booking_scraper.model import HotelMinified
from booking_scraper.exception import CssSelectorError, XpathSelectorError
from booking_scraper.globals import BASE_LINK


class ScraperHelper:
    @staticmethod
    def extract_number_from_text(text: str) -> int:
        numbers = re.findall(r"\d+", text)
        if len(numbers) == 1:
            # number is found
            return int(numbers[0])
        else:
            raise ValueError(f"Given text:{text} does not have any number")

    @staticmethod
    def get_text_by_xpath(dom: str, element_xpath: str) -> str:
        """
        Get text by given XPATH
        :param element_xpath: <str> xpath for element
        :raise IndexError: if item return NoneType
        :return: <str> text from element
        """
        try:
            element = dom.xpath(element_xpath)[0]
            return str(element.text).strip()
        except IndexError as error:
            raise XpathSelectorError(
                message=f"Following XPATH:{element_xpath} is not existed in current stream"
            ) from error


class BookingScraper(ScraperHelper):
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

    def get_hotel_name(self) -> str:
        return self.get_text_by_xpath(
            dom=self.dom, element_xpath='//*[@id="hp_hotel_name"]'
        )

    def get_hotel_address(self) -> str:
        return self.get_text_by_xpath(
            dom=self.dom, element_xpath='//*[@id="hp_address_subtitle"]'
        )

    def get_alternative_hotels(self) -> List[HotelMinified]:
        alternatives: List[HotelMinified] = []
        alternative_hotels = self.html_soup.find("div", {"id": "althotels"}).find_all(
            "td", {"class": "althotelsCell tracked"}
        )
        # alternative hotels section get metadata for each hotel
        if alternative_hotels:
            for hotel in alternative_hotels:
                hotel_name = str(
                    hotel.find("a", {"class": "althotel_link"}).text
                ).strip()
                description = str(
                    hotel.find("span", {"class": "hp_compset_description"}).text
                ).strip()
                visitor_details = str(
                    hotel.find(
                        "p",
                        {"class": "altHotels_most_recent_booking urgency_message_red"},
                    ).text
                ).strip()
                # extract number from the scraped info. For e.g There are 12345 people looking at this hotel.
                number_of_visitors = self.extract_number_from_text(text=visitor_details)
                number_of_reviewers = str(
                    hotel.find("strong", {"class": "count"}).text
                ).strip()
                review_points = float(
                    str(
                        hotel.find(
                            "span", {"class": "average js--hp-scorecard-scoreval"}
                        ).text
                    ).strip()
                )
                booking_link = str(
                    hotel.find(
                        "a",
                        {"class": "b-button"},
                    ).get("href")
                ).strip()
                hotel = HotelMinified(
                    hotel_name=hotel_name,
                    description=description,
                    number_of_visitors=number_of_visitors,
                    number_of_reviewers=number_of_reviewers,
                    review_points=review_points,
                    booking_link=booking_link,
                )
                alternatives.append(hotel)
            return alternatives
        else:
            raise CssSelectorError(
                message="CSS selectors is not existed in current stream"
            )

    def get_hotel_description(self) -> str:
        description_wrapper = self.html_soup.find(
            "div", {"class": "hotel_description_wrapper_exp"}
        )
        if not description_wrapper:
            return ""
        paragraphs = description_wrapper.find_all("p")
        # TODO: Prettify paragraphs
        description = "".join(
            [f"{paragraph.text.strip()}\n" for paragraph in paragraphs]
        )
        return description


if __name__ == "__main__":
    booking_scrapper = BookingScraper(base_link=BASE_LINK)
    print(booking_scrapper.get_alternative_hotels())
