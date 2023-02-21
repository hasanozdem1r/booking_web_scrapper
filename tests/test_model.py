import pytest
from booking_scraper.exception import ModelValidationError
from booking_scraper.model import Hotel, HotelRoom, HotelMinified, HotelExtended


class TestHotel:
    def test_number_of_reviews_must_be_positive(self):
        with pytest.raises(ModelValidationError):
            Hotel(
                hotel_name="Example Hotel",
                description="A nice hotel",
                number_of_reviews=-5,
                review_points=8.5,
            )

    def test_review_points_must_be_between_zero_ten(self):
        with pytest.raises(ModelValidationError):
            Hotel(
                hotel_name="Example Hotel",
                description="A nice hotel",
                number_of_reviews=20,
                review_points=12.5,
            )

    def test_can_create_hotel_with_valid_data(self):
        hotel = Hotel(
            hotel_name="Example Hotel",
            description="A nice hotel",
            number_of_reviews=20,
            review_points=8.5,
        )
        assert hotel.hotel_name == "Example Hotel"
        assert hotel.description == "A nice hotel"
        assert hotel.number_of_reviews == 20
        assert hotel.review_points == 8.5


class TestHotelRoom:
    def test_room_capacity_must_be_positive(self):
        with pytest.raises(ModelValidationError):
            HotelRoom(room_capacity={"adult": 2, "children": -1}, room_type="Double")

    def test_can_create_hotel_room_with_valid_data(self):
        room = HotelRoom(room_capacity={"adult": 2, "children": 1}, room_type="Double")
        assert room.room_capacity == {"adult": 2, "children": 1}
        assert room.room_type == "Double"


class TestHotelMinified:
    def test_number_of_visitors_must_be_positive(self):
        with pytest.raises(ModelValidationError):
            HotelMinified(
                hotel_name="Example Hotel",
                description="A nice hotel",
                number_of_reviews=20,
                review_points=8.5,
                booking_link="http://example.com",
                number_of_visitors=-1,
            )

    def test_can_create_hotel_minified_with_valid_data(self):
        hotel = HotelMinified(
            hotel_name="Example Hotel",
            description="A nice hotel",
            number_of_reviews=20,
            review_points=8.5,
            booking_link="http://example.com",
            number_of_visitors=5,
        )
        assert hotel.hotel_name == "Example Hotel"
        assert hotel.description == "A nice hotel"
        assert hotel.number_of_reviews == 20
        assert hotel.review_points == 8.5
        assert hotel.booking_link == "http://example.com"
        assert hotel.number_of_visitors == 5


class TestHotelExtended:
    def test_can_create_hotel_extended_with_valid_data(self):
        room1 = HotelRoom(room_capacity={"adult": 2, "children": 1}, room_type="Double")
        room2 = HotelRoom(room_capacity={"adult": 1, "children": 0}, room_type="Single")
        hotel_minified = HotelMinified(
            hotel_name="Example Hotel",
            description="A nice hotel",
            number_of_reviews=20,
            review_points=8.5,
            booking_link="http://example.com",
            number_of_visitors=5,
        )
        hotel_extended = HotelExtended(
            hotel_name="Example Hotel",
            description="A nice hotel",
            number_of_reviews=20,
            review_points=8.5,
            address="123 Main St.",
            classification="4 stars",
            room_categories=[room1, room2],
            alternative_hotels=[hotel_minified],
        )
        assert hotel_extended.hotel_name == "Example Hotel"
        assert hotel_extended.description == "A nice hotel"
        assert hotel_extended.number_of_reviews == 20
        assert hotel_extended.review_points == 8.5
