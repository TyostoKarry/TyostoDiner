import axios from "axios";

import "./DinerMenu.css";
import { useState, useCallback, useEffect } from "react";
import MenuList from "../components/MenuList";

const DinerMenu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMenuItems = useCallback(async () => {
    try {
      setLoading[true];
      const response = await axios.get("http://localhost:5000/api/dishes");
      const data = await response.data;
      setMenuItems(data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchMenuItems();
  }, [fetchMenuItems]);

  let context = <h1 className="dinerMenu__loading">Loading...</h1>;
  if (!loading) {
    context = (
      <div>
        <MenuList menuItems={menuItems} />
      </div>
    );
  }

  return context;
};

export default DinerMenu;
