<?php

use App\Http\Controllers\MovimientoController;
use App\Http\Controllers\ProductoController;
use App\Http\Middleware\IsAdmin;
use Illuminate\Support\Facades\Route;




Route::middleware(['auth:api', IsAdmin::class])->group(function () {
    Route::controller(MovimientoController::class)->group(function () {
        Route::get('movimientos', 'index');
        Route::post('movimientos', 'store');
        Route::put('movimientos/edit/{id}', 'update');
        Route::delete('movimientos/{id}', 'destroy');



    });
});