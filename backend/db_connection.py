from sqlalchemy.orm import declarative_base , sessionmaker , relationship
from sqlalchemy import create_engine
from sqlalchemy import Column , String , DateTime, Integer, ForeignKey
from datetime import datetime
from sqlalchemy_utils import EmailType , PasswordType 
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
    email = Column(EmailType(150), unique = True , nullable =False)
    adrress = Column(String(150), nullable = False),
    password = Column(PasswordType(schemes=['pbkdf2_sha512','md5_crypt'],deprecated=['md5_crypt']), nullable = False)
    date_create = Column(DateTime() , default = datetime.utcnow)

class Mearhant(Base):
    __tablename__ = "mearchants"
    id = Column(Integer() , primary_key = True)
    name = Column(String(50), nullable = False, unique=True)
    email = Column(EmailType(150), unique = True , nullable =False)
    adrress = Column(String(150), nullable = False),
    password = Column(PasswordType(schemes=['pbkdf2_sha512','md5_crypt'],deprecated=['md5_crypt']), nullable = False)
    date_create = Column(DateTime() , default = datetime.utcnow)
    