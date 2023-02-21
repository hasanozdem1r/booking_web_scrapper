from bs4 import BeautifulSoup
import requests
from typing import Dict, List
from requests.exceptions import HTTPError
from booking_scraper.model import HotelMinified
from booking_scraper.exception import (
    InvalidCssSelectorError,
    XpathSelectorError,
    InvalidRoomCapacityError,
)
from booking_scraper.model import (
    HotelRoom,
    HotelMinified,
    HotelExtended,
    RoomCapacity,
    ReviewPoints,
)
from booking_scraper.globals import BASE_LINK
import re


class ScraperHelper:
    @staticmethod
    def extract_number_from_text(text: str) -> int:
        """
        Extract digit from text with regular expressions
        :param text: <str> input text
        :raises ValueError: if not find any or finds more than 2 raise ValueError
        :return: <int> number which is found
        """
        numbers = re.findall(r"\d+", text)
        if len(numbers) == 1:
            return int(numbers[0])
        else:
            raise ValueError(f"Given text:{text} does not have any number")

    @staticmethod
    def get_room_capacity(capacity: List[str]) -> RoomCapacity:
        """
        Parse results based on length of list
        If len equal 1 this room only has information about number of adults
        If len equal 2 this room has information about number of adults and children
        :param capacity: <List[str]>
        :raises IndexError: hotel room can contain max 2 type of customer if more raise
        :return: <RoomCapacity> number of adult and children
        """
        if len(capacity) == 1:
            number_of_adult = ScraperHelper.extract_number_from_text(
                capacity[0].get("title")
            )
            return RoomCapacity(number_of_adult=number_of_adult, number_of_children=0)
        elif len(capacity) == 2:
            number_of_adult = ScraperHelper.extract_number_from_text(
                capacity[0].get("title")
            )
            number_of_children = ScraperHelper.extract_number_from_text(
                capacity[1]["class"][1]
            )
            return RoomCapacity(
                number_of_adult=number_of_adult, number_of_children=number_of_children
            )
        else:
            raise InvalidRoomCapacityError()


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
            self.html_body = self.html_soup.find("body")
        except HTTPError as http_err:
            # TODO: tbd logging
            print(f"HTTP error occurred: {http_err}")
            raise HTTPError from http_err

    def get_hotel_name(self) -> str:
        """
        Get hotel name from stream/html
        :raises InvalidCssSelectorError:
        :return: <str> hotel name
        """
        hotel_name = str(
            self.html_body.find("span", {"id": "hp_hotel_name"}).text
        ).strip()
        if hotel_name:
            return hotel_name
        else:
            raise InvalidCssSelectorError()

    def get_address(self) -> str:
        """
        Get hotel address from stream/html
        :raises InvalidCssSelectorError:
        :return: <str> hotel address
        """
        address = str(
            self.html_body.find("span", {"id": "hp_address_subtitle"}).text
        ).strip()
        if address:
            return address
        else:
            raise InvalidCssSelectorError()

    def get_classification(self):
        """
        Get classification from stream/html
        :raises InvalidCssSelectorError:
        :return: <str> classification
        """
        classification = str(
            self.html_body.find(
                "i", {"class": "vp_hotel_badge over_photo badge_couple jq_tooltip"}
            )
            .find("span", {"class": "invisible_spoken"})
            .text
        ).strip()
        if classification:
            return classification
        else:
            raise InvalidCssSelectorError()

    def get_review_points(self) -> ReviewPoints:
        """
        Crucial information is numerator but it's also important to know what is top point.
        For e.g 9.1 point can be good if top is 10 it's bad rating if top is 100
        Scrape numerator & denominator (the terms of the fraction) and return as str so data user can have useful information
        :raises InvalidCssSelectorError:
        :return: <ReviewPoints> x/y for e.g 8.5/10.0
        """
        # avarage point hotel received
        numerator = float(
            str(
                self.html_body.find(
                    "span", {"class": "average js--hp-scorecard-scoreval"}
                ).text
            ).strip()
        )
        # max point can hotel receive
        denominator = float(
            str(self.html_body.find("span", {"class": "best"}).text).strip()
        )
        if numerator and denominator:
            return ReviewPoints(numerator=numerator, denominator=denominator)
        else:
            raise InvalidCssSelectorError()

    def get_number_of_reviews(self) -> int:
        """
        Get number of reviews for hotel from stream/html
        :raises InvalidCssSelectorError:
        :return: <int> number of reviews
        """
        number_of_reviews = int(
            str(self.html_body.find("strong", {"class": "count"}).text).strip()
        )
        if number_of_reviews:
            return number_of_reviews
        else:
            raise InvalidCssSelectorError()

    def get_description(self) -> str:
        """
        Get hotel description from stream/html
        :raises InvalidCssSelectorError:
        :return: <str> hotel description
        """
        description_wrapper = self.html_body.find(
            "div", {"class": "hotel_description_wrapper_exp"}
        )
        if description_wrapper:
            paragraphs = description_wrapper.find_all("p")
            description = "".join(
                [f"{paragraph.text.strip()}\n" for paragraph in paragraphs]
            )
            return description
        else:
            raise InvalidCssSelectorError()

    def get_room_categories(self) -> List[HotelRoom]:
        """
        Get hotel room categories from stream/html
        :raises InvalidCssSelectorError:
        :return: <List[HotelRoom]> list of hotel rooms
        """
        categories = (
            self.html_body.find("table", {"id": "maxotel_rooms"})
            .find("tbody")
            .find_all("tr")
        )
        if categories:
            room_categories: List[HotelRoom] = []
            # categories section to get each category metadata
            for category in categories:
                room_capacity = category.find("td", {"class": "occ_no_dates"}).find_all("i")
                room_capacity = self.get_room_capacity(capacity=room_capacity)
                room_type = str(category.find("td", {"class": "ftd"}).text).strip()
                room_categories.append(
                    HotelRoom(
                        room_capacity=room_capacity,
                        room_type=room_type,
                    )
                )
            return room_categories
        else:
            raise InvalidCssSelectorError()
        
    def get_alternative_hotels(self) -> List[HotelMinified]:
        alternative_hotels = self.html_soup.find("div", {"id": "althotels"}).find_all(
            "td", {"class": "althotelsCell tracked"}
        )
        if alternative_hotels:
            alternatives: List[HotelMinified] = []
            # alternative hotels section to get each hotel metadata
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
                    review_points = self.get_review_points()
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
                raise InvalidCssSelectorError(
                    message="CSS selectors is not existed in current stream"
                )
        else:
            raise InvalidCssSelectorError()

if __name__ == "__main__":
    bs = BookingScraper(base_link=BASE_LINK)
    # pass data / objects to HotelExtended class
    hotel_extended = HotelExtended(
        hotel_name=bs.get_hotel_name(),
        description=bs.get_description(),
        number_of_reviews=bs.get_number_of_reviews(),
        review_points=bs.get_review_points(),
        address=bs.get_address(),
        classification=bs.get_classification(),
        room_categories=bs.get_room_categories(),
        alternative_hotels=bs.get_alternative_hotels(),
    )
    print(hotel_extended.alternative_hotels)
