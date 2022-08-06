# from db_connection import Session,engine
import schemas as _schemas
import sqlalchemy.orm as _orm
import models as _models
import jwt as _jwt
import passlib.hash as _hash
import database as _database
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
        print(e)
        return e


def authenticate_admin(admin_data:_schemas.AdminGet,db:_orm.Session = get_db()):
    admin = db.query(_models.Admin).filter(admin_data.username == _models.Admin.username).first()
    if not admin.verify_password(admin_data.password):
        raise _fastapi.HTTPException(status_code=422,detail="Invalid Credentials")
    admin_data = _schemas.AdminJWT.from_orm(admin).dict()
    admin_data["is_admin"] = True
    payload ={"admin_data":admin_data,
    "exp":int((datetime.utcnow() + timedelta(days=7)).timestamp()),
    "ist":int(datetime.utcnow().timestamp()),
    "bozo_secret_4dmin":True}
    token = _jwt.encode(payload,JWT_SECRET_KEY)
    return {"bearer":token}



def createUser_req(user_data:_schemas.CardRequestGet, db:_orm.Session = get_db()):
    user_obj = _models.User(name =user_data.name ,email=user_data.email, address = user_data.address,phone_number=user_data.phone_number , password_desired=user_data.password )
    try:
        db.add( user_obj )
        db.commit()
        db.refresh(user_obj)
        
    except Exception as e:
        print(e)
        
        
        
def makemerchant(merchant_data:_schemas.MerchantRequestGet, db:_orm.Session = get_db()):
    user_obj = _models.User(name =merchant_data.name ,email=merchant_data.email, address = merchant_data.address,phone_number=merchant_data.phone_number , password_desired=merchant_data.password )
    try:
        db.add( user_obj )
        db.commit()
        db.refresh(user_obj)
        
    except Exception as e:
        print(e)
