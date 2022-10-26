import React from "react";


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
                        <Nav.Link href="#home" className="botonera">Home</Nav.Link>
                        <Nav.Link href="#tienda" className="botonera">Tienda</Nav.Link>
                        <Nav.Link href="#distribuidora" className="botonera">Distribuidora</Nav.Link>
                    </Nav>
                    <CartWitget />
                </Container>
            </Navbar>
            <br />
        </div>
    )
}

export default NavBar