import "./CartPage.css";
import { useMemo } from "react";
import { useCart } from "../components/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import CartListItem from "../components/CartListItem";
import CheckoutForm from "../components/CheckoutForm";

const CartPage = () => {
  const { cartItems, fetching, fetchError } = useCart();

  // Calculate total cost every time cartItems change
  const totalCost = useMemo(() => {
    return cartItems.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  }, [cartItems]);

  let context = <h1 className="cartPage__empty">Cart is empty</h1>;
  if (fetching) {
    context = (
      <div className="cartPage__loading">
        <FontAwesomeIcon icon={faSpinner} spin />
        <h1>Loading...</h1>
      </div>
    );
  }
  if (fetchError) {
    context = <h1 className="cartPage__fetchError">Error fetching the API!</h1>;
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
