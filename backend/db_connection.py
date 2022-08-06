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



Session = sessionmaker()


class User(Base):
    __tablename__ = "users"
    id = Column(Integer() , primary_key = True)
    name = Column(String(50), nullable = False, unique=True)
    email = Column(EmailType(150), unique = True , nullable =False)
    address = Column(String(150), nullable = False), # blockchain address or real place address
    password = Column(PasswordType(schemes=['pbkdf2_sha512','md5_crypt'],deprecated=['md5_crypt']), nullable = False)
    date_create = Column(DateTime() , default = datetime.utcnow)

class Meachant(Base):
    __tablename__ = "mearchants"
    id = Column(Integer() , primary_key = True)
    name = Column(String(50), nullable = False, unique=True)
    email = Column(EmailType(150), unique = True , nullable =False)
    address = Column(String(150), nullable = False), # blockchain address or real place address
    password = Column(PasswordType(schemes=['pbkdf2_sha512','md5_crypt'],deprecated=['md5_crypt']), nullable = False)
    products = relationship('products', backref='merchant')
    date_create = Column(DateTime() , default = datetime.utcnow)

class Transaction(Base):
    __tablename__ = "transactions"
    id = Column(Integer(), primary_key = True)
    sender = Column(String() )
    reciever = Column(String())
    amount = Column(Integer())

class Product(Base):
    __tablename__ = "products"
    id = Column(Integer(), primary_key=True)
    product =  Column(String(150))
    amount = Column(Integer())
    merchant_id = Column(Integer(), ForeignKey('merchant.id'))


class CardRequest(Base):
    __tablename__ ="cardRequests"
    id = Column(Integer() , primary_key = True)
    name = Column(String(50), nullable = False, unique=True)
    email = Column(EmailType(150), unique = True , nullable =False)
    address = Column(String(150), nullable = False), # blockchain address or real place address
    password = Column(PasswordType(schemes=['pbkdf2_sha512','md5_crypt'],deprecated=['md5_crypt']), nullable = False)
    date_create = Column(DateTime() , default = datetime.utcnow)
    
class merchantRequest(Base):
    __tablename__
    id = Column(Integer() , primary_key = True)
    name = Column(String(50), nullable = False, unique=True)
    email = Column(EmailType(150), unique = True , nullable =False)
    address = Column(String(150), nullable = False), # blockchain address or real place address
    password = Column(PasswordType(schemes=['pbkdf2_sha512','md5_crypt'],deprecated=['md5_crypt']), nullable = False)
    date_create = Column(DateTime() , default = datetime.utcnow)
