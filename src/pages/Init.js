import React from 'react'
import Title from '../components/Title';
import ItemListConteiner from './ItemListConteiner';



const init = () => {
    return (
        <div className='card-body d-flex justify-content-center row'>
            <Title/>
            <ItemListConteiner/>
        </div>
    )
}

export default init;