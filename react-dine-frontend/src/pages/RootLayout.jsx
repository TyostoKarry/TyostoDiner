import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import { CartProvider } from "../components/CartContext";

const RootLayout = () => {
  return (
    <CartProvider>
      <NavigationBar />
      <Outlet />
    </CartProvider>
  );
};

export default RootLayout;
