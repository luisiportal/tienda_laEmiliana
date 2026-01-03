#!/bin/sh


echo "Ejecutando migraciones..."
php artisan migrate --force || echo "⚠️ Error al migrar"

php artisan storage:link || echo "🔗 storage:link ya existe"

echo "Configurando cron job para Laravel Scheduler..."
echo "* * * * * php /var/www/artisan schedule:run >> /dev/null 2>&1" | crontab -

crond -f -l 8 &

echo "✅ Entorno listo. Iniciando PHP-FPM..."
exec "$@"
