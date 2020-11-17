import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Service.scss';
const Service = () => {
  return (
    <Container className="service-section">
      <h6 className="service1">Service</h6>
      <h2 className="service2">
        We're an agency tailored to all <br /> clients' needs that always
          delivers
        </h2>
      <Row className="serviceImg">
        <Col md={4}>
          <img
            className="img1"
            src={require("../../logos/apartment 1.png").default}
            alt=""
          />
          <h4 className="serviceHeader">Wide Range of Properties</h4>
          <p className="about">
            With a robust selection of popular <br /> properties on hand, as
              well as
              <br />
              leading properties from experts.
            </p>
        </Col>
        <Col md={4}>
          <img
            className="img2"
            src={require("../../logos/affordable 1.png").default}
            alt=""
          />
          <h4 className="serviceHeader">Financing Made Easy</h4>
          <p className="about">
            Our stress-free finance department
              <br />
              that can find financial solutions
              <br />
              to save you money.
            </p>
        </Col>
        <Col md={4}>
          <img
            className="img3"
            src={require("../../logos/lessee 1.png").default}
            alt=""
          />
          <h4 className="serviceHeader">Trusted by Thousands</h4>
          <p className="about">
            10 new offers every day. 350 offers
              <br />
              on site, trusted by a community
              <br />
              of thousands of users.
            </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Service;