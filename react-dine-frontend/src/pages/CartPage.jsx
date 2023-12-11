import axios from "axios";

import "./CartPage.css";
import { useState, useCallback, useEffect } from "react";
import CartList from "../components/CartList";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  // For updating total cost when button is clicked
  const [quantityChange, setQuantityChange] = useState(false);

  const fetchCartItems = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/dishes");
      const data = await response.data;

      // Get cart items from localStorage map item id:s to quantitys
      const cartData = JSON.parse(localStorage.getItem("cart")) || [];
      const cartItemMap = cartData.reduce((acc, item) => {
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
  }, []);

  useEffect(() => {
    fetchCartItems();
  }, [fetchCartItems, quantityChange]);

  let context = <h1 className="centeredStyle">Cart is empty</h1>;
  if (cartItems.length != 0) {
    context = (
      <CartList
        cartItems={cartItems}
        quantityChange={quantityChange}
        setQuantityChange={setQuantityChange}
      />
    );
  }

  return context;
};

export default CartPage;
