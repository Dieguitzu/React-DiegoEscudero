import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetails from './ItemDetail'

const ItemDetailContainer = () => {
    const {id} = useParams()
    useEffect(( )=> {console.log (id)
    return() =>{
        <div>{id}</div>
    }
},[id])}

export default ItemDetailContainer