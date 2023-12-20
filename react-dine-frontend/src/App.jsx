import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DinerMenu from "./pages/DinerMenu";
import CartPage from "./pages/CartPage";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <DinerMenu /> },
      { path: "/cart", element: <CartPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
