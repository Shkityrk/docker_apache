FROM httpd:2.4

# Включение необходимых модулей: proxy, proxy_http, rewrite
RUN sed -i '/LoadModule proxy_module/s/^#//g' /usr/local/apache2/conf/httpd.conf \
    && sed -i '/LoadModule proxy_http_module/s/^#//g' /usr/local/apache2/conf/httpd.conf \
    && sed -i '/LoadModule rewrite_module/s/^#//g' /usr/local/apache2/conf/httpd.conf

# Добавление глобальной директивы ServerName
RUN echo "ServerName localhost" >> /usr/local/apache2/conf/httpd.conf

# Копирование конфигурационного файла виртуального хоста
COPY conf/sites.conf /usr/local/apache2/conf/sites.conf

# Включение файла конфигурации виртуального хоста в основной httpd.conf
RUN echo "Include conf/sites.conf" >> /usr/local/apache2/conf/httpd.conf