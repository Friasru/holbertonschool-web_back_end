#!/usr/bin/env python3
"""Return schools having a specific topic"""


def schools_by_topic(mongo_collection, topic):
    """Return the list of schools that have the given topic"""
    return list(mongo_collection.find({"topics": topic}))
