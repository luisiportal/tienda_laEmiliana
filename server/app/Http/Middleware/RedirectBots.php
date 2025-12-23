<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class RedirectBots
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $userAgent = strtolower($request->header('User-Agent', ''));

      $isBot = str_contains($userAgent, 'facebookexternalhit') ||
         str_contains($userAgent, 'facebot') ||
        // str_contains($userAgent, 'fb_iab') || // este es para el webview de facebook
        // str_contains($userAgent, 'fbav') ||
         str_contains($userAgent, 'googlebot') ||
         str_contains($userAgent, 'bingbot') ||
         str_contains($userAgent, 'linkedinbot') ||
         str_contains($userAgent, 'twitterbot') ||
         str_contains($userAgent, 'slackbot') ||
         str_contains($userAgent, 'discordbot') ||
         str_contains($userAgent, 'whatsapp');


        if ($isBot) {
            // Deja que Laravel procese la vista Blade con metadatos
            return $next($request);
        }

        // Sirve directamente el index.html para React (sin redirección)
        return response()->file(public_path('index.html'));
    }
}
