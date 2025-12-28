<?php

use App\Http\Controllers\CategoriaController;
use Illuminate\Support\Facades\Route;
use App\Http\Middleware\IsAdmin;

Route::controller(CategoriaController::class)->group(function () {

    Route::get('categorias', 'getTodasCategorias');
    Route::post('categorias', 'createCategoria');

});


Route::middleware(['auth:api', IsAdmin::class])->group(function () {
    Route::controller(CategoriaController::class)->group(function () {
        Route::get('categorias/{id}', 'getCategoriabyId');


        Route::put('categorias/edit/${id}', 'updateCategoria');
        Route::delete('categorias', 'deleteCategoria');



    });
});