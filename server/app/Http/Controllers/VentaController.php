<?php

namespace App\Http\Controllers;

use App\Models\Entrega;
use App\Models\Factura;
use App\Models\Movimiento;
use App\Models\Producto;
use App\Models\Venta;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Spatie\ResponseCache\Facades\ResponseCache;

class VentaController extends Controller
{
    // Listar ventas
    public function index()
    {
        return Venta::with('detalles')->orderBy('id', 'desc')->get();
    }

    // Crear una venta
    public function store(Request $request)
    {
        $productos = $request->carrito['productos'];



        foreach ($productos as $item) {

            // Buscar el producto
            $producto = Producto::find($item['id']);
            $cantidadSolicitada = $item['cantidad'];
            $stock = $producto->stock;

            // Si no existe
            if (!$producto) {
                return response()->json([
                    'error' => "El producto con ID {$item['id']} no existe."
                ], 404);
            }
            // Si el stock es 0 o menor
            if ($producto->stock <= 0) {
                return response()->json([
                    'error' => "Perdone, el producto {$producto->nombre} se nos acaba de agotar."
                ], 422);
            }

            if ($cantidadSolicitada > $stock) {
                return response()->json([
                    'error' => "Perdone, solo nos queda {$stock} del producto {$producto->nombre}."
                ], 422);
            }


            // Si la cantidad pedida es mayor que el stock disponible
            if ($item['cantidad'] > $producto->stock) {
                return response()->json([
                    'error' => "Solo quedan {$producto->stock} unidades de {$producto->nombre}."
                ], 422);
            }


            // crear venta de cada producto


        }


        DB::transaction(function () use ($request, $productos) {
            $factura = Factura::create(['moneda' => 'USD', 'total' => $request->carrito['total'], 'confirmado' => false, 'estado' => 'Sin Confirmar',]);
              Entrega::create([
                    'ordenante'=> $request->entrega['ordenante'],
                    'beneficiario'=>$request->entrega['beneficiario'],
                    'tel_beneficiario'=>$request->entrega['tel_beneficiario'],
                    'p_referencia'=>"",
                    'factura_id'=>$factura->id,
                    'contacto_ordenante'=>"",
                    'calle'=>$request->entrega['direccion'],
                    'numero'=>'',
                    'entrecalles'=>'',
                    'reparto'=>'',
                    'envio'=>0,
                    'observaciones'=>'',
                ]);
           
           
            foreach ($productos as $item) {
                $total = $item['cantidad'] * $item['price_usd'];
                $producto_id = $item['id'];
                $venta = Venta::create(['cantidad' => $item['cantidad'], 'total' => $total, 'producto_id' => $producto_id, 'factura_id' => $factura->id,]);
                $producto = Producto::findOrFail($producto_id);

                $producto->stock = $producto->stock - $item['cantidad'];
                $producto->save();
                Movimiento::create(['cantidad' => $item['cantidad'], 'tipo' => 'Venta', 'producto_id' => $producto_id,]);
               
            }
          
        });

        ResponseCache::clear();



    }

    // Mostrar una venta
    public function show($id)
    {
        $venta = Venta::with('detalles')->findOrFail($id);
        return $venta;
    }

    // Actualizar una venta
    public function update(Request $request, $id)
    {
        $venta = Venta::findOrFail($id);

        $request->validate([
            'cliente' => 'string|max:255',
            'total' => 'numeric',
        ]);

        $venta->update($request->only(['cliente', 'total']));

        return response()->json($venta);
    }

    // Eliminar una venta
    public function destroy($id)
    {
        $venta = Venta::findOrFail($id);
        $venta->delete();

        return response()->json(['message' => 'Venta eliminada']);
    }
}
