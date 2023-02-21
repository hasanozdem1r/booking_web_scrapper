"""
This module defines user-defined exceptions for booking_scrapper.
"""


class CssSelectorError(Exception):
    """
    Exception raised if a given CSS selector does not exist.
    """

    def __init__(self, message: str = "Given CSS selector does not exist") -> None:
        super().__init__(message)


class XpathSelectorError(IndexError):
    """
    Exception raised if a given XPATH selector does not exist.
    """

    def __init__(self, message: str = "Given XPATH selector does not exist") -> None:
        super().__init__(message)
