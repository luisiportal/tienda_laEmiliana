<?php

namespace App\Http\Controllers;

use App\Models\Factura;
use App\Models\Movimiento;
use App\Models\Producto;
use Illuminate\Http\Request;
use Spatie\ResponseCache\Facades\ResponseCache;

class FacturaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $facturas = Factura::with('ventas', 'entrega')->orderByDesc('created_at')->get();
        return response()->json($facturas, 200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
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
       $factura = Factura::with('ventas')->findOrFail($id);
        foreach ($factura->ventas as $item) {

            $producto = Producto::find($item->producto_id);
            $existencia = $producto->stock;
            $producto->stock = $existencia + $item->cantidad;

            $producto->save();

            Movimiento::create(['cantidad' => $item->cantidad, 'tipo' => 'Reintegrado', 'producto_id' => $item->producto_id,]);
        }
        $factura->delete();
        ResponseCache::clear();

    }
}
