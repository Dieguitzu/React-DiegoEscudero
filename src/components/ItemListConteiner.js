import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import {getProduct} from '../services/products';
import ItemList from './ItemList';
import '../style/ItemListConteiner.css'
import { useParams } from 'react-router-dom';

const ItemListConteiner = () => {
    const{category} = useParams();


    const [data, setData]= useState([])
    useEffect(() => {
        getProduct().then(response => setData(response))
    }, [])
    return (
        <div className=' products '>
            <ItemList data={data} />
        </div>
    )
}


export default ItemListConteiner