import React from "react";

const Item = ({producto}) => {


        return(

            <div className="card-body " style={{width: "20em"}}>
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">{producto.propiedades}</p>
                <button className="btn btn-primary">Ver más</button>
            </div>

    )
}
export default Item;