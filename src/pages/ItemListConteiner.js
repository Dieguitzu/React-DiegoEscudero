import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import {getProduct} from '../services/products';
import ItemList from '../components/ItemList';
import '../style/ItemListConteiner.css'
import { useParams } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import {useContext} from 'react';


const ItemListConteiner = () => {
    const{idCategory} = useParams();
    const [data, setData]= useState([]);
    
    const nombre = useContext(useCartContext);
    console.log('nombre:', nombre);

    useEffect(() => {
        getProduct()
        .then(response => {
            if (idCategory){
            setData(response.filter((item) => item.category === idCategory))
        }else{
            setData(response)
            }
        })
    }, [idCategory])
    return (
        <div className=' products '>
            <ItemList data={data} />
        </div>
    )
}


export default ItemListConteiner