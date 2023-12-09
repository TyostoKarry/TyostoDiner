import "./MenuListItem.css";
import { useState } from "react";

const MenuListItem = ({ id, name, image, description, price }) => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddition = () => {
    if (quantity < 99) {
      setQuantity(quantity + 1);
    }
  };

  const handleAddToCart = () => {
    const item = {
      id: id,
      quantity: quantity,
    };

    console.log("Added item", item);
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
        <button
          className="menu__list-item__quantity-button"
          onClick={handleDecrement}
        >
          ➖
        </button>
        <h1 className="menu__list-item__add-to-cart-h1">{quantity}</h1>
        <button
          className="menu__list-item__quantity-button"
          onClick={handleAddition}
        >
          ➕
        </button>
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
