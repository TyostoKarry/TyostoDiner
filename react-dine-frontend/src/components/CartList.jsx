import "./CartList.css";

import CartListItem from "./CartListItem";

const CartList = ({ cartItems }) => {
  // Calculate total cost
  const totalCost = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <>
      <h1 className="cart__list-h1">Items on cart</h1>
      <div className="cart__list">
        {cartItems?.map((item) => (
          <CartListItem
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
      </div>
      <h1 className="cart__list-h1">Total: {totalCost.toFixed(2)}€</h1>
    </>
  );
};

export default CartList;
