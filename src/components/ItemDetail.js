

const ItemDetail = ({DetailItem}) => {
    return (
            <div className="card divItem   m-2">
                <img className="imgProduct " src={require(`../app/assets/img/${DetailItem.img}`)} />
                <div className="card-body " style={{width: "20em"}}>
                    <h5 className="card-title">{DetailItem.nombre}</h5>
                    <p className="card-text f mb-3">{DetailItem.propiedades}</p>
                    <p className="card-text mb-3">${DetailItem.precio}</p>
                    <button  className="btn btn-primary">Comprar</button>
                </div>
            </div>
    )
}


export default ItemDetail