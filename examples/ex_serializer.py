from booking_scrapper.serializer import PydanticJSONEncoder, to_json
from booking_scrapper.model import HotelExtended,HotelMinified,HotelRoom

# example instances of the Pydantic models
hotel_minified = HotelMinified(
    hotel_name="Hotel 1",
    description="Hotel Description",
    number_of_reviewers=10,
    review_points=4.5,
    booking_link="https://hotel.com"
)

hotel_extended = HotelExtended(
    hotel_name="Hotel 2",
    description="Hotel Description",
    number_of_reviewers=20,
    review_points=4.0,
    address="Hotel Address",
    classification="4-star",
    room_categories=HotelRoom(
        room_capacity=2,
        room_type="Double Room",
        price_link="https://hotel.com/room"
    ),
    alternative_hotels=[hotel_minified]
)

# Serialize the example instances to JSON using the to_json() function
hotel_minified_json = to_json(hotel_minified)
print("HotelMinified JSON: ")
print(hotel_minified_json)

hotel_extended_json = to_json(hotel_extended)
print("HotelExtended JSON: ")
print(hotel_extended_json)