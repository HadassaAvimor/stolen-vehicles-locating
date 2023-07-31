
from flask import jsonify, Blueprint, request

import model.vehicle_theft_verifier

app_image = Blueprint('app_image', __name__)


@app_image.route('/image', methods=['POST'])
def get_image():
    file = request.form
    image = file.get('image')
    return jsonify({
        'success': True,
        'stolen': model.vehicle_theft_verifier.is_stolen(image)
    })
