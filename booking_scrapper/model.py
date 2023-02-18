from pydantic import BaseModel, validator,schema_json_of
from typing import List

#TODO: validator tbd
# base class for HotelMinified and HotelExtended
class Hotel(BaseModel):
    hotel_name:str
    description:str
    number_of_reviewers:int
    review_points:float

class HotelRoom(BaseModel):
    room_capacity:int # named Max on booking.com
    room_type:str # short description of room
    price_link:str # if person want to access prices of room

class HotelMinified(Hotel):
    booking_link:str   # if person want to go link of hotel


class HotelExtended(Hotel):
    address:str
    classsification:str
    room_categories:HotelRoom
    alternative_hotels:List[HotelMinified]


if __name__=="__main__":
    # to make sure model class as expected
    print(schema_json_of(HotelExtended, title='The Hotel Extended Schema', indent=2))