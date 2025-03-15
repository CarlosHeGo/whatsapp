import React, { useContext } from 'react';
import { Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { MessContext } from '../context/MessContext';
import { NavLink } from 'react-router';

function NavBarComponent() {

    const { contacts } = useContext(MessContext);
    const nombresContactos = [...new Set(contacts.map(p => p.contacto))].sort();

    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body">
            <Container>
                <Navbar.Brand as={NavLink} to={`/`}>
                    <Image src='/Whatsapp.png' className="d-inline-block align-top" width='30px'/>
                    Whatsapp
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavDropdown title="Contactos" id="collapsible-nav-dropdown">
                            {nombresContactos.map((nombre) => (
                                <NavDropdown.Item key={nombre} as={NavLink} to={`/contactos/${nombre}`}>{nombre}</NavDropdown.Item>
                            ))}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBarComponent;