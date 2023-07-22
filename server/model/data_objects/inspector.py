import datetime

import pymongo


# from Dal import mongoDBConnection

# inspectors = ICRUD.db['inspectors']


class Inspector:

    def __init__(self):
        self.client = pymongo.MongoClient('mongodb+srv://AvigailMintz:324947977@cluster0.dlu3tcy.mongodb.net/test')
        self.my_db = self.client['python_project']
        self.inspectors = self.my_db['inspectors']

    def get_by_id(self, inspector_id):
        for inspector in self.inspectors.find({'number_id': inspector_id}, {'_id': 0}):
            return inspector

    def get_all(self):
        try:
            all_inspectors = []
            for inspector in self.inspectors.find({}, {'_id': 0}):
                all_inspectors.append(inspector)
            return all_inspectors
        except:
            return "an error occurred"

    def add_new(self, inspector):
        try:
            self.inspectors.insert_one({"first_name": inspector['fName'],
                                        "last_name": inspector['lName'],
                                        "birth_date": inspector['birth_date'],
                                        "email_address": inspector['email'],
                                        "start_date": datetime.datetime.today(),
                                        "number_id": inspector['id'],
                                        "phone_number": inspector['phone']
                                        })
            return True
        except:
            return False

    def update_by_id(self, inspector_id, field, update):
        self.inspectors.update_one({'number_id': inspector_id}, {'$set': {field: update}})

    def delete_by_id(self, inspector_id):
        self.inspectors.delete_one({'number_id': inspector_id})
        return inspector_id
