import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetails from './ItemDetail'
import {getProduct} from '../services/products';

const ItemDetailContainer = () => {
    const {id} = useParams();
    const [data, SetData] = useState([])

    useEffect(()=>{
        getProduct(id).then(data=>{
            SetData(data)
        })
    },[])
    const BuscarProd = data.find(data=> data.id ==id)
    return(
        <div className="divItemList p-1">{BuscarProd && <ItemDetails DetailItem={BuscarProd}/>}</div>
    )}


export default ItemDetailContainer