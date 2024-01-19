<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use Illuminate\Validation\Rules;
// USADO PARA CRIPTOGRAFAR SENHAS
use Illuminate\Support\Facades\Hash;
use Illuminate\Auth\Events\Registered;

class UserController extends Controller
{
    public function index() {

        $users = User::all();
        return Inertia::render('Usuarios', ['table' => $users]);
    }

    public function create () {
        return Inertia::render('NovoUsuario');
    }

    public function store(Request $request){
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
}
