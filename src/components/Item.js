import React, { useState } from "react";
import { Link } from "react-router-dom";

const Item = ({producto}) => {
    let [contador, setContador] = useState(1)
    let suma = () => {setContador (contador >= 10 ? contador : contador + 1)
    }
    let resta = () => {setContador(contador <= 1 ? contador : contador - 1)
    }
    let agregarCarrito = () => {
        alert("Producto agregado")
    }

        return(
            <div className="card divItem m-2">
                <img className="imgProduct " src={require(`../app/assets/img/${producto.img}`)} />
                <div className="card-body " style={{width: "20em"}}>
                    <h5 className="card-title">{producto.nombre}</h5>
                    <p className="card-text mb-3">{producto.propiedades}</p>
                    <p className="card-text mb-3">${producto.precio}</p>
                    <div className="d-flex column justify-content-center">
                        <p onClick={resta} className="resta pr-4">-</p>
                        <p>{contador}</p>
                        <p onClick={suma} className="suma pl-4">+</p>
                    </div>
                    <button  className="btn btn-primary"><Link to={`Item/${producto.id}`} className='btn btn_ver_mas'>Ver más</Link></button>
                </div>
            </div>
    )
}
export default Item;