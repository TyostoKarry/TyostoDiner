import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import DinerMenu from "./pages/DinerMenu";
import RootLayout from "./pages/RootLayout";
import FoodItemDetails from "./pages/FoodItemDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <DinerMenu /> },
      { path: "/:menuItemID", element: <FoodItemDetails /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
