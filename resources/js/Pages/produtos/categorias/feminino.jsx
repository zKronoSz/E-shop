import React from 'react'
import Header from '../../lyshop/header'
import Produtos from '../../produtos/Produtos'
function feminino({ produtos }) {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className='py-4 text-center px-3.5 text-3xl '>
        <h1 className='text-white font-mono'>Femininos</h1>
       </div>
      <div className='flex justify-center m-6'>
        <Produtos produtos={produtos} />
      </div>
    </div>
  )
}

export default feminino
