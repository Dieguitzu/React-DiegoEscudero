import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import {getProduct} from '../services/products';
import ItemList from './ItemList';
import '../style/ItemListConteiner.css'

const ItemListConteiner = () => {
    const [data, setData]= useState([])
    useEffect(() => {
        getProduct().then(response => setData(response))
    }, [])
    return (
        <div className='card-body products m-3'>
            <ItemList data={data} />
        </div>
    )
}


export default ItemListConteiner