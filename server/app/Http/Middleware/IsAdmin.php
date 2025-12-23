<?php

namespace App\Http\Middleware;

use App\Helpers\DeviceHelper;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class IsAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if ($request->path() !== 'api/images/subir') {
            $fingerprint = $request->header('X-Device-ID');
            if (!DeviceHelper::isAuthorizedDevice($fingerprint)) {
                abort(403, 'Dispositivo no autorizado');
            }
        }


        $user = auth('api')->user();
        if ($user && $user->role === 'admin') {
            return $next($request);
        } else {
            return response()->json(['message' => 'Usuario sin autorización a esta peticion '], 403);
        }
    }
}
