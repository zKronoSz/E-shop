import React from 'react'
import Header from '../../lyshop/header'
import Produtos from '../../produtos/Produtos'
function original({ produtos }) {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Produtos produtos={produtos} />
      </div>
    </div>
  )
}

export default original
