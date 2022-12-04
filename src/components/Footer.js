import React from 'react'
import '../style/Footer.css'

const Footer = () => {
    return (
    <div className='footer'>
            <p>&copy; 2018 Línea de Código</p>
            <ul className='listFooter'>
                <li className='itemFooter'><a href="/acerca-de" className='itemFooter'>Acerca de</a></li>
                <li className='itemFooter'><a href="/conectar" className='itemFooter'>Conectar</a></li>
                <li className='itemFooter'><a href="/rrss" className='itemFooter'>Redes Sociales</a></li>
            </ul>
    </div>
    )
}

export default Footer