<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\eshop;
use App\Http\Controllers\ProdutosController;
use App\Http\Controllers\CategoriasControllers;


//ROTAS Eshop---------------------------------------------------------------------
Route::post('/criarProduto', [ProdutosController::class, 'create']);
Route::get('/viewCriarProduto', [ProdutosController::class, 'viewCreate']);
Route::get('/', [eshop::class, 'view']);
Route::get('/search', [ProdutosController::class, 'search'])->name('search');
//--------------------------------------------------------------------------------


// rotas de categorias------------------------------------------------------------ 
Route::get('/produtos/masculino', [CategoriasControllers::class, 'masculino']);
Route::get('/produtos/feminino', [CategoriasControllers::class, 'feminino']);
Route::get('/produtos/esportivo', [CategoriasControllers::class, 'esportivo']);
Route::get('/produtos/original', [CategoriasControllers::class, 'original']);
//----------------------------------------------------------------------------
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});



require __DIR__.'/auth.php';
