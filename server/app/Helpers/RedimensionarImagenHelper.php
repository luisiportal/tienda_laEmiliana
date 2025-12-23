<?php

namespace App\Helpers;
use Illuminate\Support\Facades\File;
use Intervention\Image\Laravel\Facades\Image;

class RedimensionarImagenHelper
{

    public static function resizeImagen($file, string $directory, string $filename, int $maxWidth = 1031, int $maxHeight = 580)
    {
        if (!File::exists(public_path("../../$directory/"))) {
            File::makeDirectory(public_path("../../$directory/"), 0755, true); // permisos y recursividad
        }
        $image = Image::read($file);


        if ($image->width() > $maxWidth || $image->height() > $maxHeight) {

            $image = $image->scale($maxWidth, $maxHeight);

        }
        $image->save("../$directory/$filename");
    }
}