<?php

use App\Http\Controllers\VentaController;
use Illuminate\Support\Facades\Route;

Route::controller(VentaController::class)->group(function () {

    Route::post('ventas', 'store');

});

