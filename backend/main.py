from fastapi import FastAPI ,  Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from passlib.hash import bcrypt
# from database import Session,engine
from typing import Union
import chain_connection
import schemas as _schemas
import fastapi as _fastapi
import services as _services
import sqlalchemy.orm as _orm
app = FastAPI() 


@app.post('/api/secret/add/administrator')
def add_admin(admin_data:_schemas.AdminGet):
    return _services.register_admin(admin_data)

@app.post('/api/auth/admin')
def auth_admin(admin_data:_schemas.AdminGet):
    return _services.authenticate_admin(admin_data)


@app.post('/api/cardRequest')
def create_users(user_data:_schemas.CardRequestGet,): 
    return _services.createUser_req(user_data)



@app.post('/api/merchantRequest')
def create_merchant(merchant_data:_schemas.MerchantRequestGet):
    return _services.makemerchant(merchant_data)


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
