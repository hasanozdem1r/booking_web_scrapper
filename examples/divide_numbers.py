"""
Example usage of divider
08-07-2022 Hasan Özdemir
"""

from project_root.divider import divide

data = {5: 4, 4: 3, 3: 2, 2: 1, 1: 0}

if __name__ == "__main__":
    for key, value in data.items():
        print(divide(number1=key, number2=value))
