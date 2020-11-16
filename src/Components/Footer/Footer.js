import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
const Footer = () => {
    return (
      <Container className="footer">
        <Row>
          <Col className="footerCol" md={3}>
            <h5 className="company">Location</h5>
            <div>
              <ul className="about">
                H#340 (4th Floor), Road #24, New DOHS, Mohakhali, Dhaka,
                Bangladesh Phone: 018XXXXXXXX E-mail: info@company.com
              </ul>
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
              <ul className="about">
                H#340 (4th Floor), Road #24, New DOHS, Mohakhali, Dhaka,
                Bangladesh Phone: 018XXXXXXXX E-mail: info@company.com
              </ul>
            </div>
            <Row>
              <Col sm={3}>
                <img
                  className="socialSites1"
                  src={require("../../logos/vector.png").default}
                  alt=""
                />{" "}
              </Col>
              <Col sm={3}>
                {" "}
                <img
                  className="socialSites2"
                  src={require("../../logos/vector-1.png").default}
                  alt=""
                />{" "}
              </Col>
              <Col sm={3}>
                {" "}
                <img
                  className="socialSites3"
                  src={require("../../logos/vector-2.png").default}
                  alt=""
                />{" "}
              </Col>
              <Col sm={3}>
                {" "}
                <img
                  className="socialSites4"
                  src={require("../../logos/vector-3.png").default}
                  alt=""
                />{" "}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
};

export default Footer;