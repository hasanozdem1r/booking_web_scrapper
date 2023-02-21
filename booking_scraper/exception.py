"""
This module defines user-defined exceptions for booking_scrapper.
"""
from pydantic.error_wrappers import ValidationError


class InvalidCssSelectorError(Exception):
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


class ModelValidationError(Exception):
    """
    Exception raised if given value not in accepted value range.
    """

    def __init__(self, validation_error: ValidationError):
        self.validation_error = validation_error
        super().__init__(str(self.validation_error))


class InvalidRoomCapacityError(ValueError):
    """
    First index to identify number of adult people, Second index to identify number of children
    Exception raised if a given list index has more than 2 items.
    """

    def __init__(
        self,
        message: str = "Hotel room can have maximum two types of different guest, adult and children",
    ) -> None:
        super().__init__(message)
