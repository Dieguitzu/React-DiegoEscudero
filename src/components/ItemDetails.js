import {useParams} from 'react-router-dom'

const ItemDetails = () => {
    const {id} = useParams
    return (

    <div>{id}
    ItemDetails</div>
    )
}

export default ItemDetails