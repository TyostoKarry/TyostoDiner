import "./CartListItem.css";
import { useState, useEffect } from "react";
import { useCart } from "./CartContext";
import QuantityCounter from "./QuantityCounter";

const CartListItem = ({ item, startQuantity }) => {
  const { modifyCart, removeFromCart } = useCart();
  const [quantity, setQuantity] = useState(startQuantity);

  let priceText = item.price + "€";
  if (quantity > 1) {
    priceText = quantity + " X " + item.price + "€";
  }

  const updateLocalStorage = () => {
    if (quantity === 0) {
      removeFromCart({ id: item.id, quantity: quantity });
    } else {
      modifyCart({ id: item.id, quantity: quantity });
    }
  };

  useEffect(() => {
    updateLocalStorage();
  }, [quantity]);

  return (
    <li className="cart__list-item">
      <img
        className="cart__list-item__image"
        src={`http://localhost:5000/${item.image}`}
      />
      <div className="cart__list-item-container">
        <h1 className="cart__list-item-text">{item.name}</h1>
        <h2 className="cart__list-item-text">{priceText}</h2>
        <div className="cart__list-item-price-container">
          <QuantityCounter
            quantity={quantity}
            setQuantity={setQuantity}
            minAmmount={0}
            fromCart={true}
          />
        </div>
      </div>
    </li>
  );
};

export default CartListItem;
