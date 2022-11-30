import React from "react";
import {NavLink} from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LogoWidget from './LogoWidget';
import CartWitget from './CartWitget';


const NavBar = () => {
    
    return(
        <div>
            <Navbar bg="dark" variant="dark" className="navBar">
                <Container>
                    <LogoWidget />
                    <Nav className="me-auto m-2 navBotonera">
                        <li><NavLink to={process.env.PUBLIC_URL + "/"} className="botonera">Home</NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + "/Category/jabon"} className="botonera">Jabon</NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + "/Category/cabello"} className="botonera">Cabello</NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + "/Cart"} className="botonera">Carrito</NavLink></li>
                    </Nav>
                    <CartWitget />
                </Container>
            </Navbar>
            <br />
        </div>
    )
}

export default NavBar