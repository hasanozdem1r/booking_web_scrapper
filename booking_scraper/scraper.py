from bs4 import BeautifulSoup
import requests
from typing import Dict, List
from requests.exceptions import HTTPError
from booking_scraper.model import HotelMinified
from booking_scraper.exception import CssSelectorError, XpathSelectorError
from booking_scraper.model import HotelRoom, HotelMinified, HotelExtended
from booking_scraper.globals import BASE_LINK
import re
from lxml import etree


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

    # TODO: refactor and add docstr
    @staticmethod
    def get_number_of_people_from_text(capacity: List[str]) -> Dict[str, int]:
        if len(capacity) == 1:
            number_of_adult = ScraperHelper.extract_number_from_text(
                capacity[0].get("title")
            )
            return {"number_of_adult": number_of_adult, "number_of_child": 0}
        elif len(capacity) == 2:
            number_of_adult = ScraperHelper.extract_number_from_text(
                capacity[0].get("title")
            )
            number_of_child = ScraperHelper.extract_number_from_text(
                capacity[1]["class"][1]
            )
            return {
                "number_of_adult": number_of_adult,
                "number_of_child": number_of_child,
            }
        else:
            raise IndexError("Index is out of range")


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
        return str(self.html_soup.find("span", {"id": "hp_hotel_name"}).text).strip()

    def get_address(self) -> str:
        return str(
            self.html_soup.find("span", {"id": "hp_address_subtitle"}).text
        ).strip()

    def get_classification(self):
        return str(
            self.html_soup.find(
                "i", {"class": "vp_hotel_badge over_photo badge_couple jq_tooltip"}
            ).get("title")
        ).strip()

    # TODO: fix business logic
    def get_review_points(self) -> float:
        """
        Crucial information is numerator but it's also important to know what is top point.
        For e.g 9.1 point can be good if top is 10 it's bad rating if top is 100
        :return: _description_
        """
        numerator = float(
            str(
                self.html_soup.find(
                    "span", {"class": "average js--hp-scorecard-scoreval"}
                ).text
            ).strip()
        )
        denominator = float(
            str(self.html_soup.find("span", {"class": "best"}).text).strip()
        )
        # return {"rating":numerator,"top-point":denominator}
        return numerator

    def get_number_of_reviews(self) -> int:
        return int(str(self.html_soup.find("strong", {"class": "count"}).text).strip())

    # TODO: prettify paragraphs
    def get_description(self) -> str:
        description_wrapper = self.html_soup.find(
            "div", {"class": "hotel_description_wrapper_exp"}
        )
        if not description_wrapper:
            raise CssSelectorError()
        paragraphs = description_wrapper.find_all("p")
        description = "".join(
            [f"{paragraph.text.strip()}\n" for paragraph in paragraphs]
        )
        return description

    def get_room_categories(self):
        categories = (
            self.html_soup.find("table", {"id": "maxotel_rooms"})
            .find("tbody")
            .find_all("tr")
        )

        for category in categories:
            room_capacity = category.find("td", {"class": "occ_no_dates"}).find_all("i")
            room_type = str(category.find("td", {"class": "ftd"}).text).strip()
            print(self.get_number_of_people_from_text(capacity=room_capacity))
            # print(len(room_capacity))

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
                number_of_reviews = str(
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
                    number_of_reviews=number_of_reviews,
                    review_points=review_points,
                    booking_link=booking_link,
                )
                alternatives.append(hotel)
            return alternatives
        else:
            raise CssSelectorError(
                message="CSS selectors is not existed in current stream"
            )


if __name__ == "__main__":
    bs = BookingScraper(base_link=BASE_LINK)
    bs.get_room_categories()

    # pass data / objects to HotelExtended class
    hotel_extended = HotelExtended(
        hotel_name=bs.get_hotel_name(),
        description=bs.get_description(),
        number_of_reviews=bs.get_number_of_reviews(),
        review_points=bs.get_review_points(),
        address=bs.get_address(),
        classification=bs.get_classification(),
        room_categories=HotelRoom(
            room_capacity=2,
            room_type="Double Room",
            price_link="https://hotel.com/room",
        ),
        alternative_hotels=bs.get_alternative_hotels(),
    )
    # print(hotel_extended.classification)
