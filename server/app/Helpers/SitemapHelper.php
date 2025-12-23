<?php

namespace App\Helpers;

use App\Models\Articulo;
use App\Models\Programa;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;
use Carbon\Carbon;

class SitemapHelper
{
    public static function generateArticulos()
    {
         $sitemap = Sitemap::create();

    Articulo::where('state', 1)->with('categoria')->chunk(100, function ($articulos) use ($sitemap) {
        foreach ($articulos as $articulo) {
            $alias = $articulo->alias;
            $categoria = \App\Helpers\SlugifyHelper::slugify($articulo->categoria->nombre);
            $id = $articulo->id;
            $sitemap->add(
                Url::create("https://www.tvcubana.icrt.cu/secciones/seccion-{$categoria}/{$id}-{$alias}")
                    ->setLastModificationDate(\Carbon\Carbon::parse($articulo->created))
                    ->setChangeFrequency(Url::CHANGE_FREQUENCY_WEEKLY)
                    ->setPriority(0.8)
            );
        }
    });

        // Guardar el sitemap en public/
        $sitemap->writeToFile(public_path('../../favicons/sitemap_articulos.xml'));
         
    }

       public static function generateProgramasSitemap()
    {
         $sitemap = Sitemap::create();

    Programa::chunk(100, function ($programas) use ($sitemap) {
        foreach ($programas as $programa) {
            $alias = \App\Helpers\SlugifyHelper::slugify($programa->title);
            $sitemap->add(
                Url::create("https://www.tvcubana.icrt.cu/programas/{$alias}")
                    ->setLastModificationDate(\Carbon\Carbon::parse($programa->created_at))
                    ->setChangeFrequency(Url::CHANGE_FREQUENCY_WEEKLY)
                    ->setPriority(0.8)
            );
        }
    });

        // Guardar el sitemap en public/
        $sitemap->writeToFile(public_path('../../favicons/sitemap_programas.xml'));
         
    }
}
