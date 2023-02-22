from booking_scraper.helper import ScraperHelper
from booking_scraper.model import RoomCapacity
from booking_scraper.exception import InvalidRoomCapacityError
import pytest


class TestScraperHelper:
    """
    Test suite for the ScraperHelper class.
    """

    @pytest.mark.parametrize(
        "input_text,expected_output",
        [
            ("There are 21 people looking at this hotel.", 21),
            ("There are 8 people looking at this hotel.", 8),
            ("There are 4 people looking at this hotel.", 4),
            ("There are 6 people looking at this hotel.", 6),
            ("no numbers", ValueError),
        ],
    )
    def test_extract_number_from_text(self, input_text, expected_output):
        if expected_output == ValueError:
            with pytest.raises(ValueError):
                ScraperHelper.extract_number_from_text(input_text)
        else:
            assert ScraperHelper.extract_number_from_text(input_text) == expected_output

    @pytest.mark.parametrize(
        "capacity, expected_result",
        [
            (
                [{"title": "2 adults"}],
                RoomCapacity(number_of_adult=2, number_of_children=0),
            ),
            (
                [{"title": "2 adults"}, {"class": ["roomtype", "max-child-2"]}],
                RoomCapacity(number_of_adult=2, number_of_children=2),
            ),
        ],
    )
    def test_get_room_capacity_with_valid_input(self, capacity, expected_result):
        assert ScraperHelper.get_room_capacity(capacity) == expected_result

    def test_get_room_capacity_with_invalid_input(self):
        capacity = [
            {"title": "2 adults"},
            {"class": ["roomtype", "max-child-2"]},
            {"class": ["roomtype", "max-child-2"]},
        ]
        with pytest.raises(InvalidRoomCapacityError):
            ScraperHelper.get_room_capacity(capacity)
