from datetime import datetime
from enum import Enum

from pymongo import MongoClient
import os

client = MongoClient('mongodb+srv://AvigailMintz:324947977@cluster0.dlu3tcy.mongodb.net/test')
my_db = client['python_project']


class Collections(Enum):
    inspectors = my_db['inspectors'],
    reports = my_db['reports']




