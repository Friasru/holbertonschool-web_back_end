#!/usr/bin/env python3
"""
Module that converts a key-value pair to a tuple with type annotations.
"""

from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Converts a key-value pair to a tuple with the value squared.
    """
    return (k, v ** 2)
