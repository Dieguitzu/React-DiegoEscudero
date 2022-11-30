import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { getItems, getItemsByCategory } from '../app/api'
import ItemList from '../components/ItemList';
import { useParams } from 'react-router-dom';


const ItemListConteiner = () => {
    const{idCategory} = useParams();
    const [data, setData]= useState([]);
    
    useEffect(() => {
        if(idCategory){
            getItemsByCategory(idCategory) 
            .then((res)=>setData(res))
        }else{
            getItems()
            .then(res=>setData(res))
        }
        
    }, [idCategory])
    console.log(data)
    return (
        <div className=' products '>
            <ItemList data={data} />
        </div>
    )
}


export default ItemListConteiner