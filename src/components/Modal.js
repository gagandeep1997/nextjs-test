import React from "react";

export function Modal({ isOpen, onClose, setIsLoggedIn }) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username === "" || password === "") {
      return;
    }
    
    setUsername("");
    setPassword("");

    setIsLoggedIn(true);

    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-slate-500">
      <div className="bg-white shadow-md rounded p-8 mb-4">
        <h1 className="text-black text-3xl text-center font-normal uppercase border-b-2 pb-4 border-solid border-slate-300 mb-8">
          Login
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              id="username"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={username}
              placeholder="Username"
              onChange={handleUsernameChange}
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              id="password"
              className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={password}
              placeholder="Password"
              onChange={handlePasswordChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
