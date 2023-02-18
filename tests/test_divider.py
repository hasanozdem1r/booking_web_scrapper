"""
Test usage of divider
08-07-2022 Hasan Özdemir
"""
from project_root.divider import divide
import pytest


def test_divider():
    assert divide(10, 2) == 5
