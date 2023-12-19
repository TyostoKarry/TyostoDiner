import "./DinerMenu.css";
import axios from "axios";
import { useState, useCallback, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import MenuListItem from "../components/MenuListItem";

const DinerMenu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(false);

  const fetchMenuItems = useCallback(async () => {
    setFetchError(false);
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/api/dishes");
      const data = await response.data;
      setMenuItems(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
      setFetchError(true);
    }
  }, []);

  useEffect(() => {
    fetchMenuItems();
  }, [fetchMenuItems]);

  let context = (
    <div className="dinerMenu__loading">
      <FontAwesomeIcon icon={faSpinner} spin />
      <h1>Loading...</h1>
    </div>
  );
  if (fetchError) {
    context = (
      <h1 className="dinerMenu__fetchError">Error fetching the API!</h1>
    );
  }
  if (!loading && !fetchError) {
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
