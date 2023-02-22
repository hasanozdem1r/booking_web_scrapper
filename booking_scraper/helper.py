from typing import List
from booking_scraper.model import RoomCapacity
from booking_scraper.exception import InvalidRoomCapacityError
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
