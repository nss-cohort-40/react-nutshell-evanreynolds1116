import React, { useState } from "react";
import Data from "./Data";
import "./Login.css";

const Login = (props) => {
  const [credentials, setCredentials] = useState({
    email: "",
    username: "",
    password: "",
  });

  // Update state whenever an input field is edited
  const handleFieldChange = (evt) => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setCredentials(stateToChange);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    Data.loginUser(credentials).then((result) => {
      if (result.length > 0) {
        sessionStorage.setItem("activeUser", result[0].id);
        props.history.push("/news");
      }
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    Data.saveNewUser(credentials).then(() => props.history.push("/news"));
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <div className="container">
          <fieldset>
            <h1>Please sign in</h1>
            <div className="container">
              <label htmlFor="inputEmail">
                <b>Email address</b>
              </label>
              <input
                onChange={handleFieldChange}
                type="text"
                id="email"
                placeholder="Email address"
                required=""
                autoFocus=""
                className="inputEmail"
              />

              <label htmlFor="inputPassword">
                <b>Password</b>
              </label>
              <input
                onChange={handleFieldChange}
                type="password"
                id="password"
                placeholder="Password"
                required=""
                className="inputPassword"
              />

              <button type="submit">Sign in</button>
            </div>
          </fieldset>
        </div>
      </form>
      <form onSubmit={handleRegister}>
        <div className="container">
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            onChange={handleFieldChange}
            type="text"
            className=""
            id="email"
            placeholder="Enter Email"
            required
          />

          <label htmlFor="username">
            <b>Username</b>
          </label>
          <input
            onChange={handleFieldChange}
            type="text"
            className=""
            id="username"
            placeholder="Enter Username"
          />

          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            onChange={handleFieldChange}
            type="password"
            className=""
            id="password"
            placeholder="Enter Password"
            required
          />

          <label htmlFor="passwordConfrim">
            <b>Repeat Password</b>
          </label>
          <input
            onChange={handleFieldChange}
            type="password"
            className=""
            id="passwordConfirm"
            placeholder="Repeat Password"
            required
          />

          <button type="submit" className="registerBtn" id="saveRegister">
            Register
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
