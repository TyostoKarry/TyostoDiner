import "./CartListItem.css";

const CartListItem = ({ id, name, image, price, quantity }) => {
  let priceText = price + "€";
  if (quantity > 1) {
    priceText = quantity + " X " + price + "€";
  }

  return (
    <li className="cart__list-item">
      <img
        className="cart__list-item__image"
        src={`http://localhost:5000/${image}`}
      />
      <div className="cart__list-item-container">
        <h1 className="cart__list-item-text">{name}</h1>
        <h2 className="cart__list-item-text">{priceText}</h2>
      </div>
    </li>
  );
};

export default CartListItem;
