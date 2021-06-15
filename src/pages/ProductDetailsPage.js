import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Accordion, Card } from "react-bootstrap";

import RowOfProducts from "../components/RowOfProducts";
import ProductDetailsForm from "../components/ProductDetailsForm";
import ProductCarousel from "../components/ProductCarousel";

import "../scss/ProductDetailsPage.scss";

const ProductDetailsPage = ({ bag, setBag, search, setSearch }) => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getProduct();
  }, [id]);

  const getProduct = async () => {
    const url = `https://e-commerce-api.belzaondrej.com/products/${id}`;
    try {
      let response = await axios.get(url);
      setProduct(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container className="py-2">
      {product && (
        <>
          <Row className="d-flex px-0 mx-0">
            <Col md={8}>
              <Row>
                <ProductCarousel
                  previewImage={product.previewImage}
                  detailImages={product.detailImages}
                />
              </Row>
              <Accordion defaultActiveKey="0" className="mt-3">
                <Card color="light" border="light">
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    Description
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>{product.description}</Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Col>
            <Col md={4}>
              <ProductDetailsForm product={product} bag={bag} setBag={setBag} />
            </Col>
          </Row>

          <RowOfProducts
            key={"might-like-" + product.id}
            productId={product.id}
            category={product.subcategory.name}
            bag={bag}
            setBag={setBag}
            search={search}
            setSearch={setSearch}
          />
        </>
      )}
    </Container>
  );
};

export default ProductDetailsPage;
