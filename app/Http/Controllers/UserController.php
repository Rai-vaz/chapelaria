<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;

class UserController extends Controller
{
    public function index() {

        $users = User::all();

        return Inertia::render('Usuarios', ['table' => $users]);
    }

    public function newUser () {
        return Inertia::render('NovoUsuario');
    }
}
