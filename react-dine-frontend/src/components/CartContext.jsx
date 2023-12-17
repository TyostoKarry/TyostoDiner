// Manages cart
import {
  createContext,
  useContext,
  useEffect,
  useCallback,
  useState,
} from "react";
import axios from "axios";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Cart items as in localStorage and how items are sent in orders. Only includes id and quantity
  const [cart, setCart] = useState([]);
  // Full info of cart items including id, name, price, description, image and quantity
  const [cartItems, setCartItems] = useState([]);
  const [fetching, setFetching] = useState(false);

  // Sets up cart and cartItems on page load
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
    fetchCartItems(storedCart);
  }, []);

  const updateCart = (updatedCart) => {
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
    fetchCartItems(updatedCart);
  };

  const fetchCartItems = useCallback(async (cart) => {
    setFetching(true);
    try {
      const response = await axios.get("http://localhost:5000/api/dishes");
      const data = await response.data;

      // Get cart items from localStorage, map item id:s to quantitys
      const cartItemMap = cart.reduce((acc, item) => {
        acc[item.id] = item.quantity;
        return acc;
      }, {});

      // Filter fetched data to only have cart items and add quantity to array
      const filteredItems = data
        .filter((item) => cartItemMap.hasOwnProperty(item.id))
        .map((item) => ({ ...item, quantity: cartItemMap[item.id] }));

      setCartItems(filteredItems);
      setFetching(false);
    } catch (error) {
      console.error(error);
      setFetching(false);
    }
  }, []);

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
        cartItems,
        fetching,
        fetchCartItems,
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
