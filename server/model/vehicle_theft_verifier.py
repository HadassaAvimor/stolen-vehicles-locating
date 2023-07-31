from urllib import request, response
import json
import vehicle_data_extraction


def fetch_car_info(license_number):
    """
    fetch data of car by its licence number
    :argument
        license number: str
    :return
        color and model of the car
    """
    base_url = f"https://data.gov.il/api/3/action/datastore_search?" \
               f"resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&filters={{\"mispar_rechev\":"
    ext_url = f"}}"
    final = base_url + license_number + ext_url
    file_obj = request.urlopen(final)
    info_str = file_obj.read()
    info_json = json.loads(info_str)
    car_model = info_json["result"]["records"][0]["kinuy_mishari"]
    car_color = info_json["result"]["records"][0]["tzeva_cd"]
    return car_color


def is_stolen(base64_vehicle):
    """
        get base64 image and return if it's stolen
        :type base64_vehicle: base64 image
        :return:
          stolen : boolean
    """
    detected_color, detected_plate = vehicle_data_extraction.extract_vehicles_features(base64_vehicle)
    real_color = fetch_car_info(detected_plate)
    return str(real_color != detected_color)
