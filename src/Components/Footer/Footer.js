import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.scss';
const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col className="footerCol" md={3}>
            <div>
              <p className="about">
                H#340 (4th Floor), Road #24, New DOHS, Mohakhali, Dhaka,
                Bangladesh <br /> Phone: 018XXXXXXXX <br /> E-mail: info@company.com
              </p>
            </div>
          </Col>
          <Col className="footerCol" md={3}>
            <h5 className="company">Company</h5>
            <div className="company1">
              <ul className="about">
                <li>About</li>
                <li>Site Map</li>
                <li>Support Center</li>
                <li>Terms Conditions</li>
                <li>Submit Listing</li>
              </ul>
            </div>
          </Col>
          <Col className="footerCol" md={3}>
            <h5 className="company">Quick Links</h5>
            <div>
              <ul className="about">
                <li>Quick Links</li>
                <li>Rentals</li>
                <li>Sales</li>
                <li>Contact</li>
                <li>Terms Conditions</li>
                <li>Our blogs</li>
              </ul>
            </div>
          </Col>
          <Col className="footerCol" md={3}>
            <h5 className="company">About Us</h5>
            <div>
              <p className="about">
                We are the top real estate
                agency in Sydney, with agents
                available to answer any
                question 24/7.
              </p>
            </div>
            <Row>
              <Col sm={3}>
                <img
                  className="socialSites1"
                  src={require("../../logos/vector.png").default}
                  alt=""
                />
              </Col>
              <Col sm={3}>
                <img
                  className="socialSites2"
                  src={require("../../logos/vector-1.png").default}
                  alt=""
                />
              </Col>
              <Col sm={3}>
                <img
                  className="socialSites3"
                  src={require("../../logos/vector-2.png").default}
                  alt=""
                />
              </Col>
              <Col sm={3}>
                <img
                  className="socialSites4"
                  src={require("../../logos/vector-3.png").default}
                  alt=""
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;