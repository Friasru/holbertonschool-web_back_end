#!/usr/bin/env python3
"""Helper function for pagination indexes"""


def index_range(page, page_size):
    """Return the start and end of indexes"""
    start = (page - 1) * page_size
    end = page * page_size
    return start, end
