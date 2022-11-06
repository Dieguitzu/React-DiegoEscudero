import React, {useEffect, useState} from 'react';
import ItemList from './ItemList'


export const ItemListConteiner = ({texto}) => {

    const [data,setData] = useState([])

    useEffect(() => {
        const getProduct = new Promise (resolve => {
            setTimeout(() => {
                resolve(products);
            }, 3000)
        })
        getProduct.then(res => console.log(res))
    }, [])



    return(
        <>
        </>
    )
}

export default ItemListConteiner