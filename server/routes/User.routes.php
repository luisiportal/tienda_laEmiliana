<?php

use App\Http\Controllers\UserController;
use App\Http\Middleware\IsAdmin;
use App\Http\Middleware\IsUserAuth;
use Illuminate\Support\Facades\Route;


// public routes

// rutas admin
Route::middleware([IsAdmin::class])->group(function () {
    Route::controller(UserController::class)->group(function () {
        Route::get('usuarios/', 'getUsuarios');
    });
});

Route::middleware([IsAdmin::class])->group(function () {
    Route::controller(UserController::class)->group(function () {
        Route::delete('usuarios/{id}', 'destroy');
        Route::post('usuarios/buscar', 'buscarUsuarios');
        Route::post('usuarios/', 'register');


    });
});

//private routes
Route::middleware([IsUserAuth::class])->group(function () {
    Route::controller(UserController::class)->group(function () {
        Route::get('usuarios/{id}', 'getUser');
        Route::put('usuarios/edit/{id}',  'updateUser');
    });
});