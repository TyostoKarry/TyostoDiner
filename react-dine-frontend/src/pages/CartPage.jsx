import "./CartPage.css";

import CartList from "../components/CartList";
import { useCart } from "../components/CartContext";

const CartPage = () => {
  const { cartItems, fetching } = useCart();

  let context = <h1 className="centeredStyle">Cart is empty</h1>;
  if (fetching) {
    context = <h1 className="centeredStyle">Loading...</h1>;
  }
  if (cartItems.length != 0) {
    context = <CartList />;
  }

  return context;
};

export default CartPage;
