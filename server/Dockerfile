FROM php:8.2-fpm-alpine

# Instala dependencias necesarias para Laravel
RUN apk add --no-cache \
    busybox\
	bash \
    libzip-dev \
    oniguruma-dev \
    unzip \
    curl \
    git \
    libjpeg-turbo-dev \
    libpng-dev \
    freetype-dev \
  && docker-php-ext-configure gd --with-jpeg --with-freetype \
  && docker-php-ext-install pdo pdo_mysql zip gd

# Copia Composer desde la imagen oficial
COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer

# Crea el directorio de trabajo y copia el código
WORKDIR /var/www/
COPY . .

RUN if [ ! -f composer.json ]; then echo "❌ composer.json no encontrado en $(pwd)"; exit 1; else echo "✅ composer.json OK"; fi

RUN mkdir -p storage bootstrap/cache \
    && composer install --no-dev --optimize-autoloader --no-scripts \
    && chown -R www-data:www-data /var/www \
    && chmod -R 775 storage bootstrap/cache


RUN composer install --no-dev --optimize-autoloader --no-scripts \
    && chown -R www-data:www-data /var/www \
    && chmod -R 775 /var/www/storage /var/www/bootstrap/cache


# Copiar y preparar entrypoint para migraciones
COPY scripts/entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

# Usar entrypoint para ejecutar migraciones al iniciar el contenedor
ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]

# Iniciar PHP-FPM
CMD ["php-fpm"]