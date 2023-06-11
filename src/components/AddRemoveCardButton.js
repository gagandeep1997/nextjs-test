import { Button } from "./elements/Button";

export function AddRemoveCardButton({
  item,
  hoveredCourse,
  isLoggedIn,
  showRemoveButton,
  cartItems,
  setCartItems,
  setShowRemovedButton,
  setModalOpen
}) {
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
