<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class OverView extends Controller
{
    public function index() {
        return Inertia::render('OverView');
    }
}
