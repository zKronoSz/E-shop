import React from 'react'
import Header from '../lyshop/header'
import Produtos from '../produtos/Produtos'
import Banner from '../img/banner.jpg'
import Carrosel from '../carrosel/carrosel';
import Gif from '../img/gif.gif'
import ProdutosPremium from '../produtos/linha/premium'
function main ({ produtos, produtosPremium, user }) {
  return (

   <div className='flex flex-col min-h-screen gap-1'>
    <div className='min-w-full'>
     <Header user={user}/>
    </div>
    <div className='flex flex-col' >
        <div className='flex justify-center '>
        <img src={Banner} alt="img" className='border-2 border-zinc-950' />
        </div>
        <div className='w-screen'>
          <Carrosel />
        </div>
       <div className='pt-9 text-center px-3.5 text-3xl '>
        <h1 className='text-white font-mono'>Lançamentos</h1>
       </div>
        <div className='flex justify-center m-6 overflow-y-hidden pb-10'>
            
          <Produtos produtos={produtos} />
        </div>
        <div className='flex justify-center py-10 '>
          <img src={Gif} alt="gif"  className='  transition duration-500 hover:scale-105 border-2 border-zinc-950  '/>
        </div>
    </div>
    <div className='py-4 text-center px-3.5 text-3xl'>
      <h1 className='text-white font-mono'>Linha Premium </h1>
    </div>
    <div className='flex justify-center m-6 overflow-y-hidden '>
      <ProdutosPremium produtos={produtosPremium} />
    </div>
   </div>
  )
}

export default main
