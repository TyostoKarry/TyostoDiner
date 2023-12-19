import "./NavigationBar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faCartShopping } from "@fortawesome/free-solid-svg-icons";

const NavigationBar = () => {
  return (
    <>
      <div className="Navigation-bar__container">
        <Link className="navBar__button" to={"/"}>
          <FontAwesomeIcon icon={faUtensils} />
          <div className="navBar__button-text-container">
            <span>Menu</span>
          </div>
        </Link>
        <Link className="navBar__button" to={"/cart"}>
          <FontAwesomeIcon icon={faCartShopping} />
          <div className="navBar__button-text-container">
            <span>Cart</span>
          </div>
        </Link>
      </div>
      <img
        src={"./src/assets/TyostoDinerTextLogo.png"}
        className="navBar__img"
      />
    </>
  );
};

export default NavigationBar;
