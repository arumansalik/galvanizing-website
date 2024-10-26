import logo from "../../assets/logo2.png";
import menu from "../../assets/menu.png";
import "./Navbar.css";
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  const [Back, setBack] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setBack(true) : setBack(false);
    });
  }, []);

  return (
    <nav className={`contain ${Back ? "dark-nav" : ""}`}>
      <img src={logo} alt="" className="logo" />
      <ul className={mobileMenu?'':'mobile-menu'}>
        <li>Home</li>
        <li>Services</li>
        <li>About</li>
        <li>Services</li>
        <li>
          <button className="btn">Contact us</button>
        </li>
      </ul>
      <img src={menu} className="menu" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
