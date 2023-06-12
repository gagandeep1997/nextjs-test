import React from "react";
import { Button } from "@/elements/Button";

export function Form({ onClose, setIsLoggedIn }) {
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

    if (username === "" || password === "") {                                // submits the form if username and password is not empty
      return;
    }

    setUsername("");
    setPassword("");

    setIsLoggedIn(true);

    onClose();                                                               // closes the login modal
  };
  return (
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
        <Button
          customClassName="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          content="Login"
          type="submit"
        />
      </div>
    </form>
  );
}
