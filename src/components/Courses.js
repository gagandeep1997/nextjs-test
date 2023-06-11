import React from "react";
import { Card } from "./Card";
import { Modal } from "./Modal";

export function Courses({ Courses }) {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

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
        <div className="login-successfull-popup fixed inset-0 flex items-center justify-center">
          <div className="bg-white w-64 p-8 rounded shadow-md text-center">
            <h2 className="text-xl text-black font-bold mb-3">
              Successfully Logged In
            </h2>
            <button
              className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
