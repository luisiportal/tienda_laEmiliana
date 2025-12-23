<?php

use App\Http\Controllers\CategoriaController;
use Illuminate\Support\Facades\Route;

Route::controller(CategoriaController::class)->group(function () {

    Route::get('categorias', 'getTodasCategorias');


});