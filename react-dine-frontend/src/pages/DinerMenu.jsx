import axios from "axios";

import "./DinerMenu.css";
import MenuListItem from "../components/MenuListItem";
import { useState, useCallback, useEffect } from "react";

const DinerMenu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMenuItems = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/api/dishes");
      const data = await response.data;
      setMenuItems(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMenuItems();
  }, [fetchMenuItems]);

  let context = <h1 className="dinerMenu__loading">Loading...</h1>;
  if (!loading) {
    context = (
      <div className="menu__list">
        {menuItems?.map((item) => (
          <MenuListItem
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    );
  }

  return context;
};

export default DinerMenu;
