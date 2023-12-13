import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const updateCart = (updatedCart) => {
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const addToCart = (modifiedItem) => {
    const updatedCart = [...cart, modifiedItem];
    updateCart(updatedCart);
  };

  const modifyCart = (modifiedItem) => {
    const updatedCart = cart.map((item) =>
      item.id === modifiedItem.id
        ? { ...item, quantity: modifiedItem.quantity }
        : item
    );
    updateCart(updatedCart);
  };

  const removeFromCart = (modifiedItem) => {
    const updatedCart = cart.filter((item) => item.id !== modifiedItem.id);
    updateCart(updatedCart);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        modifyCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
