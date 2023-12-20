import "./ErrorPage.css";
import { Link } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";

const ErrorPage = () => {
  return (
    <>
      <NavigationBar />
      <div className="ErrorPage__container">
        <h1 className="ErrorPage__h1">Oops, something went wrong!</h1>
        <h2 className="ErrorPage__h2 ">
          Could not find thr page you were looking for!
        </h2>
        <Link className="ErrorPage__button" to={"/"}>
          Go to Menu
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
