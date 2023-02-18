"""
This script stores divide methods
08-07-2022 Hasan Özdemir
"""


def divide(number1: int, number2: int) -> int:
    """
    Divide given numbers
    :param number1 <int> : divisor number
    :param number2 <int> : quotient number
    :raise ZeroDivisionError : in case of quotient equal to 0
    :return <int> divisor number
    """
    try:
        return int(number1 / number2)
    except ZeroDivisionError as error:
        return error


if __name__ == "__main__":
    print(divide(5, 2))
