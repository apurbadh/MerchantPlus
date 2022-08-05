from sqlalchemy.orm import declarative_base
from sqlalchemy import create_engine
from sqlalchemy import Column , String , DateTime, Integer, ForeignKey
from datetime import datetime
import os 
from sqlalchemy import ForeignKey
Base = declarative_base()

BASE_DIR = os.path.dirname(os.path.realpath(__file__))

connection_string = "sqlite:///" + os.path.join(BASE_DIR,'mydb.db' )
# needs to set a proper SQL data base
engine = create_engine(connection_string, echo = True)



class User(Base):
    __tablename__ = "users"
    id = Column(Integer() , primary_key = True)
    name = Column(String(50), nullable = False, unique=True)
    email = Column(String(150), unique = True , nullable =False)
    adress = Column(String(150), nullable = False),
    password = Column(String(100), nullable = False)
    date_create = Column(DateTime() , default = datetime.utcnow)
