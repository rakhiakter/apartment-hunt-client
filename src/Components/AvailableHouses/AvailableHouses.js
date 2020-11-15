
import React from 'react';
import { Card, CardDeck, Col, Container, Row } from 'react-bootstrap';
import './AvailableHouse.css';
const AvailableHouses = () => {
    return (
      <Container>
        <h6 className="available1">House Rent</h6>
        <h2 className="available2">
          Discover the latest Rent <br /> available today{" "}
        </h2>
        <Row>
          <CardDeck>
            <Card>
              <Card.Img
                variant="top"
                src={require("../../images/rectangle 394.png").default}
                alt=""
              />
              <Card.Body>
                <Card.Title>Washington Avenue</Card.Title>
                <Card.Text>
                  <p>
                    <img
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
                      <p>
                        {" "}
                        <img
                          src={require("../../logos/bed 1.png").default}
                          alt=""
                        />{" "}
                        3 bedrooms
                      </p>
                    </Col>
                    <Col sm={6}>
                      <p>
                        {" "}
                        <img
                          src={require("../../logos/bath 1.png").default}
                          alt=""
                        />{" "}
                        2 bathrooms
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={6}>
                      <h3>$194</h3>
                    </Col>
                    <Col sm={6}>
                      <button>View Details</button>
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
                <Card.Title>Family Apartment Three</Card.Title>
                <Card.Text>
                  <p>
                    {" "}
                    <img
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
                      <p>
                        {" "}
                        <img
                          src={require("../../logos/bed 1.png").default}
                          alt=""
                        />{" "}
                        3 bedrooms
                      </p>
                    </Col>
                    <Col sm={6}>
                      <p>
                        {" "}
                        <img
                          src={require("../../logos/bath 1.png").default}
                          alt=""
                        />{" "}
                        2 bathrooms
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={6}>
                      <h3>$194</h3>
                    </Col>
                    <Col sm={6}>
                      <button>View Details</button>
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
                <Card.Title>Gorgeous house</Card.Title>
                <Card.Text>
                  <p>
                    {" "}
                    <img
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
                      <p>
                        {" "}
                        <img
                          src={require("../../logos/bed 1.png").default}
                          alt=""
                        />{" "}
                        3 bedrooms
                      </p>
                    </Col>
                    <Col sm={6}>
                      <p>
                        {" "}
                        <img
                          src={require("../../logos/bath 1.png").default}
                          alt=""
                        />{" "}
                        2 bathrooms
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={6}>
                      <h3>$194</h3>
                    </Col>
                    <Col sm={6}>
                      <button>View Details</button>
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
                <Card.Title>Luxury villa</Card.Title>
                <Card.Text>
                  <p>
                    {" "}
                    <img
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
                      <p>
                        {" "}
                        <img
                          src={require("../../logos/bed 1.png").default}
                          alt=""
                        />{" "}
                        3 bedrooms
                      </p>
                    </Col>
                    <Col sm={6}>
                      <p>
                        {" "}
                        <img
                          src={require("../../logos/bath 1.png").default}
                          alt=""
                        />{" "}
                        2 bathrooms
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={6}>
                      <h3>$194</h3>
                    </Col>
                    <Col sm={6}>
                      <button>View Details</button>
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
                <Card.Title>Epic Huda Palacio</Card.Title>
                <Card.Text>
                  <p>
                    {" "}
                    <img
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
                      <p>
                        {" "}
                        <img
                          src={require("../../logos/bed 1.png").default}
                          alt=""
                        />{" "}
                        3 bedrooms
                      </p>
                    </Col>
                    <Col sm={6}>
                      <p>
                        {" "}
                        <img
                          src={require("../../logos/bath 1.png").default}
                          alt=""
                        />{" "}
                        2 bathrooms
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={6}>
                      <h3>$194</h3>
                    </Col>
                    <Col sm={6}>
                      <button>View Details</button>
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
                <Card.Title>Washington Avenue</Card.Title>
                <Card.Text>
                  <p>
                    {" "}
                    <img
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
                      <p>
                        {" "}
                        <img
                          src={require("../../logos/bed 1.png").default}
                          alt=""
                        />{" "}
                        3 bedrooms
                      </p>
                    </Col>
                    <Col sm={6}>
                      <p>
                        {" "}
                        <img
                          src={require("../../logos/bath 1.png").default}
                          alt=""
                        />{" "}
                        2 bathrooms
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={6}>
                      <h3>$194</h3>
                    </Col>
                    <Col sm={6}>
                      <button>View Details</button>
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