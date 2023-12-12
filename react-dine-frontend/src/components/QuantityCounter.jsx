import "./QuantityCounter.css";
import { useState } from "react";

const QuantityCounter = ({
  quantity,
  setQuantity,
  minAmmount,
  buttonClicked,
  setbuttonClicked,
}) => {
  const handleDecrement = () => {
    setQuantity(quantity - 1);
    // For updating cartItems on CartPage
    if (setbuttonClicked) {
      setbuttonClicked(!buttonClicked);
    }
  };

  const handleAddition = () => {
    setQuantity(quantity + 1);
    // For updating cartItems on CartPage
    if (setbuttonClicked) {
      setbuttonClicked(!buttonClicked);
    }
  };

  return (
    <>
      <button
        className="quantity__button"
        onClick={handleDecrement}
        disabled={quantity === minAmmount}
        style={quantity === minAmmount ? { pointerEvents: "none" } : {}}
      >
        ➖
      </button>
      <h1
        className={setbuttonClicked ? "quantity__h1-cart" : "quantity__h1-menu"}
      >
        {quantity}
      </h1>
      <button
        className="quantity__button"
        onClick={handleAddition}
        disabled={quantity === 99}
        style={quantity === 99 ? { pointerEvents: "none" } : {}}
      >
        ➕
      </button>
    </>
  );
};

export default QuantityCounter;
