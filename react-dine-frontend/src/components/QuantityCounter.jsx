import "./QuantityCounter.css";
import { useState } from "react";

const QuantityCounter = ({
  quantity,
  setQuantity,
  minAmmount,
  quantityChange,
  setQuantityChange,
}) => {
  const handleDecrement = () => {
    if (quantity > minAmmount) {
      setQuantity(quantity - 1);
      if (setQuantityChange) {
        setQuantityChange(!quantityChange);
      }
    }
  };

  const handleAddition = () => {
    if (quantity < 99) {
      setQuantity(quantity + 1);
      if (setQuantityChange) {
        setQuantityChange(!quantityChange);
      }
    }
  };
  return (
    <>
      <button className="quantity__button" onClick={handleDecrement}>
        ➖
      </button>
      <h1
        className={
          setQuantityChange ? "quantity__h1-cart" : "quantity__h1-menu"
        }
      >
        {quantity}
      </h1>
      <button className="quantity__button" onClick={handleAddition}>
        ➕
      </button>
    </>
  );
};

export default QuantityCounter;
