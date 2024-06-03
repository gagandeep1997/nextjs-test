import React from "react";
import { Index } from "../Card/Index";
import { Modal } from "../Shared/Modal";
import { Cart } from "../Cart/Cart";
import { Notification } from "../Shared/Notification";

export function List({ Courses }) {
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
    <Index
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
        content="Login"
      />
      {isLoggedIn && (
        <>
          <Notification
            closePopup={closePopup}
            message="Successfully Logged In"
          />
          <Cart cartItems={cartItems} />
        </>
      )}
    </>
  );
}
