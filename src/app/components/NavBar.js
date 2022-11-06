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
                        <li><Nav.Link href="http://localhost:3000" className="botonera">Home</Nav.Link></li>
                        <li><Nav.Link href="http://localhost:3000/Tienda" className="botonera">Tienda</Nav.Link></li>
                        <li><Nav.Link href="http://localhost:3000/Distribuidora" className="botonera">Distribuidora</Nav.Link></li>
                    </Nav>
                    <CartWitget />
                </Container>
            </Navbar>
            <br />
        </div>
    )
}

export default NavBar