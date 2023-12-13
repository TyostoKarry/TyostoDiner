import axios from "axios";

import "./CartPage.css";
import { useState, useCallback, useEffect } from "react";
import CartList from "../components/CartList";
import { useCart } from "../components/CartContext";

const CartPage = () => {
  const { cart } = useCart();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCartItems = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:5000/api/dishes");
      const data = await response.data;

      // Get cart items from localStorage map item id:s to quantitys
      const cartItemMap = cart.reduce((acc, item) => {
        acc[item.id] = item.quantity;
        return acc;
      }, {});

      // Filter fetched data to only have cart items and add quantity to array
      const filteredItems = data
        .filter((item) => cartItemMap.hasOwnProperty(item.id))
        .map((item) => ({ ...item, quantity: cartItemMap[item.id] }));

      setCartItems(filteredItems);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  }, [cart]);

  useEffect(() => {
    fetchCartItems();
  }, [fetchCartItems, cart]);

  let context = <h1 className="centeredStyle">Cart is empty</h1>;
  if (loading) {
    context = <h1 className="centeredStyle">Loading...</h1>;
  }
  if (cartItems.length != 0) {
    context = <CartList cartItems={cartItems} />;
  }

  return context;
};

export default CartPage;
