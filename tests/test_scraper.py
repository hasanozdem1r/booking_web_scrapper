import pytest
from requests.exceptions import HTTPError
from booking_scraper.scraper import BookingScraper
from booking_scraper.globals import BASE_LINK


@pytest.fixture()
def booking_scraper():
    return BookingScraper(base_link=BASE_LINK)


def test_get_hotel_name(booking_scraper):
    assert booking_scraper.get_hotel_name() == "Kempinski Hotel Bristol Berlin"


def test_get_hotel_address(booking_scraper):
    assert (
        "Kurfürstendamm 27, Charlottenburg-Wilmersdorf, 10719 Berlin, Germany"
        == booking_scraper.get_address()
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
        assert True == (0.0 <= alternative.review_points <= 10.0)
        assert alternative.booking_link.host == "www.booking.com"


def test_get_hotel_description(booking_scraper):
    assert isinstance(booking_scraper.get_description(), str)
