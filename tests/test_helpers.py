from booking_scrapper.scrapper import ScraperHelper, XpathSelectorError
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

    @pytest.fixture(
        params=[
            ("<html><body><p>hello world</p></body></html>", "//p"),
            ("<html><body><h1>hello world</h1></body></html>", "//h2"),
        ]
    )
    def dom_and_xpath(self, request):
        return request.param

    def test_get_element_text(self, mocker, dom_and_xpath):
        dom, xpath = dom_and_xpath

        # Mock the DOM
        mock_dom = mocker.Mock()
        mock_dom.xpath.return_value = []

        # Test for an empty result
        with pytest.raises(XpathSelectorError):
            ScraperHelper.get_text_by_xpath(mock_dom, xpath)

        # Test for a valid result
        expected_result = "hello world"
        mock_element = mocker.Mock(text=expected_result)
        mock_dom.xpath.return_value = [mock_element]
        result = ScraperHelper.get_text_by_xpath(mock_dom, xpath)

        assert result == expected_result
