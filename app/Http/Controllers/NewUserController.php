<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;

class NewUserController extends Controller
{
    public function createNewUser() {

        $users = User::all();

        return Inertia::render('Usuarios', ['table' => $users]);
    }
}
