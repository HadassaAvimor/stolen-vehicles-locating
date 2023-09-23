from datetime import date
from enum import Enum
from typing import Optional

from pydantic import BaseModel


class Area(Enum):
    pass


class CarColor(Enum):
    pass


class CarCompany(Enum):
    pass


class Report(BaseModel):
    area: Area
    inspector_id: str
    license_plate: str
    car_color: CarColor
    car_company: CarCompany
    date: date
