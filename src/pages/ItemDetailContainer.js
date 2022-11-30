import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetails from '../components/ItemDetail'
import {getItemById, getItems} from '../app/api';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [data, setData] = useState({});

    useEffect(()=>{
    getItemById(id)
    .then((res)=> setData(res))
    },[id])
        
    return (
        <div className='divItemList p-1'>
            {" "}
            <ItemDetails DetailItem={data} />
        </div>)}


export default ItemDetailContainer