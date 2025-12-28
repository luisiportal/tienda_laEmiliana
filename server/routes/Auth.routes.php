<?php

use App\Http\Controllers\AuthController;
use App\Http\Middleware\IsUserAuth;
use Illuminate\Support\Facades\Route;

// public routes


Route::post('verificar-dispositivo', [AuthController::class, 'verificar']);

Route::post('login', [AuthController::class, 'login']);
Route::post('verify', [AuthController::class, 'verifyToken']);
Route::post('registrar-dispositivo', [AuthController::class, 'registrar']);


//private routes
Route::middleware([IsUserAuth::class])->group(function () {
    Route::controller(AuthController::class)->group(function () {

        Route::post('autorizar-dispositivo', 'autorizarDispositivo');
        Route::delete('dispositivos/{id}', 'deleteDispositivo');

        Route::get('logout', 'logout');
        Route::get('dispositivos', 'getTodosDispositivos');
    });
});