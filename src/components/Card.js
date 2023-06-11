import React from "react";

export function Card({
  id,
  name,
  description,
  author,
  publishDate,
  duration,
  image,
  isLoggedIn,
  setModalOpen,
  setCartItems,
  cartItems
}) {
  const [hoveredCourse, setHoveredCourse] = React.useState(null);

  const handleMouseEnter = (courseId) => {
    setHoveredCourse(courseId);
  };

  const handleMouseLeave = () => {
    setHoveredCourse(null);
  };

  const handleAddCourse = (courseId) => {
    console.log(`Add course with ID ${courseId}`);

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
        id: id,
        name: name,
        quantity: 1,
      };

      setCartItems((prevstate) => {
        return [...prevstate, newitem];
      });
    }

    if (isLoggedIn) {
      return;
    }

    setModalOpen(true);
  };

  return (
    <div
      className="flex flex-row border-b-2 border-gray-600 my-5 bg-slate-950"
      onMouseEnter={() => handleMouseEnter(id)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-1/4 p-10 text-center">
        <img
          className="inline-block mb-5 w-3/4 mx-auto"
          src={image}
          alt="alt123"
        />
      </div>
      <div className="w-3/4 p-10">
        <h3 className="text-4xl font-extrabold mb-2">{name}</h3>
        <h4 className="text-2xl mb-2">{description}</h4>
        <p className="font-semibold text-sm mb-2">{author}</p>
        <div className="flex flex-row">
          <p className="font-extralight mr-5">
            Total Duration: <b>{duration}</b>
          </p>
          <p className="font-extralight mb-5">
            Published on: <b>{publishDate}</b>
          </p>
        </div>
        <div className="h-12">
          {hoveredCourse === id && (
            <>
              <button
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                onClick={() => handleAddCourse(id)}
              >
                Add
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
