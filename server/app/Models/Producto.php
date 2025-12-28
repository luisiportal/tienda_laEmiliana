<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Producto extends Model
{
    use HasFactory;

    // Campos que se pueden asignar masivamente
    protected $fillable = [
        'nombre',
        'description',
        'price_usd',
        'cost',
        'stock',
        'image',
        'category',
        'alias',
        'agotado',
    ];
}
