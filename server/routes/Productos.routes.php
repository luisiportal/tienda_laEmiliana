<?php

use App\Http\Controllers\ArticuloController;
use App\Http\Controllers\ProductoController;
use App\Http\Middleware\IsAdmin;
use Illuminate\Support\Facades\Route;

Route::controller(ProductoController::class)->group(function () {

    Route::get('productos', 'getProductosVender');


});




Route::middleware(['auth:api', IsAdmin::class])->group(function () {
    Route::controller(ProductoController::class)->group(function () {
        Route::get('productos/{id}', 'getProductobyId');
        Route::get('productostodos', 'getAllproductos');

        Route::post('productos', 'createProducto');
        Route::put('productos/edit/${id}', 'updateProducto');
        Route::delete('productos', 'deleteProducto');



    });
});