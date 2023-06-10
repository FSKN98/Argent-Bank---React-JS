import React, { useState } from "react";
import "../../pages/Main.css";
import argentBankLogo from "../../img/argentBankLogo.png";
import { Link } from "react-router-dom";
import { loginUser } from "../../redux/actions/user";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLoginUser = (e) => {
    e.preventDefault();
    const body = { email, password };
    loginUser(body);
  };
  return (
    <div>
      <nav className="main-nav">
        <a className="main-nav-logo" href="/">
          <img
            className="main-nav-logo-image"
            src={argentBankLogo}
            alt="Bank Tree"
          />

          <h1 className="sr-only">Argent Bank</h1>
        </a>
        <div>
          <Link className="main-nav-item" to="/sign-in">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>
      </nav>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={onLoginUser}>
            <div className="input-wrapper">
              <label htmlFor="email">Username</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            {/* Placeholder due to static site */}
            {/*<a href="/user" className="sign-in-button">
              Sign In
  </a>*/}
            <button className="sign-in-button" type="submit">
              Sign In
            </button>
            {/* Should be the button below */}
            {/* <button className="sign-in-button">Sign In</button> */}
          </form>
        </section>
      </main>
      <footer className="footer">
        <p className="footer-text">Copyright 2020 Argent Bank</p>
      </footer>
    </div>
  );
};

export default SignIn;
