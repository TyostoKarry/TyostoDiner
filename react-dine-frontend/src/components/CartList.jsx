import "./CartList.css";

import { useCart } from "./CartContext";
import CartListItem from "./CartListItem";
import CheckoutForm from "./CheckoutForm";
import { useMemo } from "react";

const CartList = () => {
  const { cartItems } = useCart();

  // Calculate total cost
  const totalCost = useMemo(() => {
    return cartItems.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  }, [cartItems]);

  return (
    <div className="cart__list-container">
      <div className="cart__list">
        <h1 className="cart__list-h1">Items on cart</h1>
        {cartItems?.map((item) => (
          <CartListItem
            key={item.id}
            item={item}
            startQuantity={item.quantity}
          />
        ))}
        <h1 className="cart__list-h1">Total: {totalCost.toFixed(2)}€</h1>
        <CheckoutForm />
      </div>
    </div>
  );
};

export default CartList;
