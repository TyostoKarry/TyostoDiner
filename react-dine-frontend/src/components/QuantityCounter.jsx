import "./QuantityCounter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const QuantityCounter = ({ quantity, setQuantity, minAmmount, fromCart }) => {
  const handleDecrement = () => {
    setQuantity(quantity - 1);
  };

  const handleAddition = () => {
    setQuantity(quantity + 1);
  };

  return (
    <>
      <button
        className={
          fromCart
            ? quantity == 1
              ? "quantity__button-remove"
              : "quantity__button-cart"
            : "quantity__button-menu"
        }
        onClick={handleDecrement}
        disabled={quantity === minAmmount}
        style={quantity === minAmmount ? { pointerEvents: "none" } : {}}
      >
        {fromCart && quantity === 1 ? (
          <FontAwesomeIcon icon={faTrashCan} />
        ) : (
          <FontAwesomeIcon
            icon={faMinus}
            style={quantity === minAmmount ? { color: "rgb(40, 40, 40)" } : {}}
          />
        )}
      </button>
      <h1 className={fromCart ? "quantity__h1-cart" : "quantity__h1-menu"}>
        {quantity}
      </h1>
      <button
        className={fromCart ? "quantity__button-cart" : "quantity__button-menu"}
        onClick={handleAddition}
        disabled={quantity === 99}
        style={quantity === 99 ? { pointerEvents: "none" } : {}}
      >
        <FontAwesomeIcon
          icon={faPlus}
          style={quantity === 99 ? { color: "rgb(40, 40, 40)" } : {}}
        />
      </button>
    </>
  );
};

export default QuantityCounter;
