
import Data from '../app/assets/data.json'

export const getProduct = () => {
    return new Promise (resolve => {
    setTimeout(() => {
        resolve(Data);
    }, 2000)
})
}


export default getProduct
