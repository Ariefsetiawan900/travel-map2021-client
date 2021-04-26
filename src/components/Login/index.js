import React, { useState, useRef } from "react";
import axios from "axios";
import { Room, Cancel } from "@material-ui/icons";
import "./loginStyle.css";

const Login = ({ setShowLogin }) => {
  const [error, setError] = useState(false);

  const nameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      username: nameRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      await axios.post("/users/login", user);
      setError(false);
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="loginContainer">
      <div className="loginLogo">
        <Room />
        PetaPin
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="username" ref={nameRef} />
        <input type="password" placeholder="password" ref={passwordRef} />
        <button className="loginBtn">Login</button>
        {error && <span className="failure">Something went Wrong!</span>}
      </form>
      <Cancel className="loginCancel" onClick={() => setShowLogin(false)} />
    </div>
  );
};

export default Login;
