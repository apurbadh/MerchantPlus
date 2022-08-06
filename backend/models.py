from datetime import datetime
import os 
from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, Boolean,Text
from sqlalchemy.orm import relationship
from database import Base
import passlib.hash as _hash
from sqlalchemy_utils.types import URLType,EmailType,PasswordType


class Admin(Base):
    __tablename__ = "admin"
    id = Column(Integer() , primary_key = True)
    username = Column(String(50), nullable = False, unique=True)
    hashed_password = Column(String(), nullable = False)
    date_created = Column(DateTime() , default=datetime.utcnow())

    def verify_password(self,password_to_check:str)->bool:
        return _hash.bcrypt.verify(password_to_check,self.hashed_password)


class Merchant(Base):
    __tablename__ = "merchants"
    id = Column(Integer() , primary_key = True)
    name = Column(String(50), nullable = False, unique=True)
    email = Column(EmailType(150), unique = True , nullable =False)
    address = Column(String(150), nullable = False)
    phone_number = Column(String(10),nullable=True,index=True)
    password_desired = Column(PasswordType(schemes=['pbkdf2_sha512','md5_crypt'],deprecated=['md5_crypt']), nullable = False)
    date_createed = Column(DateTime() , default = datetime.utcnow())
    is_approved = Column(Boolean(),default=False,nullable=False)

# class Transaction(Base):
#     __tablename__ = "transactions"
#     id = Column(Integer(), primary_key = True)
#     sender = Column(String(150) )
#     reciever = Column(String(150))
#     amount = Column(Integer())

# class Product(Base):
#     __tablename__ = "products"
#     id = Column(Integer(), primary_key=True)
#     product =  Column(String(150))
#     amount = Column(Integer())
#     merchant_id = Column(Integer(), ForeignKey('mearchants.id'))


# class CardRequest(Base):
#     __tablename__ ="cardRequests"
#     id = Column(Integer() , primary_key = True)
#     name = Column(String(50), nullable = False, unique=True)
#     email = Column(EmailType(150), unique = True , nullable =False)
#     address = Column(String(150), nullable = False) # blockchain address or real place address
#     password = Column(PasswordType(schemes=['pbkdf2_sha512','md5_crypt'],deprecated=['md5_crypt']), nullable = False)
#     date_create = Column(DateTime() , default = datetime.utcnow)
    
# class merchantRequest(Base):
#     __tablename__ = 'merchantRequest'
#     id = Column(Integer() , primary_key = True)
#     name = Column(String(50), nullable = False, unique=True)
#     email = Column(EmailType(150), unique = True , nullable =False)
#     address = Column(String(150), nullable = False) # blockchain address or real place address
#     password = Column(PasswordType(schemes=['pbkdf2_sha512','md5_crypt'],deprecated=['md5_crypt']), nullable = False)
#     date_create = Column(DateTime() , default = datetime.utcnow)
