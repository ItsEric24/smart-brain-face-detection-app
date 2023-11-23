/* eslint-disable react/prop-types */
import { useState } from "react";
import "./componentStyles.css";

function SignIn({ onSubmit, onRouteChange, loadUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const user = { email, password };
    try {
      const response = await fetch("http://localhost:5000/signin", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      const data = await response.json();

      if (data[0].id) {
        onSubmit("home");
        loadUser(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="sign-in-container">
      <h1 className="sign-in-title">Sign In</h1>
      <form className="sign-in-form">
        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          className="sign-in-input"
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
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
          SignIn
        </button>
        <p className="register-text">
          Don&apos;t have an account?{" "}
          <a
            href="#"
            className="register-link"
            onClick={() => onRouteChange("register")}
          >
            Register
          </a>
        </p>
      </form>
    </div>
  );
}
export default SignIn;
