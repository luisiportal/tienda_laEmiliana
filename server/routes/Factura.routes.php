<?php

use App\Http\Controllers\FacturaController;


use App\Http\Middleware\IsAdmin;
use Illuminate\Support\Facades\Route;




Route::middleware(['auth:api', IsAdmin::class])->group(function () {
    Route::controller(FacturaController::class)->group(function () {
        Route::get('facturas', 'index');
        Route::delete('facturas/{id}', 'destroy');




    });
});