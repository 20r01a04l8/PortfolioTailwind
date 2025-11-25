from sqlalchemy import Table, Column, Integer, String, Text, DateTime
from sqlalchemy.sql import func
from .database import metadata

messages = Table(
    'messages',
    metadata,
    Column('id', Integer, primary_key=True),
    Column('name', String(200)),
    Column('email', String(200)),
    Column('message', Text),
    Column('created_at', DateTime, server_default=func.now())
)
