import "./MenuListItem.css";
import { useState } from "react";

const MenuListItem = ({ name, image, description, price }) => {
  const [count, setCount] = useState(1);

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddition = () => {
    setCount(count + 1);
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
          className="menu__list-item__add-to-cart-button"
          onClick={handleDecrement}
        >
          ➖
        </button>
        <h1 className="menu__list-item__add-to-cart-h1">{count}</h1>
        <button
          className="menu__list-item__add-to-cart-button"
          onClick={handleAddition}
        >
          ➕
        </button>
        <h2 className="menu__list-item__add-to-cart-h2">Add to cart</h2>
      </div>
    </li>
  );
};

export default MenuListItem;
