from datetime import datetime
from enum import Enum

from pymongo import MongoClient
import os

client = MongoClient(os.getenv('DB_CONNECTION_STRING'))
my_db = client['python_project']


class Collections(Enum):
    inspectors = my_db['inspectors'],
    reports = my_db['reports']




