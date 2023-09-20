import React from 'react'

const Lista = () => {
    const listado = [0, 1, 2, 3, 4];
    return (
        listado.map(nro => <li>{nro}</li>)
  )
}

export default Lista;