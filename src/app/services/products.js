import React,{setTimeout} from 'react'
import Data from '../assets/data.json'

export const getProduct = () => {
    return new Promise (resolve => {
    setTimeout(() => {
        resolve(Data);
    }, 3000)
})
}


export default getProduct
