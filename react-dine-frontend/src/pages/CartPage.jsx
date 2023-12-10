import axios from "axios";

import "./CartPage.css";
import { useState, useCallback, useEffect } from "react";
import CartList from "../components/CartList";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  const fetchCartItems = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/dishes");
      const data = await response.data;

      const cartData = JSON.parse(localStorage.getItem("cart")) || [];
      const cartItemMap = cartData.reduce((acc, item) => {
        acc[item.id] = item.quantity;
        return acc;
      }, {});

      const filteredItems = data
        .filter((item) => cartItemMap.hasOwnProperty(item.id))
        .map((item) => ({ ...item, quantity: cartItemMap[item.id] }));

      setCartItems(filteredItems);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchCartItems();
  }, [fetchCartItems]);

  let context = <h1 className="centeredStyle">Cart is empty</h1>;
  if (cartItems.length != 0) {
    //context = <h1 className="centeredStyle">Cart has items</h1>;
    context = <CartList cartItems={cartItems} />;
  }

  return context;
};

export default CartPage;
