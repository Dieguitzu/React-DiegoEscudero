import React from "react";
import { Link } from "react-router-dom";

const Item = ({producto}) => {

        return(
            <div className="card divItem m-2">
                <img className="imgProduct " src={require(`../app/assets/img/${producto.img}`)} alt="Producto"/>
                <div className="card-body " style={{width: "20em"}}>
                    <h5 className="card-title">{producto.nombre}</h5>
                    <p className="card-text mb-3">${producto.precio}</p>
                    <button  className="btn btn-primary"><Link to={`${process.env.PUBLIC_URL}/Item/${producto.id}`}  className="btn2">Ver más</Link>
                    </button>
                </div>
            </div>
    )
}
export default Item;