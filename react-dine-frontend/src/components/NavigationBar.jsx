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
          <span className="navBar__button-text">Menu</span>
        </Link>
        <Link className="navBar__button" to={"/cart"}>
          <FontAwesomeIcon icon={faCartShopping} />
          <span className="navBar__button-text">Cart</span>
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
