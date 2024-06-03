import React from "react";
import { AddRemove } from "./AddRemove";

export function Index({
  item,
  isLoggedIn,
  setModalOpen,
  setCartItems,
  cartItems,
}) {
  const [hoveredCourse, setHoveredCourse] = React.useState(null);
  const [showRemoveButton, setShowRemovedButton] = React.useState(false);

  const handleMouseEnter = (courseId) => {
    const selectedItem = cartItems.find((item) => item.id === courseId);

    setHoveredCourse(courseId);

    if (selectedItem) {
      // uses to show the remove button when hovered course is in the cart
      setShowRemovedButton(true);
    }
  };

  const handleMouseLeave = () => {
    // uses to remove the add button when we move cursor from the course
    setHoveredCourse(null);
  };

  return (
    <div
      className="flex flex-row border-b-2 border-gray-600 my-5 bg-slate-950"
      onMouseEnter={() => handleMouseEnter(item.id)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-1/4 p-10 text-center">
        <img
          className="inline-block mb-5 w-3/4 mx-auto"
          src={item.image}
          alt="alt123"
        />
      </div>
      <div className="w-3/4 p-10">
        <h3 className="text-4xl font-extrabold mb-2">{item.name}</h3>
        <h4 className="text-2xl mb-2">{item.description}</h4>
        <p className="font-semibold text-sm mb-2">{item.author}</p>
        <div className="flex flex-row">
          <p className="font-extralight mr-5">
            Total Duration: <b>{item.duration}</b>
          </p>
          <p className="font-extralight mb-5">
            Published on: <b>{item.publishDate}</b>
          </p>
        </div>
        <AddRemove
          item={item}
          hoveredCourse={hoveredCourse}
          isLoggedIn={isLoggedIn}
          showRemoveButton={showRemoveButton}
          cartItems={cartItems}
          setCartItems={setCartItems}
          setShowRemovedButton={setShowRemovedButton}
          setModalOpen={setModalOpen}
        />
      </div>
    </div>
  );
}
