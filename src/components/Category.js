import React from 'react'
import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {getProduct} from '../services/products';

import CategoryConteiner from './CategoryConteiner';


const Category = () => {
    const{category} = useParams()
    const [data, SetData] = useState([])
    

    useEffect(()=>{
        getProduct(category).then(data=>{
            SetData(data)
        })
    },[])
    const Categorys = data.find(data => data.category == category)
    return (

        <div className="divItemList p-1">aefaefaef{Categorys && <CategoryConteiner ItemCateg={Categorys}/>}</div>

    )
}

export default Category