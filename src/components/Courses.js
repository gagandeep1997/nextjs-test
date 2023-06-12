import React from "react";
import { Card } from "./Card/Card";
import { Modal } from "./Modal";
import { Cart } from "./Cart/Cart";
import { LoggedInPopup } from "./LoggedInPopup";

export function Courses({ Courses }) {
  const [modalOpen, setModalOpen] = React.useState(false); // open and closes the login modal based on the state
  const [isLoggedIn, setIsLoggedIn] = React.useState(false); // uses to show login successful popup
  const [cartItems, setCartItems] = React.useState([]); // uses to show current cart items on the ui and update cart items

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const closePopup = () => {
    // hides the login succesfull popup on click close button
    document.getElementsByClassName(
      "login-successfull-popup"
    )[0].style.display = "none";
  };

  const listitems = Courses.map(
    (
      value // takes an array of objects and return ui for single course
    ) => (
      <Card
        key={value.id}
        item={value}
        isLoggedIn={isLoggedIn}
        setModalOpen={setModalOpen}
        setCartItems={setCartItems}
        cartItems={cartItems}
      />
    )
  );
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
