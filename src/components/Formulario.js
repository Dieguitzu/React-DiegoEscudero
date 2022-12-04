import React from 'react'
import { useState } from 'react';
import '../style/Formulario.css'

const Formulario = ({addOrder}) => {
    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState();
    const [email, setEmail] = useState();
    function createCliente () {
        const cliente = {nombre,telefono,email}
        addOrder(cliente)
    }

    return (

    <div className='divForm m-4'>
        <h3 className='titleForm m-4'>Completa tus datos</h3>
        <form className='formContainer' action="">
            <input className='dataForm m-2' type="text" placeholder='Nombre'onChange={e => setNombre(e.target.value)} required/>
            <input className='dataForm m-2' type="tel" placeholder='Teléfono' onChange={e => setTelefono(e.target.value)} required />
            <input className='dataForm m-2'  type="email" placeholder='Email' onChange={e => setEmail(e.target.value)} required/>
        </form>
        <button  className='btn btnTerminarC m-4' type='button' onClick={createCliente}>Terminar compra</button>
    </div>

    )
}

export default Formulario