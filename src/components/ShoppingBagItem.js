import React, { useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import QuantityButtons from "./QuantityButtons";

const ShoppingBagItem = ({ item, bag, setBag }) => {
  const [quantity, setQuantity] = useState(item.quantity);
  //if the item's quantity changes and is equal to 0, then delete otherwise just change the quantity
  useEffect(() => {
    if (quantity === 0) {
      setBag(bag.filter((i) => i.id !== item.id));
    } else {
      setBag(
        bag.map((i) => {
          if (i.id === item.id) {
            return {
              ...i,
              quantity: quantity,
            };
          }
          return i;
        })
      );
    }
  }, [quantity]);

  return (
    <>
      <Row className="py-2 border">
        <Col md={4} lg={8}>
          <Row>
            <Col lg={4}>
              <Image width="100%" src={item.previewImage} style={{height:"230px", objectFit:"cover"}}/>
            </Col>
            <Col lg={8}>
              <p>{item.name}</p>
              <p>{item.size}</p>
              <p>${item.price} CAD</p>
            </Col>
          </Row>
        </Col>
        <Col
          md={4}
          lg={2}
          className="d-flex justify-content-center align-items-center"
        >
          <QuantityButtons quantity={quantity} setQuantity={setQuantity} />
        </Col>
        <Col
          md={4}
          lg={2}
          className="d-flex justify-content-center align-items-center"
        >
          ${item.price * quantity} CAD
        </Col>
      </Row>
    </>
  );
};

export default ShoppingBagItem;
