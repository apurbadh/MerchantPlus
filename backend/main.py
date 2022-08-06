from fastapi import FastAPI ,  Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from passlib.hash import bcrypt
# from database import Session,engine
from typing import Union
import chain_connection
import schemas as _schemas
import fastapi as _fastapi
import services as _services
from fastapi.middleware.cors import CORSMiddleware
import sqlalchemy.orm as _orm

app = FastAPI() 


origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post('/api/secret/add/administrator')
def add_admin(admin_data:_schemas.AdminGet):
    return _services.register_admin(admin_data)

@app.post('/api/auth/admin')
def auth_admin(admin_data:_schemas.AdminGet):
    return _services.authenticate_admin(admin_data)


@app.post('/api/merchant/create')
def create_merchant(merchant_data: _schemas.MerchantRequestGet):
    return _services.make_merchant(merchant_data)

@app.get('/api/merchant/get', response_model=list[_schemas.MerchantRequestGet], response_model_exclude_unset=True)
def get_merchants():
    return _services.get_all_merchants()

@app.get('/api/merchant/get/{merchant_id}', response_model=_schemas.MerchantRequestGet, response_model_exclude_unset=True)
def get_merchant(merchant_id: int):

    return _services.get_merchant(merchant_id);

@app.post('/api/merchant/{merchant_id}/approve')
def merchant_approve(merchant_id: int):
    return _services.approve_merchant(merchant_id)

@app.post('/api/merchant/{merchant_id}/reject')
def reject_merchant(merchant_id: int):
    return _services.delete_merchant(merchant_id)



# @app.post('/maketrans')
# def make_transactions(s_add , r_add , priv_key,amt):
#    try:
#        chain_connection.make_trans(s_add, r_add, priv_key, amt)
#    except:
#        return {"message":" Error "}
    

# @app.get('/history/{address}')
# def transaction_history(address:str):
#     return address
    
    
    
    
    
#     # Database -> get data -> send json back
#     pass

# @app.put('/products')
# def update():
#     pass
