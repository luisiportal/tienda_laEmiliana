<?php

namespace App\Http\Controllers;

use App\Models\Movimiento;
use App\Models\Producto;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class MovimientoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $movimientos = Movimiento::with('producto')->paginate(20);
        return response()->json($movimientos, 200);

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $validator = Validator::make($request->all(), [
            'cantidad' => 'required|integer',
            'tipo' => 'required|string',
            'producto_id' => 'required|integer',


        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'errors' => $validator->errors()
            ], 422);
        }

        DB::transaction(function () use ($request) {
            $producto_id = $request->producto_id;
            $producto = Producto::findOrFail($producto_id);
            $tipo = $request->tipo;
            $cantidad = $request->cantidad;
            $stock = $producto->stock;
            if ($tipo === "salida" && $stock >= $cantidad) {
                $producto->stock = $stock - $cantidad;
                $producto->save();
            }if ($tipo === "entrada") {
                $producto->stock = $stock + $cantidad;
                $producto->save();
            }Movimiento::create(['cantidad' => $cantidad, 'tipo' => $tipo, 'producto_id' => $producto_id,]);
        });



        return response()->json([
            'status' => 'success',
            'message' => 'Moviemiento Realizado',


        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        DB::beginTransaction();
        try {
            $movimiento = Movimiento::findOrFail($id);
            $cantMovida = $movimiento->cantidad;
            $producto = Producto::findOrFail($movimiento->producto->id);
            if ($movimiento->tipo === 'entrada') {
                $producto->stock = $producto->stock - $cantMovida;
            } else {
                $producto->stock = $producto->stock + $cantMovida;
            }
            $producto->save();
            $movimiento->delete();
            DB::commit();
            return response()->json(['message' => 'Movimiento eliminado y stock actualizado correctamente.'], 200);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['error' => 'Error al eliminar el movimiento: ' . $e->getMessage()], 500);
        }
    }



}
