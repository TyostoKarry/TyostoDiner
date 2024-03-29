// Manages cart
import {
  createContext,
  useContext,
  useEffect,
  useCallback,
  useState,
  useMemo,
} from "react";
import axios from "axios";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Cart items as in localStorage and how items are sent in orders. Only includes id and quantity
  const [cart, setCart] = useState([]);
  // Full info of cart items including id, name, price, description, image and quantity
  const [cartItems, setCartItems] = useState([]);
  // Info about the orderer to display on OrderSummary
  const [ordererInfo, setOrdererInfo] = useState({});
  // For setting the state on CartPage
  const [fetching, setFetching] = useState(false);
  const [fetchError, setFetchError] = useState(false);
  // Used to open the OrderSummary modal
  const [modalIsOpen, setIsOpen] = useState(false);

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
    setFetchError(false);
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
      setFetchError(true);
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

  const clearCart = () => {
    const updatedCart = [];
    updateCart(updatedCart);
    setOrdererInfo({});
  };

  // Calculate total cost every time cartItems change
  const totalCost = useMemo(() => {
    return cartItems.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  }, [cartItems]);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        cartItems,
        ordererInfo,
        fetching,
        fetchError,
        modalIsOpen,
        totalCost,
        setOrdererInfo,
        fetchCartItems,
        addToCart,
        modifyCart,
        removeFromCart,
        clearCart,
        openModal,
        closeModal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
