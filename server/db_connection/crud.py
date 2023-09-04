from db_connection import Collections


def get_row_by_id(collection, id):
    """
    A function to fetch row from DB by id, according to collection param.
    :param collection:  a collection to fetch from,  from enum Collections .
    :param id: str
    :return:
    """
    for row in collection.find({'number_id': id}, {'_id': 0}):
        return row


def get_all_rows(collection):
    """
    A function to get all rows from a collection,
    :param collection:  a collection to fetch from,  from enum Collections .
    :return: List[row]
    """
    return list(collection.find({}))


def insert_row(collection, row):
    """
    A function to insert row to DB, according to collection param.
    :param collection: a collection to insert to from enum Collections .
    :param row: json row to insert.
    :return:
    """
    collection.insert_one(row)


def delete_row_by_id(collection, id):
    """
     A function to insert row to DB, according to collection param.
    :param collection: a collection to delete from, from enum Collections
    :param id: str
    :return:
    """
    collection.delete_one({'number_id': id})
    return id


