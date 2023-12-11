import "./CartListItem.css";

import { useState, useEffect } from "react";
import QuantityCounter from "./QuantityCounter";

const CartListItem = ({ id, name, image, price, startQuantity }) => {
  const [quantity, setQuantity] = useState(startQuantity);

  let priceText = price + "€";
  if (quantity > 1) {
    priceText = quantity + " X " + price + "€";
  }

  const updateLocalStorage = (itemId, updatedQuantity) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (quantity === 0) {
      // if quantity is 0, remove item from local storage
      const updatedCart = cart.filter((item) => item.id !== itemId);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      // Find and update cart item in local storage
      const updatedCart = cart.map((item) =>
        item.id === itemId ? { ...item, quantity: updatedQuantity } : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  useEffect(() => {
    updateLocalStorage(id, quantity);
  }, [quantity]);

  return (
    <li className="cart__list-item">
      <img
        className="cart__list-item__image"
        src={`http://localhost:5000/${image}`}
      />
      <div className="cart__list-item-container">
        <h1 className="cart__list-item-text">{name}</h1>
        <h2 className="cart__list-item-text">{priceText}</h2>
        <div className="cart__list-item-price-container">
          <QuantityCounter
            quantity={quantity}
            setQuantity={setQuantity}
            minAmmount={0}
          />
        </div>
      </div>
    </li>
  );
};

export default CartListItem;
