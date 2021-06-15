import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Button, Card, ButtonToolbar } from "react-bootstrap";

import "../../scss/ProductCard.scss";

const ProductCard = ({ product, bag, setBag, setSearch }) => {
  const [sizes, setSizes] = useState(null);

  useEffect(() => {
    getSizes();
  }, []);

  const getSizes = async () => {
    const url = `https://e-commerce-api.belzaondrej.com/products/sizes`;
    try {
      let response = await axios.get(url);
      setSizes(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const changeSearchState = () => {
    setSearch(false);
  };

  const addToBag = (e) => {
    e.preventDefault();
    if (!bag) return;
    let size = e.target.value;
    let productToAdd = {
      id: `${product.id}-${size}`,
      name: product.name,
      previewImage: product.previewImage,
      price: product.price,
      size: e.target.value,
      quantity: 1,
    };
    if (bag.some((b) => b.id === `${product.id}-${size}`)) {
      setBag(
        bag.map((i) => {
          if (i.id === `${product.id}-${size}`) {
            return {
              ...i,
              quantity: i.quantity + 1,
            };
          }
          return i;
        })
      );
    } else {
      setBag([...bag, productToAdd]);
    }
  };
  return (
    <Col lg={6} xl={3}>
      <Card className="border-0" style={{ width: "100%" }} href="#">
        <div className="product-image">
          <Link to={`/products/${product.id}`}>
            <Card.Img
              variant="top"
              className="card-img-top rounded-0"
              src={product.previewImage}
              alt="p1"
              onClick={changeSearchState}
            />
          </Link>
          <div className="quick-add-overlay rounded py-2 px-2">
            <h6 className="text-uppercase fw-bold">Quick Add</h6>
            <ButtonToolbar className="justify-content-center">
              {sizes &&
                sizes.map((s) => {
                  let availability = {};
                  availability.disabled = product.stock.some(
                    (st) => st.size === s && st.quantity < 20
                  )
                    ? true
                    : false;
                  return (
                    <Button
                      key={s}
                      onClick={addToBag}
                      {...availability}
                      type="button"
                      variant="outline-dark"
                      size="sm"
                      className="me-1"
                      value={s}
                    >
                      {s}
                    </Button>
                  );
                })}
            </ButtonToolbar>
          </div>
        </div>

        <Card.Body className="px-0 mx-0">
          <Link
            to={`/products/${product.id}`}
            className="card-text text-decoration-none link-dark d-flex flex-row justify-content-between"
          >
            <h6>{product.name}</h6>
            <h6 className="fw-bold">${product.price} CAD</h6>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCard;
