import "./QuantityCounter.css";

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
          fromCart && quantity == 1
            ? "quantity__button-remove"
            : "quantity__button"
        }
        onClick={handleDecrement}
        disabled={quantity === minAmmount}
        style={quantity === minAmmount ? { pointerEvents: "none" } : {}}
      >
        ➖
      </button>
      <h1 className={fromCart ? "quantity__h1-cart" : "quantity__h1-menu"}>
        {quantity}
      </h1>
      <button
        className="quantity__button"
        onClick={handleAddition}
        disabled={quantity === 99}
        style={quantity === 99 ? { pointerEvents: "none" } : {}}
      >
        ➕
      </button>
    </>
  );
};

export default QuantityCounter;
