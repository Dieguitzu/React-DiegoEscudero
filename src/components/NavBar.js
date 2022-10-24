import React from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';

const NavBar = () => {
    return(
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav><CartWidget /></Nav>
                    <Nav className="me-auto m-2 botonera">
                        <Nav.Link href="#home" className="botonera">Home</Nav.Link>
                        <Nav.Link href="#features" className="botonera">Tienda</Nav.Link>
                        <Nav.Link href="#pricing" className="botonera">Distribuidora</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />
        </div>
    )
}

export default NavBar