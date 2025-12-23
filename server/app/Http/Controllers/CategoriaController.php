<?php

namespace App\Http\Controllers;

use App\Models\Categoria;


class CategoriaController extends Controller
{
    public function getCategorias()
    {
        $categorias = Categoria::get();
        return response()->json($categorias, 200);

    }

}