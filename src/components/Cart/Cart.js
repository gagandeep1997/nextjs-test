import React from "react";
import { CartItem } from "./CartItem";
import { Button } from "../../elements/Button";

export function Cart({ cartItems }) {
  const [isCartOpen, setCartOpen] = React.useState(false);

  const toggleCart = () => {
    setCartOpen(!isCartOpen);
  };

  const closeCart = () => {
    setCartOpen(false);
  };

  const cartItem = cartItems.map(
    (
      value // shows us the cart items on the ui based on the cartItems state
    ) => <CartItem key={value.id} name={value.name} quantity={value.quantity} />
  );

  return (
    <div className="fixed top-0 left-0 right-0 h-16 bg-black/[.60]">
      <Button
        onClick={toggleCart}
        customClassName="fixed top-3 right-5 bg-lime-700 hover:bg-lime-800 text-white font-bold py-2 px-4 rounded"
        content="View Cart"
      />
      {isCartOpen && (
        <div className="fixed top-0 right-0 w-80 h-screen bg-sky-100 shadow-lg transition duration-300 ease-in-out">
          <div className="p-4">
            <button
              className="absolute top-2 right-4 text-gray-500 hover:text-gray-700"
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
            <h3 className="font-bold text-2xl mt-5 pb-3 mb-3 border-black border-b text-black">
              Cart Content
            </h3>
            <div className="flex flex-row justify-between text-black mb-3">
              <div>Name</div>
              <div>Qty</div>
            </div>
            {cartItem}
          </div>
        </div>
      )}
    </div>
  );
}
