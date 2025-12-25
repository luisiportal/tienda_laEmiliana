<?php

namespace App\Http\Controllers;

use App\Models\Categoria;

use App\Helpers\RedimensionarImagenHelper;
use App\Helpers\SlugifyHelper;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CategoriaController extends Controller
{
    public function getCategorias()
    {
        $categorias = Categoria::get();
        return response()->json($categorias, 200);

    }
    public function createCategoria(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nombre' => 'required|string|max:255',
            'description' => 'nullable|string|max:1000',
            'alias' => 'nullable|string|max:255|unique:categorias,alias,',
            'image' => 'required|image|max:2024', // 2 MB aprox
        ]);


        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'errors' => $validator->errors()
            ], 422);
        }

        $slug = SlugifyHelper::make($request->nombre);


        $categoria = Categoria::create([
            'nombre' => $request->nombre,
            'description' => $request->description,
            'alias' => $slug,
            'image' => "sin imagen",


        ]);

          if ($request->hasFile('image')) {
            $nombre = $request->file("image")->getClientOriginalName();
            $file = $request->file('image');
            RedimensionarImagenHelper::resizeImagen($file, 'images/categorias', $nombre);

            $categoria->image = $nombre;
            $categoria->save();
        }



       


        return response()->json([
            'status' => 'success',
            'message' => 'Creado Producto Correctamente',


        ], 201);
    }


}