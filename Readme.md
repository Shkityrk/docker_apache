## Описание проекта

Данный проект представляет собой веб-приложение, созданное с использованием FastAPI и SQLAlchemy, которое реализует аутентификацию пользователей с помощью JWT-токенов, хранящихся в cookies. Приложение включает в себя регистрацию пользователей, вход в систему и доступ к защищенным маршрутам, которые требуют аутентификации.

## Стек технологий

- Python 3.10+
- FastAPI
- SQLAlchemy
- PostgreSQL (или другая поддерживаемая база данных)
- JWT (JSON Web Tokens)

## Установка

1. Клонируйте репозиторий проекта:

   git clone https://github.com/Shkityrk/docker_apache.git


2. Установите зависимости:

   pip install -r requirements.txt


3. Настройте переменные окружения:

   Создайте файл .env в директории backend и добавьте следующие переменные:
```env
SECRET_KEY=your_secret_key
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
DATABASE_URL=postgresql://username:password@localhost:5432/yourdatabase
```

- SECRETKEY**: Секретный ключ для кодирования JWT-токенов. 

- **ALGORITHM**: Алгоритм шифрования JWT (обычно HS256).
- **ACCESS_TOKEN_EXPIRE_MINUTES**: Время жизни токена доступа в минутах.
- **DATABASE_URL**: URL вашей базы данных.

Создайте файл .env в директории backend и добавьте следующие переменные:
```env
REACT_APP_API_URL=http://localhost:8000
DATABASE_URL=postgresql://username:password@localhost:5432/yourdatabase
SECRET_KEY=your_secret_key
DEBUG=0
```

4. **Проведите миграцию базы данных (если используете Alembic):**

```bash
alembic upgrade head
```


## Запуск приложения

1. **Запустите, используя Docker:**


```bash
docker compose -f docker-compose.yml up --build
```

## Приложение будет доступно по адресу:

```url
http://localhost:8004
```
