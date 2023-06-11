export function LoggedInPopup({ closePopup }) {
  return (
    <div className="login-successfull-popup fixed inset-0 flex items-center justify-center bg-black/[.80] z-10">
      <div className="bg-white w-100 p-8 rounded shadow-md text-center">
        <h2 className="text-xl text-black font-bold mb-3">
          Successfully Logged In
        </h2>
        <button
          className="mt-6 bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded"
          onClick={closePopup}
        >
          Close
        </button>
      </div>
    </div>
  );
}
