import axios from "axios";

import "./DinerMenu.css";
import { useState, useCallback, useEffect } from "react";
import MenuList from "../components/MenuList";

const DinerMenu = () => {
  const [menuItems, setMenuItems] = useState([]);

  const fetchMenuItems = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/dishes");
      const data = await response.data;
      setMenuItems(data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchMenuItems();
  }, [fetchMenuItems]);

  return (
    <div>
      <MenuList menuItems={menuItems} />
    </div>
  );
};

export default DinerMenu;
