import pytest
from requests.exceptions import HTTPError
from booking_scraper.scraper import BookingScraper
import os
from booking_scraper.globals import BASE_LINK

CWD = os.path.dirname(os.path.abspath(__file__))
HTML_FILE_PATH = (
    f"{CWD}/../data/Kempinski Hotel Bristol Berlin, Germany - Booking.com.html"
)


@pytest.fixture()
def booking_scraper():
    return BookingScraper(local_file_path=HTML_FILE_PATH)


def test_get_hotel_name(booking_scraper):
    assert booking_scraper.get_hotel_name() != ""


def test_get_hotel_address(booking_scraper):
    assert "" != booking_scraper.get_address()


def test_get_classification(booking_scraper):
    assert True == (0 <= booking_scraper.get_classification() <= 5)


def test_get_review_points(booking_scraper):
    rating = booking_scraper.get_review_points().numerator
    max_rating = booking_scraper.get_review_points().denominator
    assert True == (0.0 <= rating <= max_rating)


def test_get_room_capacity(booking_scraper):
    # Test room with only adult or adult & children
    hotel_rooms = booking_scraper.get_room_categories()
    for room in hotel_rooms:
        assert (
            True
            == (0 <= room.room_capacity.number_of_adult)
            == (0 <= room.room_capacity.number_of_children)
        )


def test_get_alternative_hotels(booking_scraper):
    alternatives = booking_scraper.get_alternative_hotels()
    assert isinstance(alternatives, list)
    assert len(alternatives) > 0
    for alternative in alternatives:
        assert alternative.hotel_name != ""
        assert alternative.description != ""
        assert alternative.number_of_visitors != ""
        assert alternative.number_of_reviews != ""
        assert True == (0.0 <= alternative.review_points.numerator <= 10.0)
        assert alternative.booking_link.host == "www.booking.com"


def test_get_hotel_description(booking_scraper):
    assert isinstance(booking_scraper.get_description(), str)
