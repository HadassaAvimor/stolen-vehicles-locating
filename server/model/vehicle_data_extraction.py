import base64
import os

import numpy as np
import cv2
from matplotlib import pyplot as plt
from keras.models import load_model
import requests
from PIL.Image import fromarray


def extract_vehicles_features(base64):
    rgb = base64_2_rgb(base64)
    color = detect_car_color(rgb)
    plate = detect_car_plate(rgb)
    return color, plate


def base64_2_rgb(self):
    """
    convert base64 image to rgb array
    :argument
        img: base64
    :return:
    image - rgb array
    """
    encoded_data = self.base64.split(',')[1]
    nparr = np.fromstring(base64.b64decode(encoded_data), np.uint8)
    img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
    return img


def detect_car_color(rgb_image):
    """
    detect the car color and return it.
       argument:
       rgb_image: rgb array
       :return:
       color : str
       """
    img = rgb_image
    model = load_model(
        "C:/VehicleIdentification/EfficientNetB3-car color-87.27.h5")
    fpath = r"C:/Users/h0533/Downloads/546b4856e8fcb_-_lead-10862398.jpg"
    img = cv2.resize(img, (224, 224))
    plt.axis('off')
    img = np.expand_dims(img, axis=0)
    pred = model.predict(img)
    index = np.argmax(pred[0])
    classes = ['beige', 'black', 'blue', 'brown', 'gold', 'green', 'grey', 'orange', 'pink', 'purple', 'red',
               'silver',
               'tan', 'white', 'yellow']
    klass = classes[index]
    probability = pred[0][index] * 100
    return klass


def detect_car_model(self):
    """
    detect the car model and return it.
    argument:
     cropped_image: rgb array
     :return:
     model : str
    """
    pass


def detect_car_plate(rgb_image):
    """
    detect the car license plate and return its number.
       argument:
       rgb_image: rgb array
       :return:
       license_plate : int
       """
    img = fromarray(rgb_image.astype('uint8'))
    img.save('car.png')
    import json
    regions = ['mx', 'il']
    with open('car.png', 'rb') as fp:
        response = requests.post(
            'https://api.platerecognizer.com/v1/plate-reader/',
            data=dict(regions=regions, config=json.dumps(dict(region="strict"))),
            files=dict(upload=fp),
            headers={'Authorization': os.environ['PLATE_DETECTER_TOKEN']},
            verify=False
        )
    plate = response.json()
    return str(plate)



