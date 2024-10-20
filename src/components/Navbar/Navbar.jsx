import logo from "../../assets/logo2.png";
import "./Navbar.css";
// eslint-disable-next-line no-unused-vars
import React from "react";

const Navbar = () => {
  return (
    <nav className="container">
      <img src={logo} alt="" className="logo"/>
      <ul>
        <li>Home</li>
        <li>Services</li>
        <li>About</li>
        <li>Services</li>
        <li><button className="btn">Contact us</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
