import React from "react";

export function Cart({ cartItems }) {
  const [isCartOpen, setCartOpen] = React.useState(false);

  const toggleCart = () => {
    setCartOpen(!isCartOpen);
  };

  const closeCart = () => {
    setCartOpen(false);
  };

  let cartitemsarr = cartItems.map((value) => {
    return (
      <div className="mb-4">
        <div className="flex flex-row ml-2">
          <h3 className="text-base font-medium text-gray-500">{value.name}</h3>
          <span className="text-base font-medium text-gray-500 mx-10">X</span>
          <h3 className="text-base font-medium text-gray-500">
            {value.quantity}
          </h3>
        </div>
      </div>
    );
  });
  console.log(cartitemsarr);

  return (
    <div className="flex flex-col items-center">
      <button
        className="fixed top-5 right-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={toggleCart}
      >
        Open Cart
      </button>
      {isCartOpen && (
        <div className="fixed top-0 right-0 w-64 h-screen bg-white shadow-lg transition duration-300 ease-in-out">
          <div className="p-4">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={closeCart}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M2.646 2.646a.5.5 0 0 1 .708 0L10 9.293l6.646-6.647a.5.5 0 0 1 .708.708L10.707 10l6.647 6.646a.5.5 0 0 1-.708.708L10 10.707l-6.647 6.647a.5.5 0 0 1-.708-.708L9.293 10 2.646 3.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </button>
            <p className="font-bold text-black">Cart Content</p>
            {cartitemsarr}
          </div>
        </div>
      )}
    </div>
  );
}
