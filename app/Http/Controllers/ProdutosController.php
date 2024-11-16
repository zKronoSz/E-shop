<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Produtos; 
use Inertia\Inertia;

class ProdutosController extends Controller
{
    public function create()
    {
        $validated = request()->validate([
            'nome' => 'required',
            'preco' => 'required',
            'categoria' => 'required',
            'marca' => 'required',
            'imgs' => 'image|nullable|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'estoque' => 'required',
            'linha' => 'required',
        ]);
    
        // Verifica se o arquivo de imagem foi enviado
        if (request()->hasFile('imgs')) {
            // Armazena a imagem no diretório 'public/produtos'
            $path = request()->file('imgs')->store('produtos', 'public');
    
            // Adiciona o caminho da imagem nos dados validados
            $validated['imgs'] = $path;
        }
    
        // Cria o produto no banco de dados
        Produtos::create($validated);
    
        return redirect('/');
    }

    public function viewCreate()
    {

        return Inertia::render('produtos/criarProdutos');
    }
    public function search(Request $request)
{
    $query = $request->input('query');
    $user = auth()->user();
    // Busca os produtos no banco de dados
    $produtos = Produtos::where('nome', 'like', '%' . $query . '%')->get();
    $produtosall = Produtos::all();
    // Retorna os resultados da busca
    return inertia('search/SearchResults', ['produtos' => $produtos, 'query' => $query, 'user' => $user, 'produtosall' => $produtosall]);
}
    
}
