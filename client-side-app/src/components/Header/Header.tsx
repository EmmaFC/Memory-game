import React from 'react';
import {Container, Navbar, Nav} from 'react-bootstrap';
import {Row, Col} from 'react-bootstrap';
import './Header.module.css';

function Header () {
 
  return (
    <div className="App">
      <header>
        <Row>
          <Container>
            <Row>

              <Navbar bg="dark" variant="dark" expand="lg" >
                <Col sm={1}> 
                  <img src="https://picsum.photos/seed/picsum/200/300" className="absolute rounded-circle img-responsive" alt="Images"></img>      
                </Col>
                <Col>  
                <Container>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Navbar.Brand href="/user">User Name</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/profile">Profile</Nav.Link>
                  </Nav>
                  <Nav>
                    <Navbar.Brand href="/">Memory Game</Navbar.Brand>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/register">Register</Nav.Link>
                  </Nav>
                  </Navbar.Collapse>
                </Container>
                </Col>  
              </Navbar>

            </Row>
            <Row>

              <Navbar bg="light" expand="lg">
              <Col sm={1}> 
                </Col>
                <Col>  
                <Container>
                <Navbar.Collapse id="basic-navbar-nav">
                <Navbar.Brand href="/"></Navbar.Brand>

                  <Nav className="me-auto">
                  <Nav.Link href="/profile">User info</Nav.Link>
                  <Nav.Link href="/">User score</Nav.Link>
                </Nav>
                <Nav>
                  <Nav.Link href="/profile">Points</Nav.Link>
                  <Nav.Link href="/">Time</Nav.Link>
                </Nav>
                </Navbar.Collapse> 
                </Container>

                </Col>  
                
              </Navbar>

            </Row>
          </Container>
        </Row>
      </header>
    </div>
  );

}

export default Header;
