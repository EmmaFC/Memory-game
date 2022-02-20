import React from 'react'
import {Container, Navbar, Nav} from 'react-bootstrap';

function Footer () {
    return (
      <div className="App">
        <footer className="fixed-bottom">
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Copyright &copy;</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/other-games">Other Games</Nav.Link>
                  </Nav>
                  <Nav>
                    <Nav.Link href="/social-media">Social Media</Nav.Link>
                    <Nav.Link eventKey={2} href="/contact">Contact</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
            </Container>
          </Navbar>
        </footer>
      </div>
    );
  }
  
  export default Footer;
  