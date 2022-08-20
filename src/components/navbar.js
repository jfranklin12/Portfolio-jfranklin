import '../App.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import meFooter from '../images/meFooter.jpg'

function MyNavbar({ currentPage, handlePageChange }) {
  return (
    // Need help making navbar links referencing activity 24
    <Navbar className="myNavbar" expand="md" sticky='top'>
      <Container id='myNav'>
        <Navbar.Brand>         
        <a 
          href="#header"
          onClick={() => handlePageChange('Header')}
          className={currentPage === 'Header' ? 'nav-link active' : 'nav-link'}
        >
        <img
          id='footerPicture'
          alt="Julian Franklin"
          src={meFooter}
        />
        </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" id='navLinks'>About Me</Nav.Link>
            <Nav.Link href="#link" id='navLinks'>My Work</Nav.Link>
            <Nav.Link href="#link" id='navLinks'>Contact</Nav.Link>
            <Nav.Link href="#link" id='navLinks'>Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default MyNavbar;