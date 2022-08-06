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
def createusers(user_data:_schemas.CardRequestGet,): # ?
    cd_req = CardRequest(
        name = request.name,
        email = request.email,
        address = request.address    
    )
    loc_session.add(cd_req)
    loc_session.commit()
    
    return {"message": "card request Sent"}



@app.post('/merchant')
def merchat():
    local_session = Session(bind=engine )
    cd_req = merchantRequest(
        name = request.name,
        email = request.email,
        address = request.address    
    )
    local_session.add(cd_req)
    local_session.commit()
    
    return {"message": "Mearchant request Sent"}




@app.post('/maketrans')
def make_transactions(s_add , r_add , priv_key,amt):
   try:
       chain_connection.make_trans(s_add, r_add, priv_key, amt)
   except:
       return {"message":" Error "}
    

@app.get('/history/{address}')
def transaction_history(address:str):
    return address
    
    
    
    
    
    # Database -> get data -> send json back
    pass

@app.put('/products')
def update():
    pass
