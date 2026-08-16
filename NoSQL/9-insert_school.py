#!/usr/bin/env python3
"""Insert a new document in a collection"""


def insert_school(mongo_collection, **kwargs):
    """Return the new document id"""
    new_school = mongo_collection.insert_one(kwargs)
    return new_school.inserted_id
