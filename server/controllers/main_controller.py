from flask import Flask
from report_controller import app_report
from inspector_controller import app_inspector
from image_controller import app_image
# from car_description_controller import app_car_description
from flask_cors import CORS

app = Flask(__name__)
app.register_blueprint(app_inspector)
app.register_blueprint(app_image)
app.register_blueprint(app_report)
# app.register_blueprint(app_car_description)

CORS(app)

if __name__ == '__main__':
    app.run()
