<?php

namespace App\Http\Controllers;

//USA PARA OBTER DADOS ENVIADOS PELO FRONT
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use App\Models\Role;
use Illuminate\Validation\Rules;
// USADO PARA CRIPTOGRAFAR SENHAS
use Illuminate\Support\Facades\Hash;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Gate;

class UserController extends Controller
{
    public function listar() {

        $users = User::with('role')->get();
        // $abilities = $users->abilities;
    
        return Inertia::render('Usuarios', ['table' => $users]);
          
    }



    public function show() {
        //retorna usuário 1
        // $user = User::find(5);
        //retorna regra do usuário
        $role = Role::all();
        //retorna as habilidades do usuário
        // $abilities = $role->abilities;

        
        return Inertia::render('NovoUsuario', ['role' => $role]);

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
                'role_id' => $request->type,
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
        
        if ($request->isMethod('get')) {

            $register = User::find($id);
            return Inertia::render('EditarUsuario',['data' => $register, 'id' => $id]);
        }
        
        $user->name = $request->name;
        $user->email = $request->email;
       

        $user->save();

        return response()->json([
            'mensagem' => "Usuário editado com sucesso"
        ], 200);
        
    }

    public function destroy(User $user, $id){

  
        $permissao = $this->authorize('delete', $user);

        if ($permissao) {

            $deleted = User::destroy($id);

            if ($deleted > 0) {
                return response()->json([
                    'mensagem' => 'Usuário deletado com sucesso',
                    
                ],200);
            }else{
                return response()->json([
                    'mensagem' => 'Usuário não pode ser deletado',
                    
                ],500);
            }

        }else{
            return response()->json([
                'mensagem' => 'Usuário não tem permissão',
                
            ],403);
        }
            
    }
}
