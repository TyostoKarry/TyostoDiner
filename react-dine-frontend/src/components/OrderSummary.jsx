import "./OrderSummary.css";
import Modal from "react-modal";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../components/CartContext";

const OrderSummary = () => {
  const {
    cartItems,
    ordererInfo,
    modalIsOpen,
    totalCost,
    clearCart,
    closeModal,
  } = useCart();

  const onClose = () => {
    clearCart();
    closeModal();
  };

  // Disables background scrolling while modal on screen
  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [modalIsOpen]);

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={onClose}
      contentLabel="Summary of the order"
      className="modal__Content"
    >
      <h1 className="modal__h1">Order Successfull</h1>
      <h2 className="modal__h2">Order Summary</h2>
      <div className="modal__scrollable">
        {cartItems?.map((item, index) => (
          <div key={index} className="modal__foodItem-container">
            <h3 className="modal__h3">
              {item.quantity} X {item.name}
            </h3>
            <h4 className="modal__h4">
              {(item.quantity * item.price).toFixed(2)}€
            </h4>
          </div>
        ))}
      </div>
      <h2 className="modal__h2">Total cost: {totalCost.toFixed(2)}€</h2>
      <h2 className="modal__orderer-details">Orderer details</h2>
      <div className="modal__ordererInfo-container">
        <p className="modal__p">Name:</p>
        <h3 className="modal__h3">{ordererInfo.name}</h3>
      </div>
      <div className="modal__ordererInfo-container">
        <p className="modal__p">email:</p>
        <h3 className="modal__h3">{ordererInfo.email}</h3>
      </div>
      <div className="modal__ordererInfo-container">
        <p className="modal__p">street:</p>
        <h3 className="modal__h3">{ordererInfo.street}</h3>
      </div>
      <div className="modal__pCode-city-container">
        <div className="modal__ordererInfo">
          <p className="modal__p">Postal-code:</p>
          <h3 className="modal__h3">{ordererInfo.postalCode}</h3>
        </div>
        <div className="modal__ordererInfo">
          <p className="modal__p">City:</p>
          <h3 className="modal__h3">{ordererInfo.city}</h3>
        </div>
      </div>
      <Link to={"/"}>
        <button className="modal__button" onClick={onClose}>
          Return to Menu
        </button>
      </Link>
    </Modal>
  );
};

export default OrderSummary;
