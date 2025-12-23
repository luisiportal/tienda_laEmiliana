<?php

namespace App\Http\Controllers;

use App\Helpers\RedimensionarImagenHelper;
use App\Models\Producto;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProductoController extends Controller
{

   public function getAllproductos()
   {
   }
   public function getProductobyId()
   {
   }

   public function createProducto(Request $request)
   {
   $validator = Validator::make($request->all(), [
    'name'        => 'required|string|max:255',
    'description' => 'nullable|string|max:1000',
    'price_usd'   => 'required|numeric|min:0',
    'cost'        => 'required|numeric|min:0',
    'stock'       => 'required|integer|min:0',
    'image'       => 'nullable|image|mimes:jpg,jpeg,png,gif|max:2048',
    'category'    => 'required|string|max:255',
    'alias'       => 'nullable|string|max:255|unique:productos,alias,',
    'agotado'     => 'required|boolean',
    'image_url'   => 'required|image|max:2024', // 2 MB aprox
]);


        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'errors' => $validator->errors()
            ], 422);
        }

   $producto = Producto::create([
    'name'        => $request->name,
    'description' => $request->description,
    'price_usd'   => $request->price_usd,
    'cost'        => $request->cost,
    'stock'       => $request->stock,
    'image'       => $request->image,       // archivo subido
    'category'    => $request->category,
    'alias'       => $request->alias,
    'agotado'     => $request->agotado,
    'image_url'   => $request->image_url,   // URL de la imagen
]);



        if ($request->hasFile('image_url')) {
            $nombre = $request->file("image_url")->getClientOriginalName();
            $file = $request->file('image_url');
            RedimensionarImagenHelper::resizeImagen($file, 'images/autores', $nombre);

            $producto->image = $nombre;
            $producto->save();
        }


        return response()->json([
            'status' => 'success',
            'message' => 'Creado Producto Correctamente',


        ], 201);
   }

   public function updateProducto(Request $request, $id)
   {
      $producto = Producto::find($id);

      if (!$producto) {
         return response()->json(['error' => 'Producto no encontrado'], 404);
      }

      // Validar los datos entrantes
      $request->validate([
         'nombre' => 'required|string|max:255',
         'precio' => 'required|numeric|min:0',
         'descripcion' => 'nullable|string',
      ]);

      // Actualizar campos
      $producto->nombre = $request->input('nombre');
      $producto->precio = $request->input('precio');
      $producto->descripcion = $request->input('descripcion');
      $producto->save();

      return response()->json(['mensaje' => 'Producto actualizado correctamente', 'producto' => $producto], 200);
   }


   public function deleteProducto($id)
   {
      $producto = Producto::find($id);

      if (!$producto) {
         return response()->json(['error' => 'Producto no encontrado'], 404);
      }

      $producto->delete();

      return response()->json(['mensaje' => 'Producto eliminado correctamente'], 200);
   }


}