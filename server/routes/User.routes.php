<?php

use App\Http\Controllers\UserController;
use App\Http\Middleware\IsAdmin;
use App\Http\Middleware\IsUserAuth;
use Illuminate\Support\Facades\Route;


// public routes

 Route::controller(UserController::class)->group(function () {
  
        Route::post('usuarios/', 'register');


    });


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


    });
});

//private routes
Route::middleware([IsUserAuth::class])->group(function () {
    Route::controller(UserController::class)->group(function () {
        Route::get('usuarios/{id}', 'getUser');
        Route::put('usuarios/edit/{id}',  'updateUser');
    });
});