import json
# from urllib import request
from flask import jsonify, Blueprint, request
from db_connection.db_connection import Collections
from db_connection.crud import get_row_by_id, get_all_rows, insert_row, delete_row_by_id

app_inspector = Blueprint('app_inspector', __name__)


@app_inspector.route('/inspectors/<inspector_id>')
def get(inspector_id):
    response = jsonify(get_row_by_id(Collections.inspectors, inspector_id))
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


@app_inspector.route('/inspectors/<inspector_id>/<inspector_first_name>/<inspector_last_name>')
def login(inspector_id, inspector_first_name, inspector_last_name):
    # my_in = inspector.Inspector()
    check = my_in.get_by_id(inspector_id)
    if check and check['first_name'] == inspector_first_name and check['last_name'] == inspector_last_name:
        return check
        # response.headers.add('Access-Control-Allow-Origin', '*')
    return json.dumps(False)


@app_inspector.route('/inspectors')
def get_all():
    response = jsonify(get_all_rows(Collections.inspectors))
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


@app_inspector.route('/inspectors/<inspector_id>', methods=['DELETE'])
def delete(inspector_id):
    # my_in = inspector.Inspector()
    response = jsonify(my_in.delete_by_id(inspector_id))
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


@app_inspector.route('/inspectors/<inspector_id>')
def update(inspector_id):
    response = jsonify(inspector.Inspector.update_by_id(inspector_id))
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


@app_inspector.route('/inspectors', methods=['POST'])
def add_new():
    # my_in = inspector.Inspector()
    return my_in.add_new(request.json['newInspector'])
