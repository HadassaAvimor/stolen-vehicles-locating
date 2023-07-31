from flask import Flask, jsonify, Blueprint, render_template, session, abort
from Model.dataObject import report
from flask_cors import CORS

app_report = Blueprint('app_report', __name__)


@app_report.route('/reports/<report_id>')
def get(report_id):
    my_rep = report.Report()
    response = jsonify(my_rep.get_by_id(report_id))
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


@app_report.route('/reports')
def get_all():
    my_rep = report.Report()
    response = jsonify(my_rep.get_all())
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


@app_report.route('/reports/<report_id>', methods=['DELETE'])
def delete(report_id):
    my_rep = report.Report()
    response = jsonify(my_rep.delete_by_id(report_id))
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
