<?php

namespace App\Http\Controllers;

//USA PARA OBTER DADOS ENVIADOS PELO FRONT
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use Illuminate\Validation\Rules;
// USADO PARA CRIPTOGRAFAR SENHAS
use Illuminate\Support\Facades\Hash;
use Illuminate\Auth\Events\Registered;

class UserController extends Controller
{
    public function listar() {

        $users = User::all();
        return Inertia::render('Usuarios', ['table' => $users]);
          
    }

    public function create(Request $request){
        $request->validate(
            [
                'name' => ['required', 'string', 'max:255'],
                'email' => ['required', 'email', 'string', 'lowercase', 'max:255', 'unique:'.User::class],
                'password' => ['required', 'confirmed', Rules\Password::defaults()]
            ]
        );

        User::create(
            [
                'name' => ucwords($request->name),
                'email' => $request->email,
                'password' => Hash::make($request->password)
            ]
        );

        return redirect('/usuarios');
      
    }

    public function update(Request $request, $id) {

    
        //find user
        $user = User::find($id);
        if (!$user) {
            return response()->json([
                'mensagem' => 'Usuário não encontrado para editar'
            ],400);
        }      
        
        $user->name = $request->name;
        $user->email = $request->email;
       

        $user->save();

        return User::all();   
        
    }

    public function destroy($id){

        $deleted = User::destroy($id);
      
        if ( $deleted > 0) {
            return response()->json([
                'mensagem' => 'Usuário deletado com sucesso'
            ],200);
        }else {
            return response()->json([
                'mensagem' => 'Não foi possível deletar usuário'
            ],500);
        }
    }
}
