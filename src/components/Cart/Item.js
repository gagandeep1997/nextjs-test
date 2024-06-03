export function Item({ name, quantity }) {
  return (
    <div className="mb-4">
      <div className="flex flex-row mb-3 bg-white text-gray-800 shadow-md p-3 justify-between">
        <h3 className="text-base font-medium">{name}</h3>
        <span className="text-base font-medium mx-10"></span>
        <h3 className="text-base font-medium">{quantity}</h3>
      </div>
    </div>
  );
}
