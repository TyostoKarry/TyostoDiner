import "./MenuListItem.css";
import { Link } from "react-router-dom";

const MenuListItem = ({ name, image, description, price }) => {
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
        <h1 className="menu__list-item__add-to-cart-h1">➖</h1>
        <h1 className="menu__list-item__add-to-cart-h1">1</h1>
        <h1 className="menu__list-item__add-to-cart-h1">➕</h1>
        <h2 className="menu__list-item__add-to-cart-h2">Add to cart</h2>
      </div>
    </li>
  );
};

export default MenuListItem;
