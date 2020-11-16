import React from 'react';
import {  Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavigationBar.css';
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
            <Nav className="ml-auto ">
              <Nav.Link className="navColor" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="navColor" href="#features">
                About
              </Nav.Link>
              <Nav.Link className="navColor" href="#pricing">
                Service
              </Nav.Link>
              <Nav.Link className="navColor" href="#pricing">
                Concerns
              </Nav.Link>
              <Nav.Link className="navColor" href="#pricing">
                Event
              </Nav.Link>
              <Nav.Link className="navColor" href="#pricing">
                Contact
              </Nav.Link>
            </Nav>

            <button className="loginBtn">Login</button>
          </Navbar>
        </Container>
      </div>
    );
};

export default NavigationBar;