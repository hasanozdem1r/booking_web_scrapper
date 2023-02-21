from typing import Dict
import pytest

from booking_scraper.model import Hotel, HotelMinified, HotelExtended, HotelRoom


def test_invalid_number_of_reviews_validator():
    with pytest.raises(ValueError):
        Hotel(
            hotel_name="Test Hotel",
            description="A hotel for testing",
            number_of_reviews=-1,
            review_points=8.0,
        )


def test_invalid_review_points_validator():
    with pytest.raises(ValueError):
        Hotel(
            hotel_name="Test Hotel",
            description="A hotel for testing",
            number_of_reviews=10,
            review_points=11.0,
        )


def test_invalid_room_capacity_validator():
    with pytest.raises(ValueError):
        HotelRoom(room_type="single", room_capacity={"adult": -1, "children": 1})


def test_invalid_number_of_visitors_validator():
    with pytest.raises(ValueError):
        HotelMinified(
            hotel_name="Test Hotel",
            description="A hotel for testing",
            number_of_reviews=10,
            review_points=8.0,
            booking_link="https://www.test.com",
            number_of_visitors=-1,
        )


def test_invalid_all_hotel_extended():
    with pytest.raises(ValueError):
        HotelExtended(
            hotel_name="Test Hotel",
            description="A hotel for testing",
            number_of_reviews=-10,
            review_points=-8.0,
            address="123 Main St.",
            classification="4 stars",
            room_categories=[],
            alternative_hotels=[],
        )
