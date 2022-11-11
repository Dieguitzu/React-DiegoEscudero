import React from 'react'

const CategoryConteiner = ({ItemCateg}) => {

    return (
            <div className="card divItem   m-2">
                <img className="imgProduct " src={require(`../app/assets/img/${ItemCateg.img}`)} />
                <div className="card-body " style={{width: "20em"}}>
                    <h5 className="card-title">{ItemCateg.nombre}</h5>
                    <p className="card-text f mb-3">{ItemCateg.propiedades}</p>
                    <p className="card-text mb-3">${ItemCateg.precio}</p>
                    <button  className="btn btn-primary">Comprar</button>
                </div>
            </div>
    )
}

export default CategoryConteiner