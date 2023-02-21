"""
Pydantic Classes for metadata of hotels, it allows you validate and easily serialize
@hasanozdem1r 02-18-2023
"""
from pydantic import BaseModel, validator, schema_json_of, AnyHttpUrl
from typing import List


# base class for HotelMinified and HotelExtended
class Hotel(BaseModel):
    hotel_name: str
    description: str
    number_of_reviews: int
    review_points: float

    @validator("number_of_reviews")
    def number_of_reviews_must_be_positive(cls, value):
        if value < 0:
            raise ValueError("Reviewers cannot be less than 0")
        return value

    @validator("review_points")
    def review_points_must_be_between_zero_ten(cls, value):
        if not 0.0 <= value <= 10.0:
            raise ValueError("Hotel ratings must be between 0.0 and 10.0")
        return value


class HotelRoom(BaseModel):
    room_capacity: int  # named Max on booking.com
    room_type: str  # short description of room
    price_link: AnyHttpUrl  # if person want to access prices of room

    @validator("room_capacity")
    def room_capacity_must_be_positive(cls, value):
        if value < 0:
            raise ValueError("Room capacity cannot be less than 0")
        return value


class HotelMinified(Hotel):
    booking_link: AnyHttpUrl  # scheme http or https, TLD not required, host required
    number_of_visitors: int  # how many people looking to hotel

    @validator("number_of_visitors")
    def number_of_visitors_must_be_positive(cls, value):
        if value < 0:
            raise ValueError("Visitors cannot be less than 0")
        return value


class HotelExtended(Hotel):
    address: str
    classification: str
    room_categories: HotelRoom
    alternative_hotels: List[HotelMinified]


if __name__ == "__main__":
    # to make sure model class as expected
    print(schema_json_of(HotelExtended, title="The Hotel Extended Schema", indent=2))
