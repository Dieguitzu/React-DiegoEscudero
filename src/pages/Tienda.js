import React from 'react'
import ItemListConteiner from '../components/ItemListConteiner';
import {BotonCategory} from "../components/BotonCategory"


const Tienda = () => {
  return (
    <div className='divTienda'>
      <BotonCategory/>

      <ItemListConteiner/>

    </div>
  )
}

export default Tienda;