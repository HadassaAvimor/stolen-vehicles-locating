import json
# from urllib import request
from flask import jsonify, Blueprint, request
from Model.dataObject import inspector

app_inspector = Blueprint('app_inspector', __name__)
global my_in
my_in = inspector.Inspector()


@app_inspector.route('/inspectors/<inspector_id>')
def get(inspector_id):
    # my_in = inspector.Inspector()
    response = jsonify(my_in.get_by_id(inspector_id))
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
    # my_in = inspector.Inspector()
    response = jsonify(my_in.get_all())
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



