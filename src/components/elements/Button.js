export function Button({ onClick, sortCategory, borderClass }) {
  return (
    <button
      className={
        "bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 " +
        `${borderClass}`
      }
      onClick={onClick}
    >
      {sortCategory}
    </button>
  );
}
