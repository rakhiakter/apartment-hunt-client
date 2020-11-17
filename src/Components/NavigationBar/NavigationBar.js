import React from 'react';
import {  Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavigationBar.scss';
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
              <Link to="/" className="navColor1">
                Home
              </Link>
              <Link to="/apartmentDetails" className="navColor2">
                About
              </Link>
              <Link to="/myRent" className="navColor3">
                Service
              </Link>
              <Link className="navColor4" href="#pricing">
                Concerns
              </Link>
              <Link className="navColor5" href="#pricing">
                Event
              </Link>
              <Link className="navColor6" href="#pricing">
                Contact
              </Link>
            </Nav>

            <Link to="/login">
              <button className="loginBtn">Login</button>
            </Link>
          </Navbar>
        </Container>
      </div>
    );
};

export default NavigationBar;