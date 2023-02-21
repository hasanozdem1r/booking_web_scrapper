from booking_scraper.scraper import ScraperHelper, XpathSelectorError
import pytest


class TestScraperHelper:
    @pytest.mark.parametrize(
        "input_text,expected_output",
        [
            ("There are 21 people looking at this hotel.", 21),
            ("There are 8 people looking at this hotel.", 8),
            ("There are 4 people looking at this hotel.", 4),
            ("There are 6 people looking at this hotel.", 6),
            ("no numbers", ValueError),
        ],
    )
    def test_extract_number_from_text(self, input_text, expected_output):
        if expected_output == ValueError:
            with pytest.raises(ValueError):
                ScraperHelper.extract_number_from_text(input_text)
        else:
            assert ScraperHelper.extract_number_from_text(input_text) == expected_output
