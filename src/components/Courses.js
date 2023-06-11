import React from "react";
import { Card } from "./Card";
import { Modal } from "./Modal";
import { Cart } from "./Cart";

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
      id={value.id}
      name={value.name}
      description={value.description}
      author={value.author}
      publishDate={value.publishDate}
      duration={value.duration}
      image={value.image}
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
          <div className="login-successfull-popup fixed inset-0 flex items-center justify-center bg-black/[.80] z-10">
            <div className="bg-white w-100 p-8 rounded shadow-md text-center">
              <h2 className="text-xl text-black font-bold mb-3">
                Successfully Logged In
              </h2>
              <button
                className="mt-6 bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded"
                onClick={closePopup}
              >
                Close
              </button>
            </div>
          </div>
          <Cart cartItems={cartItems} />
        </>
      )}
    </>
  );
}
