import "./MenuListItem.css";
import { Link } from "react-router-dom";

const MenuListItem = ({ menuItemId, name, image }) => {
  return (
    <li className="menu__list-item">
      <Link key={menuItemId} to={`/${menuItemId}`}>
        <div className="hoverEffect" />
        <div className="menu__list-item__image-container">
          <img
            className="menu__list-item__image"
            src={`http://localhost:5000/${image}`}
          />
        </div>
        <div className="menu__list-item__h2-container">
          <h2 className="menu__list-item__h2">{name}</h2>
        </div>
      </Link>
    </li>
  );
};

export default MenuListItem;
