from flask import jsonify, Blueprint
from flask_cors import CORS

import db_connection.crud

app_report = Blueprint('app_report', __name__)
COLLECTION = 'reports'

@app_report.route('/reports/<report_id>')
def get(report_id):
    response = jsonify(db_connection.crud.get_row_by_id(COLLECTION, report_id))
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


@app_report.route('/reports')
def get_all():
    response = jsonify(db_connection.crud.get_all_rows(COLLECTION))
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


@app_report.route('/reports/<report_id>', methods=['DELETE'])
def delete(report_id):
    response = jsonify(db_connection.crud.get_row_by_id(COLLECTION, report_id))
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


@app_report.route('/reports/<report_id>')
def update(report_id):
    my_rep = report.Report()
    response = jsonify(my_rep.update_by_id(report_id))
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


@app_report.route('/reports/', methods=['POST'])
def add_new():
    my_rep = report.Report()
    response = jsonify(my_rep.get_by_id())
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response
