from db_connection import engine , Base


Base.metadata.create_all(engine)

