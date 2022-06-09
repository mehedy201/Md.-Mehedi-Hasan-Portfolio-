import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className='nav-bar-color' variant="dark">
            <Container>
            <Navbar.Brand as={Link} to="home"className='text-success fw-bold logo-text' >Md. Mehedi Hasan</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="home">Home</Nav.Link>
                <Nav.Link as={Link} to="services">Services</Nav.Link>
                <Nav.Link as={Link} to="skills">Skills</Nav.Link>
                <Nav.Link as={Link} to="our-pojects">Our Projects</Nav.Link>
                <Nav.Link as={Link} to="clien-review">Review</Nav.Link>
                <Nav.Link as={Link} to="about">About Me</Nav.Link>
                <Nav.Link as={Link} to="contact">Contact Me</Nav.Link>
                <Nav.Link as={Link} to="pricing"></Nav.Link>
              </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;