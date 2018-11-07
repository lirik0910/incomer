FROM php:7.2-fpm-alpine

RUN apk update
RUN apk add --no-cache g++ make autoconf
RUN apk add --no-cache zlib-dev
RUN docker-php-ext-install pdo_mysql zip
RUN pecl install xdebug
RUN docker-php-ext-enable xdebug