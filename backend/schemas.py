import pydantic as _pydantic


class CardRequestGet(_pydantic.BaseModel):
    name:str
    email:str


    class Config:
        orm_mode=True

class AdminGet(_pydantic.BaseModel):
    username:str 
    password:str
    class Config:
        orm_mode=True

class AdminJWT(_pydantic.BaseModel):
    username:str 
    class Config:
        orm_mode=True