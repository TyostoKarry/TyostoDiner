import "./FoodItemDetails.css";

import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useState, useCallback, useEffect } from "react";

const MenuItemDetails = () => {
  const params = useParams();
  const [menuItem, setMenuItem] = useState([]);

  const fetchMenuItems = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/dishes");
      const data = await response.data;
      const filteredData = data.find((item) => item.id === params.menuItemID);
      console.log(filteredData);
      setMenuItem(filteredData);
    } catch {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchMenuItems();
  }, [fetchMenuItems]);

  return (
    <div className="foodItemDetails__columnContainer">
      <h1 className="foodItemDetails__h1">{menuItem.name}</h1>
      <div className="foodItemDetails__rowContainer">
        <img
          className="foodItemDetails__image"
          src={`http://localhost:5000/${menuItem.image}`}
        />
        <div className="foodItemDetails__columnContainer">
          <h2 className="foodItemDetails__h2-description">
            {menuItem.description}
          </h2>
          <h2 className="foodItemDetails__h2-price">
            Price: {menuItem.price}€
          </h2>
          <div className="foodItemDetails__rowContainer foodItemDetails__spaceBetween">
            <Link className="button">
              <p>Add to cart</p>
            </Link>
            <Link className="button" to={"/"}>
              <p>Back to menu</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItemDetails;
