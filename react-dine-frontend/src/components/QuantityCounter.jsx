import "./QuantityCounter.css";
import { useState } from "react";

const QuantityCounter = ({ quantity, setQuantity, minAmmount }) => {
  const handleDecrement = () => {
    if (quantity > minAmmount) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddition = () => {
    if (quantity < 99) {
      setQuantity(quantity + 1);
    }
  };
  return (
    <>
      <button className="quantity__button" onClick={handleDecrement}>
        ➖
      </button>
      <h1 className="quantity__h1">{quantity}</h1>
      <button className="quantity__button" onClick={handleAddition}>
        ➕
      </button>
    </>
  );
};

export default QuantityCounter;