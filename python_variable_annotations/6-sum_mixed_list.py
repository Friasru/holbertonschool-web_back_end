#!/usr/bin/env python3
"""
Module that sums a list of mixed integers and floats with type annotations.
"""

from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """
    Sums a list of mixed integers and floats.
    """
    return sum(mxd_lst)
