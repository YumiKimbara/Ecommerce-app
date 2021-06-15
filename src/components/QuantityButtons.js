import React from "react";
import { Button, ButtonToolbar } from "react-bootstrap";
import { FaPlus, FaMinus } from "react-icons/fa";

const QuantityButtons = ({ quantity, setQuantity }) => {
  const handlePlusQuantityChange = () => {
    setQuantity(quantity + 1);
  };

  const handleMinusQuantityChange = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };
  return (
    <>
      <ButtonToolbar className="mb-3 text-center align-items-center well">
        <Button
          onClick={handleMinusQuantityChange}
          value="minus"
          type="button"
          variant="outline-dark"
          size="sm"
          className="me-3"
        >
          <FaMinus />
        </Button>
        <h4 className="my-0">{quantity}</h4>
        <Button
          onClick={handlePlusQuantityChange}
          value="plus"
          type="button"
          variant="outline-dark"
          size="sm"
          className="ms-3"
        >
          <FaPlus />
        </Button>
      </ButtonToolbar>
    </>
  );
};

export default QuantityButtons;
