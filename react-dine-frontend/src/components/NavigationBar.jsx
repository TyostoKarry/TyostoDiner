import { Link } from "react-router-dom";

import "./NavigationBar.css";

const NavigationBar = () => {
  return (
    <div className="Navigation-bar__container">
      <Link className="navBar__button" to={"/"}>
        Menu
      </Link>
      <h1 className="navBar__title">TyöstöDiner</h1>
      <Link className="navBar__button" to={"/cart"}>
        Cart
      </Link>
    </div>
  );
};

export default NavigationBar;
