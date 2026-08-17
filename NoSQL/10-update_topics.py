#!/usr/bin/env python3
"""Update topics in a MongoDB collection"""


def update_topics(mongo_collection, name, topics):
    """set the topics field for all documents matching"""
    mongo_collection.update_many(
        {"name": name},
        {"$set": {"topics": topics}}
    )
