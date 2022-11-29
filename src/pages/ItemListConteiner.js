import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { getItems} from '../app/api'
import ItemList from '../components/ItemList';
import { useParams } from 'react-router-dom';


const ItemListConteiner = () => {
    const{idCategory} = useParams();
    const [data, setData]= useState([]);
    
    useEffect(() => {
        getItems()
        .then(response => {
            if (idCategory){
            setData(response.filter((item) => item.id === idCategory))
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