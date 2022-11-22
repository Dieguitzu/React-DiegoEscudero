import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetails from '../components/ItemDetail'
import {getProduct} from '../services/products';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [data, SetData] = useState({});

    useEffect(() => {
        getProduct(id).then((data) => {
            SetData(data.find((data) => data.id === parseInt(id)));
        });
    }, []);
    return (
        <div className='divItemList p-1'>
            {" "}
            <ItemDetails DetailItem={data} />
        </div>)}


export default ItemDetailContainer