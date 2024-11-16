<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Produtos; 
class eshop extends Controller
{
    public function view()
    {
        $produtos = Produtos::all();
        $user = auth()->user();
        $produtosPremium = Produtos::where('linha', 'premium')->get();
        return Inertia::render('eshop/main', [
            'produtos' => $produtos,
            'produtosPremium' => $produtosPremium,
            'user' => $user
        ]);
    }
    public function carrinho()
    {
        return Inertia::render('eshop/carrinho');
    }
}
