#!/usr/bin/env python3
"""
Async comprehension module for collecting random numbers.
"""

async_generator = __import__('0-async_generator').async_generator


async def async_comprehension():
    """
    Async comprehension that collects 10 random numbers from async_generator.
    """
    return [i async for i in async_generator()]
