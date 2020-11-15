import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
const Footer = () => {
    return (
      <Container className="footer">
        <Row>
          <Col className="footerCol" md={3}>
            {" "}
            <ul>
              H#340 (4th Floor), Road #24, New DOHS, Mohakhali, Dhaka,
              Bangladesh Phone: 018XXXXXXXX E-mail: info@company.com
            </ul>
          </Col>
          <Col className="footerCol" md={3}>
            <h5>Company</h5>
            <ul>
              <li>About</li>
              <li>Site Map</li>
              <li>Support Center</li>
              <li>Terms Conditions</li>
              <li>Submit Listing</li>
            </ul>
          </Col>
          <Col className="footerCol" md={3}>
            <h5>Quick Links</h5>

            <ul>
              <li>Quick Links</li>
              <li>Rentals</li>
              <li>Sales</li>
              <li>Contact</li>
              <li>Terms Conditions</li>
              <li>Our blogs</li>
            </ul>
          </Col>
          <Col className="footerCol" md={3}>
            <h5>About Us</h5>
            <ul>
              H#340 (4th Floor), Road #24, New DOHS, Mohakhali, Dhaka,
              Bangladesh Phone: 018XXXXXXXX E-mail: info@company.com
            </ul>
            <Row>
              <Col sm={3}>
                <img
                  className="socialSites"
                  src={require("../../logos/vector.png").default}
                  alt=""
                />{" "}
              </Col>
              <Col sm={3}>
                {" "}
                <img
                  className="socialSites"
                  src={require("../../logos/vector-1.png").default}
                  alt=""
                />{" "}
              </Col>
              <Col sm={3}>
                {" "}
                <img
                  className="socialSites"
                  src={require("../../logos/vector-2.png").default}
                  alt=""
                />{" "}
              </Col>
              <Col sm={3}>
                {" "}
                <img
                  className="socialSites"
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