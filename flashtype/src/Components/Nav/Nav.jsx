import React from "react";
import logo from "./../../Assets/logo.png";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="nav-left">
        <img className="flash-logo" src={logo} alt="logo" />
        <p className="flash-logo-text">flashType</p>
      </div>

      <div className="nav-right">
        <a
          target="_blank"
          className="nav-aam-link"
          href="http://theleanprogrammer.com/aam"
          rel="noreferrer"
        >
          aam
        </a>
      </div>
    </div>
  );
};

export default Nav;
