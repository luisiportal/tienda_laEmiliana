<?php

namespace App\Http\Controllers;

use App\Models\Profesor;
use App\Models\User;
use App\Services\LogService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class UserController extends Controller
{
    protected $logService;
    // Inyectar el servicio en el constructor
    public function __construct(LogService $logService)
    {
        $this->logService = $logService;
    }

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'user' => 'required|string|unique:users',
            'password' => 'required|string|min:5|confirmed',


        ]);

        if ($validator->fails()) {
            return response()->json(['message' => $validator->errors()->first()], 422);
        }

        DB::beginTransaction();

        try {
            $user = User::create([
                'user' => strtolower($request->get('user')),
                'role' => $request->get('role'),
                'email' => "no",
                'password' => bcrypt($request->get('password')),

            ]);



            try {

            } catch (\Exception $e) {
                return response()->json(['error' => 'No se pudo cargar la imagen: ' . $e->getMessage()], 500);
            }


            DB::commit();

            return response()->json(['message' => 'Usuario creado correctamente'], 201);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['error' => 'Error al crear el usuario', 'details' => $e->getMessage()], 500);
        }
    }
    public function buscarUsuarios(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'frase' => 'string',


        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 422);
        }


        $frase = preg_replace('/[^A-Za-z0-9]/', '', $request->get('frase'));

        $usuarios = User::whereRaw("
    REGEXP_REPLACE(
    (usuario),
        '[^A-Za-z0-9]',
        ''
    ) LIKE ?
", ["%{$frase}%"])->get();



        if (!$usuarios) {
            return response()->json(['message' => 'No existe el profesor'], 404);
        }
        return response()->json($usuarios, 200);
    }


    public function getUser($id_usuario)
    {
        $user = User::find($id_usuario);
        return response()->json($user, 200);
    }


    public function updateUser(Request $request, $id_usuario)
    {

        $user = User::find($id_usuario);
        if (!$user) {
            return response()->json(['message' => 'Usuario no encontrado. Por favor, verifica el ID.'], 404);
        }
        ;
        DB::beginTransaction();
        $validator = Validator::make($request->all(), [
            'user' => 'sometimes|string',
            'role' => 'sometimes|string',

            'password' => 'sometimes|string|min:5|confirmed',

        ]);


        if ($validator->fails()) {
            return response()->json(['message' => $validator->errors()], 422);
        }

        if ($request->has('password')) {
            $user->password = bcrypt($request->password);
        }
        if (
            $request->hasAny(['user', 'password', 'role',])
        ) {
            $user->user = $request->user;
            $user->role = $request->role;
        }


        $user->save();
        try {




            DB::commit();

            return response()->json(['user' => $user, 'message' => 'Usuario actualizado con éxito'], 200);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['error' => 'No se pudo actualizar el usuario: ' . $e->getMessage()], 500);
        }
    }

    public function getUsuarios()
    {
        $usuarios = User::get();


        return response()->json($usuarios, 200);
    }


    public function destroy(Request $request, $id)
    {
        $usuario = User::find($id);
        if (!$usuario) {
            return response()->json(['message' => 'No encontramos usuario'], 404);
        }
        $antes = json_encode($usuario);
        $usuario->delete();
        $this->logService->registrarLog('eliminó', $usuario->id_profesor, "el usuario $usuario->usuario ", $request, $antes, "");

        return response()->json(['message' => 'Usuario Eliminada'], 200);
    }

}
