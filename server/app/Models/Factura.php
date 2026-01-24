<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Factura extends Model
{
    use HasFactory;

    protected $table = 'facturas'; // nombre de la tabla

    protected $primaryKey = 'id';

    protected $fillable = [
        'total',
        'moneda',
        'confirmado',
        'estado',
    ];

    /**
     * Relación con DetalleFactura
     */
    public function ventas()
    {
        return $this->hasMany(Venta::class, 'factura_id')->with('producto');
    }
    public function entrega()
    {
        return $this->hasOne(Entrega::class, 'factura_id');
    }
}
