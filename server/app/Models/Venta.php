<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Venta extends Model
{
    use HasFactory;

    protected $table = 'ventas'; // Ajusta al nombre real de tu tabla

    protected $primaryKey = 'id';

    protected $fillable = [
        'cantidad',
        'total',
        'producto_id',
        'factura_id',
    ];

    /**
     * Relación con Producto
     */
    public function producto()
    {
        return $this->belongsTo(Producto::class, 'producto_id');
    }

    /**
     * Relación con Factura
     */
    public function factura()
    {
        return $this->belongsTo(Factura::class, 'factura_id');
    }
}
