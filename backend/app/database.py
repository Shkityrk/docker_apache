from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import os


# Получаем переменные окружения
DATABASE_HOST = os.getenv('DATABASE_HOST', 'db')
DATABASE_PORT = os.getenv('DATABASE_PORT', '5432')
DATABASE_NAME = os.getenv('DATABASE_NAME', 'user')
DATABASE_USER = os.getenv('DATABASE_USER', 'konstantin')
DATABASE_PASSWORD = os.getenv('DATABASE_PASSWORD', 'konstantin')

DATABASE_URL = f"postgresql://{DATABASE_USER}:{DATABASE_PASSWORD}@{DATABASE_HOST}:{DATABASE_PORT}/{DATABASE_NAME}"

try:

    engine = create_engine(DATABASE_URL)
    connection = engine.connect()
    print("Подключение к базе данных успешно!")
    connection.close()

    SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

except Exception as e:
    print(f"Ошибка подключения к базе данных: {e}")

Base = declarative_base()
