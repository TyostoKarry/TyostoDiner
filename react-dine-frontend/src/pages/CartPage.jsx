import "./CartPage.css";

import { useState, useEffect } from "react";
import CartList from "../components/CartList";
import { useCart } from "../components/CartContext";

const CartPage = () => {
  const { cart, cartItems, fetchCartItems } = useCart();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchCartItems()
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  }, [fetchCartItems, cart]);

  let context = <h1 className="centeredStyle">Cart is empty</h1>;
  if (loading) {
    context = <h1 className="centeredStyle">Loading...</h1>;
  }
  if (cartItems.length != 0) {
    context = <CartList />;
  }

  return context;
};

export default CartPage;
