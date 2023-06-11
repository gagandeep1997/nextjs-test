import { Form } from "./Form";

export function Modal({ isOpen, onClose, setIsLoggedIn }) {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-slate-500">
      <div className="bg-white shadow-md rounded p-8 mb-4">
        <h1 className="text-black text-3xl text-center font-normal uppercase border-b-2 pb-4 border-solid border-slate-300 mb-8">
          Login
        </h1>
        <Form onClose={onClose} setIsLoggedIn={setIsLoggedIn} />
      </div>
    </div>
  );
}
