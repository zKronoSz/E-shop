<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Produtos; 
class CategoriasControllers extends Controller
{
    public function masculino()
    {

        $produtos = Produtos::where('categoria', 'masculino')->get();
        return Inertia::render('produtos/categorias/masculino', [
            'produtos' => $produtos
        ]);
    }
    public function feminino()
    {
        $produtos = Produtos::where('categoria', 'feminino')->get();
        return Inertia::render('produtos/categorias/feminino', [
            'produtos' => $produtos
        ]);
    }
    public function esportivo()
    {
        $produtos = Produtos::where('categoria', 'esportivo')->get();
        return Inertia::render('produtos/categorias/esportivo', [
            'produtos' => $produtos
        ]);
    }
    public function original()
    {
        $produtos = Produtos::where('categoria', 'original')->get();
        return Inertia::render('produtos/categorias/original', [
            'produtos' => $produtos
        ]);
    }
}
