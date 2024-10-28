import { Link } from "react-scroll";
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
      <a href="/"><img src={logo} alt="" className="logo" /></a>
      <ul className={mobileMenu?'':'mobile-menu'}>
        <li><Link to='home' smooth={true} offset={0} duration={500}>HotDip</Link></li>
        <li><Link to='product' smooth={true} offset={0} duration={500}>Products</Link></li>
        <li><Link to='about' smooth={true} offset={0} duration={500}>About us</Link></li>
        <li><Link to='reviews' smooth={true} offset={0} duration={500}>Testimonials</Link></li>
        <li>
          <button className="btn"><Link to='contact23' smooth={true} offset={0} duration={500}>Contact Us</Link></button>
        </li>
      </ul>
      <img src={menu} className="menu" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
