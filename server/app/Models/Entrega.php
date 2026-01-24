<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Entrega extends Model
{
    use HasFactory;

    protected $table = 'entregas'; // nombre de la tabla

    protected $primaryKey = 'id'; // Laravel usa 'id' por defecto

    protected $fillable = [
        'ordenante',
        'beneficiario',
        'tel_beneficiario',
        'p_referencia',
        'factura_id',
        'contacto_ordenante',
        'calle',
        'numero',
        'entrecalles',
        'reparto',
        'envio',
        'observaciones',
    ];

    /**
     * Relación con Factura
     */
    public function factura()
    {
        return $this->belongsTo(Factura::class, 'factura_id');
    }

    
}
