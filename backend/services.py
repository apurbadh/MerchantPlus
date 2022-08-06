# from db_connection import Session,engine
import schemas as _schemas
import sqlalchemy.orm as _orm
import models as _models
import passlib.hash as _hash
import database as _database
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


