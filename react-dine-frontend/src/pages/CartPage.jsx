import "./CartPage.css";
import { useCart } from "../components/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import CartListItem from "../components/CartListItem";
import CheckoutForm from "../components/CheckoutForm";
import OrderSummary from "../components/OrderSummary";

const CartPage = () => {
  const { cartItems, fetching, fetchError, totalCost } = useCart();

  let context = (
    <>
      <h1 className="cartPage__empty">Cart is empty</h1>
      <OrderSummary />
    </>
  );
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
        <OrderSummary />
      </div>
    );
  }

  return context;
};

export default CartPage;
