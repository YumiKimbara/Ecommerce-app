import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import ShoppingBagItem from "../components/ShoppingBagItem";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";
import axios from "axios";
const stripePromise = loadStripe(
  "pk_test_51IQ4BPHDh0apBsvmagmJGtI6rFMu5hr4Fjvm3HUKLigHcaN5nckdZhRMOBwoyQIMzsZEBJmmvv7ttw4i4sUFO6cg00tk66uFh1"
);

const ShoppingBag = ({ bag, setBag }) => {
  const [total, setTotal] = useState(0);
  //get the total price of the items in the bag
  useEffect(() => {
    setTotal(bag.reduce((a, b) => a + b.price * b.quantity, 0));
  }, [bag]);

  const checkout = async () => {
    const stripe = await stripePromise;
    const response = await axios.post(
      "https://e-commerce-api.belzaondrej.com/create-checkout-session",
      {
        items: bag.map((p) => {
          return {
            price: p.price,
            quantity: p.quantity,
            image: p.previewImage,
            name: `${p.name} - ${p.size}`,
          };
        }),
      }
    );

    const session = response.data;

    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });
    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
  };
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h2 className="text-uppercase text-center my-3">Shopping Bag</h2>
          </Col>
        </Row>
        {bag.length === 0 ? (
          <Row>
            <h5>Your bag is currently empty.</h5>
          </Row>
        ) : (
          <>
            <Row className="bg-light py-2 border text-uppercase">
              <Col md={4} lg={8}>
                Item
              </Col>
              <Col md={4} lg={2} className="text-center">
                Quantity
              </Col>
              <Col md={4} lg={2} className="text-center">
                Subtotal
              </Col>
            </Row>
            {bag.map((item) => (
              <ShoppingBagItem
                key={item.id}
                item={item}
                bag={bag}
                setBag={setBag}
              />
            ))}
            <Row className="py-2 border fw-bold text-uppercase d-flex justify-content-end">
              <Col md={4} lg={2}>
                Total
              </Col>
              <Col md={4} lg={2} className="text-center">
                ${total} CAD
              </Col>
            </Row>
            <Row className="d-flex justify-content-end my-3">
              <Col md lg={2}>
                <Button
                  variant="dark"
                  className="w-100"
                  onClick={() => {
                    checkout();
                  }}
                >
                  Checkout
                </Button>
              </Col>
            </Row>
          </>
        )}
      </Container>
    </>
  );
};

export default ShoppingBag;
