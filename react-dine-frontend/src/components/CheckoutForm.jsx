import "./CheckoutForm.css";

import { useState } from "react";

const CheckoutForm = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setenteredEmail] = useState("");
  const [enteredStreet, setEnteredStreet] = useState("");
  const [enteredPostalCode, setEnteredPostalCode] = useState("");
  const [enteredCity, setEnteredCity] = useState("");

  const nameAddedHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailAddedHandler = (event) => {
    setenteredEmail(event.target.value);
  };
  const streetAddedHandler = (event) => {
    setEnteredStreet(event.target.value);
  };
  const postalCodeAddedHandler = (event) => {
    setEnteredPostalCode(event.target.value);
  };
  const cityAddedHandler = (event) => {
    setEnteredCity(event.target.value);
  };

  const checkoutHandler = () => {};

  return (
    <form onSubmit={checkoutHandler} className="checkout__form">
      <div className="checkout__form-input-container">
        <p className="checkout__form-info">Name: </p>
        <input
          type="text"
          onChange={nameAddedHandler}
          value={enteredName}
          className="checkout__form-input"
        />
      </div>
      <div className="checkout__form-input-container">
        <p className="checkout__form-info">Email: </p>
        <input
          type="email"
          onChange={emailAddedHandler}
          value={enteredEmail}
          className="checkout__form-input"
        />
      </div>
      <div className="checkout__form-input-container">
        <p className="checkout__form-info">Street: </p>
        <input
          type="text"
          onChange={streetAddedHandler}
          value={enteredStreet}
          className="checkout__form-input"
        />
      </div>
      <div className="checkout__form-input-container">
        <p className="checkout__form-info">postal-code: </p>
        <input
          type="text"
          onChange={postalCodeAddedHandler}
          value={enteredPostalCode}
          className="checkout__form-input"
        />
      </div>
      <div className="checkout__form-input-container">
        <p className="checkout__form-info">city: </p>
        <input
          type="text"
          onChange={cityAddedHandler}
          value={enteredCity}
          className="checkout__form-input"
        />
      </div>
      <button type="submit" className="checkout__form-button">
        Order
      </button>
    </form>
  );
};

export default CheckoutForm;
