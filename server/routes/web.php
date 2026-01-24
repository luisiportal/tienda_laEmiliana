<?php

use App\Http\Middleware\IsAdmin;
use Illuminate\Support\Facades\Artisan;

use Illuminate\Support\Facades\Route;


Route::get('/migrate', function () {
        Artisan::call('migrate', ['--force' => true]);
        return nl2br("✔ Migraciones ejecutadas correctamente\n"); });
    Route::get('/clear', function () {
        // Ejecuta los comandos de optimización
        Artisan::call('config:cache');
        Artisan::call('route:cache');
        Artisan::call('view:cache');

        return nl2br("✔ Config cacheado\n✔ Rutas cacheadas\n✔ Vistas cacheadas\n✔ Eventos cacheados");
    });