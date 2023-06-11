import React from "react";

export function Card({
  item,
  isLoggedIn,
  setModalOpen,
  setCartItems,
  cartItems,
}) {
  const [hoveredCourse, setHoveredCourse] = React.useState(null);
  const [showRemoveButton, setShowRemovedButton] = React.useState(false);

  const handleMouseEnter = (courseId) => {
    setHoveredCourse(courseId);

    const selectedItem = cartItems.find((item) => item.id === courseId);

    if (selectedItem) {
      setShowRemovedButton(true);
    }
  };

  const handleMouseLeave = () => {
    setHoveredCourse(null);
  };

  const handleAddCourse = (courseId) => {
    const selectedItem = cartItems.find((item) => item.id === courseId);

    if (selectedItem) {
      setCartItems((prevItems) =>
        prevItems.map((item) => {
          if (item.id === courseId) {
            return { ...item, ...{ quantity: item.quantity + 1 } };
          }
          return item;
        })
      );
    } else {
      const newitem = {
        id: item.id,
        name: item.name,
        quantity: 1,
      };

      setCartItems((prevstate) => {
        return [...prevstate, newitem];
      });
    }
    setShowRemovedButton(true);

    if (isLoggedIn) {
      return;
    }

    setModalOpen(true);
  };

  const handleRemoveCourse = (courseId) => {
    const selectedItem = cartItems.find((item) => item.id === courseId);

    if (selectedItem.quantity > 1) {
      setCartItems((prevItems) =>
        prevItems.map((item) => {
          if (item.id === courseId && item.quantity > 1) {
            return { ...item, ...{ quantity: item.quantity - 1 } };
          }
          return item;
        })
      );
    } else {
      setCartItems((prevItems) =>
        prevItems.filter((item) => item.id !== courseId)
      );
      setShowRemovedButton(false);
    }
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
        <div className="h-12">
          {hoveredCourse === item.id && (
            <>
              <button
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                onClick={() => handleAddCourse(item.id)}
              >
                Add
              </button>
              {isLoggedIn && showRemoveButton && (
                <button
                  className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 ml-5 border-b-4 border-red-700 hover:border-red-500 rounded"
                  onClick={() => handleRemoveCourse(item.id)}
                >
                  Remove
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
