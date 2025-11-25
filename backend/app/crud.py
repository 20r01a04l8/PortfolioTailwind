from .models import messages
from .database import engine
import sqlalchemy

def create_tables():
    metadata = messages.metadata
    metadata.create_all(bind=engine)

def save_message(db, name, email, message):
    ins = messages.insert().values(name=name, email=email, message=message)
    db.execute(ins)
    db.commit()
