
from flask import jsonify, Blueprint, request

# from Model.car_detect import Image

app_image = Blueprint('app_image', __name__)


@app_image.route('/image', methods=['POST'])
def get_image():
    file = request.form
    image = file.get('image')
    new_image = Image(image)
    return jsonify({
        'success': True,
        'stolen': new_image.stolen
    })
