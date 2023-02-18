from bs4 import BeautifulSoup
import requests
from typing import Dict
from requests.exceptions import HTTPError
from booking_scrapper.model import HotelExtended

BASE_LINK = "http://localhost:8000/data/Kempinski%20Hotel%20Bristol%20Berlin%2C%20Germany%20-%20Booking.com.html"


class BookingScrapper:

    def __init__(self, base_link: str) -> None:
        try:
            # use fake User-Agent to deal 403 Forbidden
            headers: Dict[str, str] = {
                'User-Agent':
                    'Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'
            }
            response = requests.get(base_link, headers=headers, timeout=30)
            # If the response was successful, no Exception will be raised
            response.raise_for_status()
            self.content = response.content
        except HTTPError as http_err:
            print(f'HTTP error occurred: {http_err}')

    def scrape_hotel_details(self):
        if self.content:
            content_lxml = BeautifulSoup(self.content)


if __name__ == "__main__":
    booking_scrapper = BookingScrapper(base_link=BASE_LINK)
