<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\Participante;
use App\Http\Controllers\OverView;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('dashboard', [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');


Route::middleware('auth')->group(function () {
    
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile/{id}', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // ROTAS USUÁRIOS
    Route::get('usuarios', [UserController::class, 'listar']);
    Route::get('usuarios/adicionar', function(){ return Inertia::render('NovoUsuario'); });
    Route::post('usuarios/criar',[UserController::class,'create'])->name('usuarios/criar');
    Route::delete('usuarios/{id}', [UserController::class,'destroy']);
    Route::match(['get','patch'],'usuarios/editar/{id}',[UserController::class, 'update']);

    // ROTAS PARTICIPANTES
    Route::get('participante', [Participante::class, 'index']);

    Route::get('overview', [OverView::class, 'index']);


});

require __DIR__.'/auth.php';
