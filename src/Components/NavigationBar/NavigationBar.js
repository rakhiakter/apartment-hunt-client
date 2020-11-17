import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink, useHistory } from 'react-router-dom';
import './NavigationBar.css';
const NavigationBar = () => {
  const history = useHistory();
  return (
    <div className="nav-section">
      <Container className="pt-3">
        <Navbar>
          <Navbar.Brand href="#home">
            <Link to="/">
              <img
                style={{ height: 54.8 }}
                src={require("../../logos/logo.png").default}
                alt=""
              />
            </Link>
          </Navbar.Brand>
          <Nav className="ml-auto">
            <NavLink className="nav-link" activeClassName="active-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" activeClassName="active-link" to="#features">
              About
              </NavLink>
            <NavLink className="nav-link" activeClassName="active-link" to="#pricing">
              Service
              </NavLink>
            <NavLink className="nav-link" activeClassName="active-link" to="#concerns">
              Concerns
              </NavLink>
            <NavLink className="nav-link" activeClassName="active-link" to="#event">
              Event
              </NavLink>
            <NavLink className="nav-link" activeClassName="active-link" to="#contact">
              Contact
              </NavLink>
          </Nav>

          <button className="loginBtn" onClick={() => history.push('/login')}>Login</button >
        </Navbar>
      </Container>
    </div>
  );
};

export default NavigationBar;