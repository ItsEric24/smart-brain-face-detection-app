/* eslint-disable react/prop-types */
import { useState } from "react";
import "./componentStyles.css";

function Register({ onSubmit, loadUser }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const user = { username, email, password };

    const response = await fetch(
      "https://smartbrain-server-47rr.onrender.com/register",
      {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      }
    );

    const data = await response.json();

    if (data) {
      onSubmit("home");
      loadUser(data);
    } else {
      console.log("Error! registering");
    }
  }
  return (
    <div className="sign-in-container">
      <h1 className="sign-in-title">Sign Up</h1>
      <form className="sign-in-form">
        <label htmlFor="username" className="label">
          Username
        </label>
        <input
          className="sign-in-input"
          type="text"
          id="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          className="sign-in-input"
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password" className="label">
          Password
        </label>
        <input
          className="sign-in-input"
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSubmit} className="sign-in-btn">
          Register
        </button>
        <p className="register-text">
          Do you have an account?{" "}
          <a
            href="#"
            className="register-link"
            onClick={() => onSubmit("signin")}
          >
            Signin
          </a>
        </p>
      </form>
    </div>
  );
}
export default Register;
