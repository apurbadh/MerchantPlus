# from db_connection import Session,engine
import schemas as _schemas
import sqlalchemy.orm as _orm
import models as _models
import jwt as _jwt
import passlib.hash as _hash
import database as _database
import fastapi as _fastapi


from datetime import datetime,timedelta
JWT_SECRET_KEY ="rajesh_dai_and_friends"

def get_db():
    db =  _database.SessionLocal()
    try: 
        return db
    finally:
        db.close()

def register_admin(admin_data:_schemas.AdminGet,db:_orm.Session = get_db()):
    admin_obj = _models.Admin(username=admin_data.username,hashed_password=_hash.bcrypt.hash(admin_data.password))
    try:
        db.add(admin_obj)
        db.commit()
        db.refresh(admin_obj)
        return {"success":f"Added Admin {admin_data.username}"}
    except Exception as e:
        raise _fastapi.HTTPException(422, "Error has occured")



def authenticate_admin(admin_data:_schemas.AdminGet,db:_orm.Session = get_db()):
    admin = db.query(_models.Admin).filter(admin_data.username == _models.Admin.username).first()
    if not admin or not admin.verify_password(admin_data.password):
        raise _fastapi.HTTPException(status_code=422,detail="Invalid Credentials")
    admin_data = _schemas.AdminJWT.from_orm(admin).dict()
    admin_data["is_admin"] = True
    payload ={"admin_data":admin_data,
    "exp":int((datetime.utcnow() + timedelta(days=7)).timestamp()),
    "ist":int(datetime.utcnow().timestamp()),
    "bozo_secret_4dmin":True}
    
    token = _jwt.encode(payload,JWT_SECRET_KEY)
    return {"bearer":token}


        
        
def make_merchant(merchant_data:_schemas.MerchantRequestStore, db:_orm.Session = get_db()):
    user_obj = _models.Merchant(name=merchant_data.name, email=merchant_data.email, address=merchant_data.address, phone_number=merchant_data.phone_number, password_desired=merchant_data.password_desired,
    is_approved=False )
    try:
        db.add( user_obj )
        db.commit()
        db.refresh(user_obj)

        return {"success" : f"{merchant_data.name}'s request has been sent sucessfully !"}
        
    except Exception as e:
        raise _fastapi.HTTPException(422, "Invalid Data")


def approve_merchant(merchant_id: int,db:_orm.Session = get_db()):
    try:
        merchant = db.query(_models.Merchant).get(merchant_id)
        merchant.is_approved = True
        db.commit()
        db.refresh(merchant)

        return {"success" : f"{merchant.name} has been approved !"}
    except Exception as e:
        raise _fastapi.HTTPException(422, "The user doesn't exist")


    

def get_all_merchants(db:_orm.Session = get_db()):

    return db.query(_models.Merchant).filter(is_approved=False)
    

def delete_merchant(merchant_id: int, db:_orm.Session = get_db()):

    try:
        merchant = db.query(_models.Merchant).get(merchant_id)
        db.delete(merchant)
        db.commit()

        return {"success": f"{merchant.name} has been rejected !"}
    
    except Exception as e:
        
        raise _fastapi.HTTPException(422, "Cannot reject the user")



def get_merchant(merchant_id: int, db:_orm.Session = get_db()):
    try:
        merchant = db.query(_models.Merchant).get(merchant_id)
        return merchant
    except Exception as e:
        
        raise _fastapi.HTTPException(404, "Cannot find the user")


def authenticate_merchant(admin_data:_schemas.MerchantGet,db:_orm.Session = get_db()):
    admin = db.query(_models.Merchant).filter(admin_data.email == _models.Merchant.email, admin_data.password == _models.Merchant.password_desired).first()
    if not admin:
        raise _fastapi.HTTPException(status_code=422,detail="Invalid Credentials")
    admin_data = _schemas.AdminJWT.from_orm(admin).dict()
    admin_data["is_admin"] = True
    payload ={"admin_data":admin_data,
    "exp":int((datetime.utcnow() + timedelta(days=7)).timestamp()),
    "ist":int(datetime.utcnow().timestamp()),
    "bozo_secret_4dmin":True}
    
    token = _jwt.encode(payload,JWT_SECRET_KEY)
    return {"bearer":token}

