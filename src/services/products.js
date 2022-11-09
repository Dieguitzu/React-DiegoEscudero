
import Data from '../app/assets/data.json'

export const getProduct = () => {
    return new Promise (resolve => {
    setTimeout(() => {
        resolve(Data);
    }, 3000)
})
}


export default getProduct
