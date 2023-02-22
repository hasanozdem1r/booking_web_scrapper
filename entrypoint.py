from booking_scraper.scraper import BookingScraper
from booking_scraper.model import HotelExtended
from booking_scraper.globals import BASE_LINK
from booking_scraper.serializer import PydanticJSONEncoder
import json
import typer
from rich import print as pretty_print


def main():
    bs = BookingScraper(base_link=BASE_LINK)
    # pass data / objects to HotelExtended class
    hotel_extended = HotelExtended(
        hotel_name=bs.get_hotel_name(),
        description=bs.get_description(),
        number_of_reviews=bs.get_number_of_reviews(),
        review_points=bs.get_review_points(),
        address=bs.get_address(),
        classification=bs.get_classification(),  # re-check
        room_categories=bs.get_room_categories(),
        alternative_hotels=bs.get_alternative_hotels(),
    )
    hotel_extended_json = json.dumps(
        hotel_extended.dict(), cls=PydanticJSONEncoder, indent=4
    )
    pretty_print(hotel_extended_json)


if __name__ == "__main__":
    typer.run(main)
