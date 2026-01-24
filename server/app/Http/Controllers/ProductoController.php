<?php

namespace App\Http\Controllers;
use App\Helpers\SlugifyHelper;
use App\Helpers\RedimensionarImagenHelper;
use App\Models\Producto;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Spatie\ResponseCache\Facades\ResponseCache;

class ProductoController extends Controller
{

   public function getProductosVender()
   {

      $productos = Producto::with('categoria')->where('stock', '>=', 1)->get();
      return response()->json($productos, 200);


   }

   public function getAllproductos()
   {

      $productos = Producto::with('categoria')->orderByDesc('updated_at')->get();
      return response()->json($productos, 200);


   }
   public function getProductobyId($id)
   {
      $producto = Producto::with('categoria')->findOrFail($id);


      return response()->json($producto, 200);

   }

   public function createProducto(Request $request)
   {
      $validator = Validator::make($request->all(), [
         'nombre' => 'required|string|max:255',
         'description' => 'nullable|string|max:1000',
         'price_usd' => 'required|numeric|min:0',
         'cost' => 'required|numeric|min:0',
         'image' => 'nullable|image|mimes:jpg,jpeg,png,gif|max:2048',
         'categoria' => 'required|integer',
         'alias' => 'nullable|string|max:255|unique:productos,alias,',

      ]);


      if ($validator->fails()) {
         return response()->json([
            'status' => 'error',
            'errors' => $validator->errors()
         ], 422);
      }
      $slug = SlugifyHelper::make($request->nombre);
      $producto = Producto::create([
         'nombre' => $request->nombre,
         'description' => $request->description,
         'price_usd' => $request->price_usd,
         'cost' => $request->cost,
         'stock' => 0,
         'categoria' => $request->categoria,
         'alias' => $slug,
         'agotado' => true,
         'image' => "default.webp",

      ]);



      if ($request->hasFile('image_url')) {
         $nombre = $request->file("image_url")->getClientOriginalName();
         $file = $request->file('image_url');
         RedimensionarImagenHelper::resizeImagen($file, 'images/productos', $nombre);

         $producto->image = $nombre;
         $producto->save();
      }

      ResponseCache::clear();
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
         'price_usd' => 'required|numeric|min:0',
         'descripcion' => 'nullable|string',
         'categoria' => 'required|integer',
      ]);

      // Actualizar campos
      $producto->nombre = $request->input('nombre');
      $producto->price_usd = $request->input('price_usd');
      $producto->description = $request->input('description');
      $producto->categoria = $request->input('categoria');
      $producto->cost = $request->input('cost');



      if ($request->hasFile('image_url')) {
         $nombre = $request->file("image_url")->getClientOriginalName();
         $file = $request->file('image_url');
         RedimensionarImagenHelper::resizeImagen($file, 'images/productos', $nombre);

         $producto->image = $nombre;
      }


      $producto->save();
      ResponseCache::clear();
      return response()->json(['message' => 'Producto actualizado correctamente', 'producto' => $producto], 200);
   }


   public function deleteProducto($id)
   {
      $producto = Producto::find($id);

      if (!$producto) {
         return response()->json(['error' => 'Producto no encontrado'], 404);
      }

      $producto->delete();
      ResponseCache::clear();

      return response()->json(['message' => 'Producto eliminado correctamente'], 200);
   }


}