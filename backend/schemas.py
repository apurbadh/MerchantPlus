import pydantic as _pydantic


class CardRequestGet(_pydantic.BaseModel):
    name:str
    email:str
    address : str
    phone_number :  int 
    password :str


    class Config:
        orm_mode=True
        
class MerchantRequestGet(_pydantic.BaseModel):
    name:str 
    email:str
    address : str
    phone_number :  int 
    password :str
    class Config:
        orm_mode = Trued

class AdminGet(_pydantic.BaseModel):
    username:str 
    password:str
    class Config:
        orm_mode=True

class AdminJWT(_pydantic.BaseModel):
    username:str 
    class Config:
        orm_mode=True