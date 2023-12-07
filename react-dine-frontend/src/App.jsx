import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import DinerMenu from "./pages/DinerMenu";
import RootLayout from "./pages/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ index: true, element: <DinerMenu /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
