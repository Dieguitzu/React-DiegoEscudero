import React, {useEffect, useState} from 'react';
import getProduct from '../services/products';



export const ItemListConteiner = () => {

    useEffect(() => {
        getProduct().then(Data => setData(Data))
    }, [])
    }


export default ItemListConteiner