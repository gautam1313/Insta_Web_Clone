import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import FirebaseContext from "../context/firebase";

const login = () => {
  const history = useHistory();

  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const invalid = emailAddress === "" || password === "";

  //On submit
  const handleLogin = () => {};

  useEffect(() => {
    document.title = "Login - Instagram";
  }, []);

  return (
    <div className="container mx-auto max-w-screen-md flex items-center h-screen">
      <div className="w-3/5">
        <img src="/images/iphone-with-profile.jpg" alt="iphone Instagram" />
      </div>
      <div className="w-2/5 flex flex-col">
        <div className="bg-white border border-gray-500 border-gray-primary mb-4 p-4">
          <h1 className="flex w-full justify-center">
            <img
              src="/images/logo.png"
              alt="logo Instagram"
              className="w-6/12 mt-2 mb-4"
            />
          </h1>

          {error && (
            <p className="text-red-500 text-red-primary mb-4">{error}</p>
          )}

          <form onSubmit={handleLogin} method="POST">
            <input
              type="text"
              aria-label="Enter email address"
              placeholder="Email"
              className="text-gray-500 text-gray-base w-full mr-3 py-5 px-4 h-2 text-sm border border-gray-primary border-gray-500 rounded mb-2"
              onChange={({ target }) => {
                setEmailAddress(target.value);
              }}
            />
            <input
              type="password"
              aria-label="Enter password"
              placeholder="Password"
              className="text-gray-500 text-gray-base w-full mr-3 py-5 px-4 h-2 text-sm border border-gray-primary border-gray-500 rounded mb-2"
              onChange={({ target }) => {
                setPassword(target.value);
              }}
            />
            <button
              disabled={invalid}
              type="submit"
              className={`bg-blue-500 w-full rounded h-8 font-bold text-white ${
                invalid && "opacity-50"
              }`}
            >
              Log In
            </button>
          </form>
        </div>
        <div className="bg-white w-full flex flex-col justify-center items-center p-4 border border-gray-500 border-gray-primary">
          <p className="text-sm">Don't have an account?</p>
        </div>
      </div>
    </div>
  );
};

export default login;
