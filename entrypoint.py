from booking_scraper.scraper import BookingScraper
from booking_scraper.model import HotelExtended
from booking_scraper.globals import BASE_LINK
from booking_scraper.serializer import PydanticJSONEncoder
import json
import typer
from rich import print as pretty_print
import os

PROJECT_ROOT = os.path.dirname(os.path.abspath(__file__))
HTML_FILE_PATH = (
    f"{PROJECT_ROOT}/data/Kempinski Hotel Bristol Berlin, Germany - Booking.com.html"
)


def init_scraper(
    base_link: str = typer.Option(
        default=BASE_LINK, help="Hotel link to scrape from internet"
    ),
    local_file_path: str = typer.Option(
        default=None, help="File path to scrape from local HTML file"
    ),
):
    """
    Create an instance from BookingScraper class and scrape all hotel required hotel metadata
    :param base_link: _description_, defaults to typer.Option( default=BASE_LINK, help="Hotel link to scrape from internet" )
    :param local_file_path: _description_, defaults to typer.Option( default=None, help="File path to scrape from local HTML file" )
    """
    booking_scraper = BookingScraper(
        base_link=base_link,
        local_file_path=local_file_path,
    )
    # mapping data with HotelExtended class
    hotel_extended = HotelExtended(
        hotel_name=booking_scraper.get_hotel_name(),
        description=booking_scraper.get_description(),
        number_of_reviews=booking_scraper.get_number_of_reviews(),
        review_points=booking_scraper.get_review_points(),
        address=booking_scraper.get_address(),
        classification=booking_scraper.get_classification(),  # re-check
        room_categories=booking_scraper.get_room_categories(),
        alternative_hotels=booking_scraper.get_alternative_hotels(),
    )
    hotel_extended_json = json.dumps(
        hotel_extended.dict(), cls=PydanticJSONEncoder, indent=4
    )
    pretty_print(hotel_extended_json)


if __name__ == "__main__":
    typer.run(init_scraper)
