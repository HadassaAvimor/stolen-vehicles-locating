from datetime import datetime

from pymongo import MongoClient
import os

client = MongoClient(os.getenv('DB_CONNECTION_STRING'))
my_db = client['python_project']
inspectors = my_db['inspectors']


def insert_row(collection, row):
    """

    :param collection: a collection to insert to it from enum Collections .
    :param row: json row to insert.
    :return:
    """
    a = collection.insert_one(row)
    print(a)


insert_row(inspectors, {"first_name": 'inspector[]',
                        "last_name": 'inspector[]',
                        "birth_date": 'inspector[]',
                        "email_address": ' inspector[]',
                        "start_date": datetime.today(),
                        "number_id": 'inspector[]',
                        "phone_number": 'inspector[]'
                        })
