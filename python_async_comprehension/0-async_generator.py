#!/usr/bin/env python3
"""
Async generator module for yielding random numbers after delays.
"""

import asyncio
import random


async def async_generator():
    """
    Async generator that yields 10 random numbers with 1-second delays.
    """
    for i in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
