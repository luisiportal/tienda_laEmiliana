<?php

namespace App\Helpers;

use Illuminate\Support\Str;

class SlugifyHelper
{
    /**
     * Convierte un texto en un slug normalizado.
     *
     * @param string $texto
     * @param string $separator
     * @return string
     */
    public static function make(string $texto, string $separator = '-'): string
    {
        // Str::slug hace la normalización y slugificación
        return Str::slug($texto, $separator);
    }
}
