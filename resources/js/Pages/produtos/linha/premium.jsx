import React from 'react'

import Produtos from '../../produtos/Produtos'
function premium({produtos}) {
  return (
    <div>
      <Produtos produtos={produtos} />
    </div>
  )
}

export default premium
