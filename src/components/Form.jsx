import React from "react";

function Form() {
  return (
    <div className="main">
      <p className="sign" align="center">
        Sign in
      </p>
      <form className="form1">
        <input className="username" type="text" placeholder="Username" />
        <input className="password" type="password" placeholder="Password" />
        <a href="www.google.com" className="submit" align="center">
          Sign in
        </a>
        <p className="forgot" align="center">
          <a href="www.google.com">Forgot Password? </a>
        </p>
      </form>
    </div>
  );
}

export default Form;
