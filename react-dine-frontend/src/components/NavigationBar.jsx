import { Link } from "react-router-dom";

import "./NavigationBar.css";

const NavigationBar = () => {
  return (
    <div className="Navigation-bar__container">
      <Link className="navBar__button" to={"/"}>
        Menu
      </Link>
      <img src={"./src/assets/TyostoDinerTextLogo.png"} />
      <Link className="navBar__button" to={"/cart"}>
        Cart
      </Link>
    </div>
  );
};

export default NavigationBar;
