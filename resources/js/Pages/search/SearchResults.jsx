import Produtos from "../produtos/Produtos";
import Header from "../lyshop/header";
export default function SearchResults({ produtos, query, user, produtosall }) {
    return (
     <div className="">
        <div className="min-w-full">
          <Header user={user}/>
        </div>
        <div className="container mx-auto px-4 py-6 text-white ">
        <div className="text-2xl font-bold mb-4 text-center">
          <h1>Resultados para: {query}</h1>
        </div>
        <div className="flex justify-center m-6 overflow-y-hidden pb-10">
          <Produtos produtos={produtos} />
        </div>
        <div>
          <div className="text-2xl font-bold mb-4 text-center">
            <h1>Alguns produtos que você pode gostar</h1>
          </div >
          <div className="flex justify-center m-6 overflow-y-hidden pb-10">
            <Produtos produtos={produtosall} />
          </div>
        </div>
        </div>
     </div>
    );
  }