"""
Pydantic Classes for metadata of hotels, it allows you validate and easily serialize
@hasanozdem1r 02-18-2023
"""
from pydantic import BaseModel, validator, schema_json_of, AnyHttpUrl
from booking_scraper.exception import ModelValidationError
from typing import List


class ReviewPoints(BaseModel):
    numerator: float  # hotel avarage rating
    denominator: float  # max rating can hotel receive

    @validator("numerator")
    def review_points_must_be_between_zero_ten(cls, value):
        if not 0.0 <= value <= 10.0:
            raise ModelValidationError("Hotel ratings must be between 0.0 and 10.0")
        return value


# base class for HotelMinified and HotelExtended
class Hotel(BaseModel):
    hotel_name: str
    description: str
    number_of_reviews: int
    review_points: ReviewPoints

    @validator("number_of_reviews")
    def number_of_reviews_must_be_positive(cls, value):
        if value < 0:
            raise ModelValidationError("Reviewers cannot be less than 0")
        return value


class RoomCapacity(BaseModel):
    number_of_adult: int
    number_of_children: int

    @validator("number_of_adult")
    def number_of_adult_must_be_positive(cls, value):
        if value < 0:
            raise ModelValidationError("Number of adult cannot be less than 0")
        return value

    @validator("number_of_children")
    def number_of_children_must_be_positive(cls, value):
        if value < 0:
            raise ModelValidationError("Number of children cannot be less than 0")
        return value


class HotelRoom(BaseModel):
    room_capacity: RoomCapacity
    room_type: str  # short description of room


class HotelMinified(Hotel):
    booking_link: AnyHttpUrl  # scheme http or https, TLD not required, host required
    number_of_visitors: int  # how many people looking to hotel

    @validator("number_of_visitors")
    def number_of_visitors_must_be_positive(cls, value):
        if value < 0:
            raise ModelValidationError("Visitors cannot be less than 0")
        return value


class HotelExtended(Hotel):
    address: str
    classification: int
    room_categories: List[HotelRoom]
    alternative_hotels: List[HotelMinified]


if __name__ == "__main__":
    # to make sure model class as expected
    print(schema_json_of(HotelExtended, title="The Hotel Extended Schema", indent=2))
