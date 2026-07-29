#!/usr/bin/env python3
"""
Module that creates a multiplier function with type annotations.
"""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Creates a function that multiplies a float by the given multiplier.
    """
    def multiply(x: float) -> float:
        return x * multiplier

    return multiply
