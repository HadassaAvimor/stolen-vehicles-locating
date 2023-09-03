from datetime import date
from typing import Optional

from pydantic import BaseModel


class Inspector(BaseModel):
    first_name: str
    last_name: str
    birth_date: date
    email_address: str
    start_date: date
    number_id: int
    phone_number: Optional[str] = None

