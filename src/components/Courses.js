import React from "react";
import { Card } from "./Card/Card";
import { Modal } from "./Modal";
import { Cart } from "./Cart/Cart";
import { LoggedInPopup } from "./LoggedInPopup";

export function Courses({ Courses }) {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const closePopup = () => {
    document.getElementsByClassName(
      "login-successfull-popup"
    )[0].style.display = "none";
  };

  const listitems = Courses.map((value) => (
    <Card
      key={value.id}
      item={value}
      isLoggedIn={isLoggedIn}
      setModalOpen={setModalOpen}
      setCartItems={setCartItems}
      cartItems={cartItems}
    />
  ));
  return (
    <>
      <div className="ml-5 container flex flex-col">{listitems}</div>
      <Modal
        isOpen={modalOpen}
        onClose={handleModalClose}
        setIsLoggedIn={setIsLoggedIn}
      />
      {isLoggedIn && (
        <>
          <LoggedInPopup closePopup={closePopup} />
          <Cart cartItems={cartItems} />
        </>
      )}
    </>
  );
}
