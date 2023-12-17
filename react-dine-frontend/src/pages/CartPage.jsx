import "./CartPage.css";
import { useMemo } from "react";
import { useCart } from "../components/CartContext";
import CartListItem from "../components/CartListItem";
import CheckoutForm from "../components/CheckoutForm";

const CartPage = () => {
  const { cartItems, fetching } = useCart();

  // Calculate total cost every time cartItems change
  const totalCost = useMemo(() => {
    return cartItems.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  }, [cartItems]);

  let context = <h1 className="dinerMenu__empty">Cart is empty</h1>;
  if (fetching) {
    context = <h1 className="dinerMenu__loading">Loading...</h1>;
  }
  if (cartItems.length != 0) {
    context = (
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
  }

  return context;
};

export default CartPage;
