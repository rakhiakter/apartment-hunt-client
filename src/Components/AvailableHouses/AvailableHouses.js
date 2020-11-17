
import React from 'react';
import { Card, CardDeck, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AvailableHouse.css';
const AvailableHouses = () => {
    return (
      <Container>
        <h6 className="available1">House Rent</h6>
        <h2 className="available2">
          Discover the latest Rent <br /> available today{" "}
        </h2>
        <Row className="cardImg">
          <CardDeck>
            <Card>
              <Card.Img
                variant="top"
                src={require("../../images/rectangle 394.png").default}
                alt=""
              />
              <Card.Body>
                <Card.Title className="avenue">Washington Avenue</Card.Title>
                <Card.Text>
                  <p className="address">
                    <img
                      className="map"
                      src={
                        require("../../logos/map-marker-alt-solid 1.png")
                          .default
                      }
                      alt=""
                    />{" "}
                    Nasirabad H/S, Chattogram
                  </p>
                  <Row>
                    <Col sm={6}>
                      <p className="address">
                        {" "}
                        <img
                          className="map"
                          src={require("../../logos/bed 1.png").default}
                          alt=""
                        />{" "}
                        3 Bedrooms
                      </p>
                    </Col>
                    <Col sm={6}>
                      <p className="address">
                        {" "}
                        <img
                          className="map"
                          src={require("../../logos/bath 1.png").default}
                          alt=""
                        />{" "}
                        2 Bathrooms
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={6}>
                      <h3 className="amount">$194</h3>
                    </Col>
                    <Col sm={6}>
                      <Link to="/apartmentDetails">
                        {" "}
                        <button className="view">View Details</button>
                      </Link>
                    </Col>
                  </Row>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src={require("../../images/rectangle 396.png").default}
                alt=""
              />
              <Card.Body>
                <Card.Title className="avenue">
                  Family Apartment Three
                </Card.Title>
                <Card.Text>
                  <p className="address">
                    {" "}
                    <img
                      className="map"
                      src={
                        require("../../logos/map-marker-alt-solid 1.png")
                          .default
                      }
                      alt=""
                    />{" "}
                    Nasirabad H/S, Chattogram
                  </p>
                  <Row>
                    <Col sm={6}>
                      <p className="address">
                        {" "}
                        <img
                          className="map"
                          src={require("../../logos/bed 1.png").default}
                          alt=""
                        />{" "}
                        3 Bedrooms
                      </p>
                    </Col>
                    <Col sm={6}>
                      <p className="address">
                        {" "}
                        <img
                          className="map"
                          src={require("../../logos/bath 1.png").default}
                          alt=""
                        />{" "}
                        2 Bathrooms
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={6}>
                      <h3 className="amount">$356</h3>
                    </Col>
                    <Col sm={6}>
                      <Link to="/apartmentDetails">
                        <button className="view">View Details</button>
                      </Link>
                    </Col>
                  </Row>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src={require("../../images/rectangle 398.png").default}
                alt=""
              />
              <Card.Body>
                <Card.Title className="avenue">Gorgeous house</Card.Title>
                <Card.Text>
                  <p className="address">
                    {" "}
                    <img
                      className="map"
                      src={
                        require("../../logos/map-marker-alt-solid 1.png")
                          .default
                      }
                      alt=""
                    />{" "}
                    Nasirabad H/S, Chattogram
                  </p>
                  <Row>
                    <Col sm={6}>
                      <p className="address">
                        {" "}
                        <img
                          className="map"
                          src={require("../../logos/bed 1.png").default}
                          alt=""
                        />{" "}
                        3 Bedrooms
                      </p>
                    </Col>
                    <Col sm={6}>
                      <p className="address">
                        {" "}
                        <img
                          className="map"
                          src={require("../../logos/bath 1.png").default}
                          alt=""
                        />{" "}
                        2 Bathrooms
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={6}>
                      <h3 className="amount">$256</h3>
                    </Col>
                    <Col sm={6}>
                      <Link to="/apartmentDetails">
                        <button className="view">View Details</button>
                      </Link>
                    </Col>
                  </Row>
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </Row>
        <Row className="house">
          <CardDeck>
            <Card>
              <Card.Img
                variant="top"
                src={require("../../images/rectangle 405.png").default}
                alt=""
              />
              <Card.Body>
                <Card.Title className="avenue">Luxury villa</Card.Title>
                <Card.Text>
                  <p className="address">
                    {" "}
                    <img
                      className="map"
                      src={
                        require("../../logos/map-marker-alt-solid 1.png")
                          .default
                      }
                      alt=""
                    />{" "}
                    Nasirabad H/S, Chattogram
                  </p>
                  <Row>
                    <Col sm={6}>
                      <p className="address">
                        {" "}
                        <img
                          className="map"
                          src={require("../../logos/bed 1.png").default}
                          alt=""
                        />{" "}
                        3 Bedrooms
                      </p>
                    </Col>
                    <Col sm={6}>
                      <p className="address">
                        {" "}
                        <img
                          className="map"
                          src={require("../../logos/bath 1.png").default}
                          alt=""
                        />{" "}
                        2 Bathrooms
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={6}>
                      <h3 className="amount">$345</h3>
                    </Col>
                    <Col sm={6}>
                      <Link to="/apartmentDetails">
                        <button className="view">View Details</button>
                      </Link>
                    </Col>
                  </Row>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src={require("../../images/rectangle 403.png").default}
                alt=""
              />
              <Card.Body>
                <Card.Title className="avenue">Epic Huda Palacio</Card.Title>
                <Card.Text>
                  <p className="address">
                    {" "}
                    <img
                      className="map"
                      src={
                        require("../../logos/map-marker-alt-solid 1.png")
                          .default
                      }
                      alt=""
                    />{" "}
                    Nasirabad H/S, Chattogram
                  </p>
                  <Row>
                    <Col sm={6}>
                      <p className="address">
                        {" "}
                        <img
                          className="map"
                          src={require("../../logos/bed 1.png").default}
                          alt=""
                        />{" "}
                        3 Bedrooms
                      </p>
                    </Col>
                    <Col sm={6}>
                      <p className="address">
                        {" "}
                        <img
                          className="map"
                          src={require("../../logos/bath 1.png").default}
                          alt=""
                        />{" "}
                        2 Bathrooms
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={6}>
                      <h3 className="amount">$536</h3>
                    </Col>
                    <Col sm={6}>
                      <Link to="/apartmentDetails">
                        <button className="view">View Details</button>
                      </Link>
                    </Col>
                  </Row>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src={require("../../images/rectangle 404.png").default}
                alt=""
              />
              <Card.Body>
                <Card.Title className="avenue">Washington Avenue</Card.Title>
                <Card.Text>
                  <p className="address">
                    {" "}
                    <img
                      className="map"
                      src={
                        require("../../logos/map-marker-alt-solid 1.png")
                          .default
                      }
                      alt=""
                    />{" "}
                    Nasirabad H/S, Chattogram
                  </p>
                  <Row>
                    <Col sm={6}>
                      <p className="address">
                        {" "}
                        <img
                          className="map"
                          src={require("../../logos/bed 1.png").default}
                          alt=""
                        />{" "}
                        3 Bedrooms
                      </p>
                    </Col>
                    <Col sm={6}>
                      <p className="address">
                        {" "}
                        <img
                          className="map"
                          src={require("../../logos/bath 1.png").default}
                          alt=""
                        />{" "}
                        2 Bathrooms
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={6}>
                      <h3 className="amount">$283</h3>
                    </Col>
                    <Col sm={6}>
                      <Link to="/apartmentDetails">
                        <button className="view">View Details</button>
                      </Link>
                    </Col>
                  </Row>
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </Row>
      </Container>
    );
};

export default AvailableHouses;