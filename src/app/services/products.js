import React from 'react'
import Data from '../assets/data.json'

const Products = () => {
    return (
    <div>{Data.map(prod => {
        return(
            <>
            <h4>{prod.nombre}</h4>
            <p>{prod.precio}</p>
            </>
    )})}</div>
    )
}

export default Products
