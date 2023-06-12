import { Button } from "../../elements/Button";

export function AddRemoveCardButton({
  item,
  hoveredCourse,
  isLoggedIn,
  showRemoveButton,
  cartItems,
  setCartItems,
  setShowRemovedButton,
  setModalOpen,
}) {
  // handles the add remove functionality of the cart
  const handleAddCourse = (courseId) => {
    const selectedItem = cartItems.find((item) => item.id === courseId); // find the course in the cart if it is present or not

    if (selectedItem) {
      // if the item is already is in the cart use the setstate updating function to update the quantity of the course object in the cart array
      setCartItems((prevItems) =>
        prevItems.map((item) => {
          if (item.id === courseId) {
            return { ...item, quantity: item.quantity + 1 };
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
      // if it is logged in then return from here and don't go down in this function so that it will not open the login modal
      return;
    }

    setModalOpen(true); // open the modal if it is not logged in
  };

  const handleRemoveCourse = (courseId) => {
    const selectedItem = cartItems.find((item) => item.id === courseId);

    if (selectedItem.quantity > 1) {
      // if quantity of remove item is greater than 1 then only decrease the quantity
      setCartItems((prevItems) =>
        prevItems.map((item) => {
          if (item.id === courseId) {
            return { ...item, quantity: item.quantity - 1 }; // this is used to update the selected value of object from an array of objects based on removeindex and previous value of that value
          }
          return item;
        })
      );
    } else {
      setCartItems(
        (prevItems) => prevItems.filter((item) => item.id !== courseId) // if quantity of item that is going to be remove is 1 then remove the item from the cart
      );
      setShowRemovedButton(false); // removes the remove button as item is removed from the cart
    }
  };
  return (
    <div className="h-12">
      {hoveredCourse === item.id && (
        <>
          <Button
            onClick={() => handleAddCourse(item.id)}
            customClassName="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            content="Add"
          />
          {isLoggedIn && showRemoveButton && (
            <Button
              onClick={() => handleRemoveCourse(item.id)}
              customClassName="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 ml-5 border-b-4 border-red-700 hover:border-red-500 rounded"
              content="Remove"
            />
          )}
        </>
      )}
    </div>
  );
}
