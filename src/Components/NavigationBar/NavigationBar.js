import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
      <div>
        <Container>
          <Navbar>
            <Navbar.Brand href="#home">
              <Link to="/">
                <img
                  style={{ width: "150px", height: "70px" }}
                  src={require("../../logos/logo.png").default}
                  alt=""
                />
              </Link>
            </Navbar.Brand>
            <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">About</Nav.Link>
              <Nav.Link href="#pricing">Service</Nav.Link>
              <Nav.Link href="#pricing">Concerns</Nav.Link>
              <Nav.Link href="#pricing">Event</Nav.Link>
              <Nav.Link href="#pricing">Contact</Nav.Link>
            </Nav>

            <Button variant="outline-primary">Login</Button>
          </Navbar>
        </Container>
      </div>
    );
};

export default NavigationBar;