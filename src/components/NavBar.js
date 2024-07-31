import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/logo.png"

function NavBar() {
  return (
    <Navbar expand="md" fixed='top'>
      <Container>
        <Navbar.Brand>
          <img src={logo} alt='logo' height='45'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-start">
            <Nav.Link><i class="fa-solid fa-house"></i>Home</Nav.Link>
            <Nav.Link><i class="fa-solid fa-right-to-bracket"></i>Sign in</Nav.Link>
            <Nav.Link><i class="fa-solid fa-user-plus"></i>Sign up</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar;