import React from 'react'
import ItemListConteiner from '../components/ItemListConteiner';
import {Category} from "../components/Category"


const Tienda = () => {
  return (
    <div className='divTienda'>
      <Category/>

      <ItemListConteiner/>

    </div>
  )
}

export default Tienda;