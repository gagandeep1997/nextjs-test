import { Button } from "@/elements/Button";

export function Notification({ closePopup, message }) {
  return (
    <div className="login-successfull-popup fixed inset-0 flex items-center justify-center bg-black/[.80] z-10">
      <div className="bg-white w-100 p-8 rounded shadow-md text-center">
        <h2 className="text-xl text-black font-bold mb-3">
          {message}
        </h2>
        <Button
          onClick={closePopup}
          customClassName="mt-6 bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded"
          content="close"
        />
      </div>
    </div>
  );
}
