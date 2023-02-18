from bs4 import BeautifulSoup
import requests
from typing import Dict

BASE_LINK = "http://127.0.0.1:8080/data/Kempinski%20Hotel%20Bristol%20Berlin%2C%20Germany%20-%20Booking.com.html"


class BookingScrapper:

    def __init__(self, base_link: str) -> None:
        # use fake User-Agent to deal 403 Forbidden
        headers: Dict[str, str] = {
            'User-Agent':
                'Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'
        }
        self.page_content = requests.get(base_link, headers=headers).content
        print(self.page_content)


if __name__ == "__main__":
    booking_scrapper = BookingScrapper(base_link=BASE_LINK)
