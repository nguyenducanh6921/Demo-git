import React from "react";
import "../form/Signup.css";
function Signup() {
  return (
    <form className="loginPage">
      <div className="modal">
        <h1 className="heading"> SIGN IN</h1>
        <div className="username">
          <label className="title">Your account</label>
        </div>

        <div>
          <input
            className="side"
            type="text"
            placeholder="Username or email"
            required="username"
          ></input>
        </div>

        <div className="password">
          <label className="title2">Your password</label>
        </div>

        <div>
          <input
            className="side"
            type="password"
            placeholder="Password"
            required="password"
          ></input>
        </div>

        <div className="checkbox">
          <input type="checkbox"></input>
          <label>Remember me</label>
        </div>

        <div className="btn">
          <button>Login</button>
        </div>

        <div className="forgot">
          <a href="/">Forgot Password</a>
        </div>
      </div>
    </form>
  );
}

export default Signup;
