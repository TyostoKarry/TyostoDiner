import "./MenuListItem.css";
import { useState } from "react";
import QuantityCounter from "./QuantityCounter";

const MenuListItem = ({ id, name, image, description, price }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    const item = {
      id: id,
      quantity: quantity,
    };

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItemIndex = cart.findIndex((cartItem) => cartItem.id === id);

    if (existingItemIndex !== -1) {
      // Item exists. Update item
      const updatedCart = cart.map((item) =>
        item.id === id ? { ...item, quantity: quantity } : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      // Item doesn't exist. Add new item
      cart.push(item);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

  return (
    <li className="menu__list-item">
      <img
        className="menu__list-item__image"
        src={`http://localhost:5000/${image}`}
      />
      <div className="menu__list-item__info-container">
        <h1 className="menu__list-item__h1">{name}</h1>
        <h3 className="menu__list-item__h3">{description}</h3>
        <h3 className="menu__list-item__h3">Price: {price}€</h3>
      </div>
      <div className="menu__list-item__add-to-cart-container">
        <QuantityCounter
          quantity={quantity}
          setQuantity={setQuantity}
          minAmmount={1}
        />
        <button
          className="menu__list-item__add-to-cart-button"
          onClick={handleAddToCart}
        >
          Add to cart
        </button>
      </div>
    </li>
  );
};

export default MenuListItem;
