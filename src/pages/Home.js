import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";

import banner from "../assets/banner.png";
import women from "../assets/women.jpg";
import men from "../assets/men.jpg";
import onsideimage from "../assets/onsideimage.jpg";

import RowOfProducts from "../components/RowOfProducts";

const Home = ({ bag, setBag, search, setSearch }) => {
  return (
    <Container fluid className="px-0">
      <Row
        className="justify-content-center"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPositionY: "center",
          height: "630px",
        }}
      >
        <Col
          md={4}
          className="d-flex flex-column text-center justify-content-end justify-content-md-center align-items-end align-items-md-center p-2"
        >
          <h1 className="text-dark bg-light fw-bold text-uppercase p-2">
            Purpose
          </h1>
          <p className="text-dark bg-light fw-bold text-uppercase text-md-center text-end p-2">
            Find your why and you will find a way to make it happen.
          </p>
          <Button
            variant="dark"
            size="lg"
            type="button"
            className="px-4 text-uppercase"
            href="/category/all-products"
          >
            Shop
          </Button>
        </Col>
      </Row>
      <RowOfProducts
        category="bottoms & leggings"
        isHomePage={true}
        bag={bag}
        setBag={setBag}
        search={search}
        setSearch={setSearch}
      />

      <Container>
        <Row className="p-2 align-items-center">
          <Col md={6}>
            <Image fluid src={onsideimage} />
          </Col>
          <Col md={6} className="text-center">
            <h3 className="fw-bold text-uppercase">Join Us</h3>
            <p className="fw-bold text-uppercase">
              To get all the member exclusives.
            </p>
            <Button
              href="/signin"
              variant="dark"
              size="lg"
              type="button"
              className="px-4 text-uppercase"
            >
              SIGN IN
            </Button>
          </Col>
        </Row>
      </Container>

      <RowOfProducts
        category="hoodies & jackets"
        isHomePage={true}
        bag={bag}
        setBag={setBag}
        search={search}
        setSearch={setSearch}
      />

      <Container>
        <Row className="p-2">
          <Col md={6} className="mt-2">
            <Col
              md={12}
              className="d-flex flex-column justify-content-end align-items-end p-4 gap-2"
              style={{
                backgroundImage: `url(${women})`,
                backgroundSize: "cover",
                height: "90vh",
              }}
            >
              <h1 className="display-5 fw-bold text-uppercase text-light">
                Women
              </h1>
              <Button
                variant="light"
                size="lg"
                type="button"
                className="fw-bold px-4 text-uppercase"
                href="/category/womens"
              >
                Shop
              </Button>
            </Col>
          </Col>
          <Col md={6} className="mt-2">
            <Col
              md={12}
              className="text-start p-4 gap-2"
              style={{
                backgroundImage: `url(${men})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "90vh",
              }}
            >
              <h1 className="display-5 fw-bold text-uppercase text-light">
                Men
              </h1>
              <Button
                variant="light"
                size="lg"
                type="button"
                className="fw-bold px-4 text-uppercase"
                href="/category/mens"
              >
                Shop
              </Button>
            </Col>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Home;
