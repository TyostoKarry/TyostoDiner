import "./CartList.css";

import CartListItem from "./CartListItem";
import CheckoutForm from "./CheckoutForm";
import { useMemo } from "react";

const CartList = ({ cartItems }) => {
  // Calculate total cost
  const totalCost = useMemo(() => {
    return cartItems.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  }, [cartItems]);

  return (
    <div className="cart__list">
      <h1 className="cart__list-h1">Items on cart</h1>
      {cartItems?.map((item) => (
        <CartListItem
          key={item.id}
          id={item.id}
          name={item.name}
          image={item.image}
          price={item.price}
          startQuantity={item.quantity}
        />
      ))}
      <h1 className="cart__list-h1">Total: {totalCost.toFixed(2)}€</h1>
      <CheckoutForm />
    </div>
  );
};

export default CartList;
