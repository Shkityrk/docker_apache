# Используем официальный образ Nginx
FROM nginx:latest

# Удаление стандартного конфигурационного файла Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Копирование вашей конфигурации Nginx в контейнер
COPY nginx.conf /etc/nginx/conf.d/app.conf

# Открытие порта 80 для входящих соединений
EXPOSE 80

# Запуск Nginx в форграунд режиме
CMD ["nginx", "-g", "daemon off;"]
