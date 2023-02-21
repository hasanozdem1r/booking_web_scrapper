"""
Test usage of divider
08-07-2022 Hasan Özdemir
"""
import pytest
from booking_scraper.model import HotelExtended, HotelMinified, HotelRoom
from booking_scraper.serializer import PydanticJSONEncoder
from booking_scraper.model import HotelExtended, HotelMinified, HotelRoom
import json

hotel_minified = HotelMinified(
    hotel_name="Hotel 1",
    description="Hotel Description",
    number_of_reviews=10,
    number_of_visitors=10,
    review_points=4.5,
    booking_link="https://hotel.com",
)

hotel_extended = HotelExtended(
    hotel_name="Hotel 2",
    description="Hotel Description",
    number_of_reviews=20,
    review_points=4.0,
    address="Hotel Address",
    classification="4-star",
    room_categories=[
        HotelRoom(room_capacity={"adult": 2, "children": 3}, room_type="Double Room"),
        HotelRoom(room_capacity={"adult": 2, "children": 4}, room_type="Single Room"),
        HotelRoom(room_capacity={"adult": 2, "children": 5}, room_type="Double Room"),
    ],
    alternative_hotels=[hotel_minified],
)


def test_data_serializer():
    # Serialize the example instances to JSON using the json.dumps() function
    hotel_minified_json = json.dumps(
        hotel_minified.dict(), cls=PydanticJSONEncoder, indent=4
    )
    hotel_extended_json = json.dumps(
        hotel_extended.dict(), cls=PydanticJSONEncoder, indent=4
    )
    assert isinstance(hotel_extended_json, str) and isinstance(hotel_minified_json, str)
