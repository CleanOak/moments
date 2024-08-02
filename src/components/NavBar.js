import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/logo.png"
import styles from "../styles/NavBar.module.css";
import { NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function NavBar() {
  return (
    <Navbar className={styles.NavBar} expand="md" fixed='top'>
      <Container>
        <Link to="/">
          <Navbar.Brand>
            <img src={logo} alt='logo' height='45'/>
          </Navbar.Brand>
          </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-start">
            <NavLink to="/" className={styles.NavLink}
              activeClassName={styles.Active}><i class="fa-solid fa-house"></i>Home</NavLink>

            <NavLink to="/signin" className={styles.NavLink}
              activeClassName={styles.Active}><i class="fa-solid fa-right-to-bracket"></i>Sign in</NavLink>

            <NavLink to="/signup" className={styles.NavLink}
              activeClassName={styles.Active}><i class="fa-solid fa-user-plus"></i>Sign up</NavLink>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar;