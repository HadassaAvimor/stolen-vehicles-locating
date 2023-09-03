from datetime import datetime
from enum import Enum

from pymongo import MongoClient
import os

client = MongoClient(os.environ['DB_CONNECTION_STRING'])
my_db = client['python_project']


class Collections(Enum):
    inspectors = my_db['inspectors'],
    reports = my_db['reports']


def insert_row(collection, row):
    """

    :param collection: a collection to insert to it from enum Collections .
    :param row: json row to insert.
    :return:
    """
    collection.insert_one(row)


insert_row(Collections.inspectors.value[0], {"first_name": 'inspector[]',
                                    "last_name": 'inspector[]',
                                    "birth_date": 'inspector[]',
                                    "email_address": ' inspector[]',
                                    "start_date": datetime.today(),
                                    "number_id": 'inspector[]',
                                    "phone_number": 'inspector[]'
                                    })
