import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import DinerMenu from "./pages/DinerMenu";
import CheckoutPage from "./pages/CheckoutPage";
import RootLayout from "./pages/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <DinerMenu /> },
      { path: "/checkout", element: <CheckoutPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
