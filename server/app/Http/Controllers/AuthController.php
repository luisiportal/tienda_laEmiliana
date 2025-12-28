<?php

namespace App\Http\Controllers;

use App\Models\AuthorizedDevice;
use App\Services\LogService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{



    public function login(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'name' => 'required |string|',
            'password' => 'required |string|min:5',


        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 422);
        }



        $credentials = $request->only(['name', 'password']);




        try {


            if (!$token = JWTAuth::attempt($credentials)) {
                return response()->json(['message' => 'Credencial inválida'], 401);

            }

            $user = Auth::user();

            $secure = env('COOKIE_SECURE', false); // Falso por defecto
            $HttpOnly = env('HTTPONLY', false); // Falso por defecto

            $domain = env('SESSION_DOMAIN', null);

            $cookie = cookie('token', $token, 60, '/', $domain, $secure, $HttpOnly); // HttpOnly y Secure (mejor para producción)

            return response()->json([
                'token' => $token,
                'user' => $user,
            ], 200)->cookie($cookie);
        } catch (JWTException $e) {
            return response()->json(['message' => 'No se logro crear el token', $e], 500);
        }
    }



    public function logout()
    {
        JWTAuth::invalidate(JWTAuth::getToken());
        return response()->json(['message' => 'Sesión cerrada Correctamente'], 200);
    }

    public function verifyToken(Request $request)
    {
        try {
            if (!$user = JWTAuth::parseToken()->authenticate()) {
                return response()->json(['usuario_no_encontrado'], 404);
            }
        } catch (JWTException $e) {
            return response()->json(['message' => 'No se logro validar el token', $e], 401);
        }


        return response()->json([
            'user' => $user,
        ], 200);
    }


}
