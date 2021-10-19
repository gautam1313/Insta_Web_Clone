import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import FirebaseContext from "../context/firebase";
import * as ROUTES from "../constants/routes";
import { doesUsernameExists } from "../services/firebase";

const signup = () => {
  const history = useHistory();

  const {
    auth,
    createUserWithEmailAndPassword,
    updateProfile,
    addDoc,
    db,
    collection,
  } = useContext(FirebaseContext);

  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const invalid =
    emailAddress === "" ||
    password === "" ||
    username === "" ||
    fullName === "";

  //On submit
  const handleSignUp = async (event) => {
    event.preventDefault();
    const usernameExists = await doesUsernameExists(username);

    if (!usernameExists) {
      try {
        const createdUser = await createUserWithEmailAndPassword(
          auth,
          emailAddress,
          password
        );

        await updateProfile(createdUser.user, {
          displayName: username,
        });

        await addDoc(collection(db, "users"), {
          username: username.toLowerCase(),
          userId: createdUser.user.uid,
          fullName,
          following: [],
          followers: [],
          emailAddress: emailAddress.toLowerCase(),
          dateCreated: Date.now(),
        });

        history.replace(ROUTES.DASHBOARD);
      } catch (error) {
        setUsername("");
        setFullName("");
        setEmailAddress("");
        setPassword("");
        setError(error.message);
      }
    } else {
      setUsername("");
      setError("Username exists. Try another.");
    }
  };

  useEffect(() => {
    document.title = "Sign Up - Instagram";
  }, []);

  return (
    <div className="container mx-auto max-w-screen-md flex items-center h-screen">
      <div className="w-3/5">
        <img src="/images/iphone-with-profile.jpg" alt="iphone Instagram" />
      </div>
      <div className="w-2/5 flex flex-col">
        <div className="bg-white border border-gray-primary mb-4 p-4 rounded">
          <h1 className="flex w-full justify-center">
            <img
              src="/images/logo.png"
              alt="logo Instagram"
              className="w-6/12 mt-2 mb-4"
            />
          </h1>

          {error && <p className="text-red-primary mb-4">{error}</p>}

          <form onSubmit={handleSignUp} method="POST">
            <input
              type="text"
              aria-label="Enter username"
              placeholder="Username"
              className="text-gray-base w-full mr-3 py-5 px-4 h-2 text-sm border border-gray-primary rounded mb-2"
              onChange={({ target }) => {
                setUsername(target.value);
              }}
              value={username}
            />
            <input
              type="text"
              aria-label="Enter fullname"
              placeholder="Full Name"
              className="text-gray-base w-full mr-3 py-5 px-4 h-2 text-sm border border-gray-primary rounded mb-2"
              onChange={({ target }) => {
                setFullName(target.value);
              }}
              value={fullName}
            />
            <input
              type="text"
              aria-label="Enter email address"
              placeholder="Email"
              className="text-gray-base w-full mr-3 py-5 px-4 h-2 text-sm border border-gray-primary rounded mb-2"
              onChange={({ target }) => {
                setEmailAddress(target.value);
              }}
              value={emailAddress}
            />
            <input
              type="password"
              aria-label="Enter password"
              placeholder="Password"
              className="text-gray-base w-full mr-3 py-5 px-4 h-2 text-sm border border-gray-primary rounded mb-2"
              onChange={({ target }) => {
                setPassword(target.value);
              }}
              value={password}
            />
            <button
              disabled={invalid}
              type="submit"
              className={`bg-blue-medium w-full rounded h-8 font-bold text-white ${
                invalid && "opacity-50"
              }`}
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className="bg-white w-full flex flex-col justify-center items-center p-4 border border-gray-primary rounded">
          <p className="text-sm">
            Have an account?&nbsp;{" "}
            <Link to={ROUTES.LOGIN} className="font-bold text-blue-medium">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default signup;
