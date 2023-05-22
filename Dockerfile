FROM php:7.4-apache
COPY . /var/www/html
WORKDIR /var/www/html
RUN apt-get update && apt-get install -y \
    libzip-dev \
    zip \
    && docker-php-ext-install zip
RUN docker-php-ext-install mysqli pdo pdo_mysql
RUN a2enmod rewrite
RUN chown -R www-data:www-data /var/www/html
RUN chmod -R 777 /var/www/html
EXPOSE 80