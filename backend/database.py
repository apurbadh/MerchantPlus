from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
import sqlalchemy.ext.declarative as declarative
# from dotenv.
SQLALCHEMY_DATABASE_URL = "sqlite:///merchant_plus.sqlite"

engine  = create_engine(SQLALCHEMY_DATABASE_URL,connect_args={"check_same_thread": False})

SessionLocal = sessionmaker(autocommit=False, autoflush=False,bind=engine)
Base = declarative.declarative_base()