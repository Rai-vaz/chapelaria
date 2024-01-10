<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Session;

class Participante extends Controller
{
    public function index(Request $request) {
        $request->session()->put(['name' => 'Raí vaz', 'idade' => 25, 'empregado' => true]);
      
        Session::put('E-mail', 'rai.vaz@email.com');
        $request->session()->forget(['E-mail', 'idade']);
        $sessoes = $request->session()->all();
        return Inertia::render('Participante', ['sessoes' => $sessoes]);
    }
}
