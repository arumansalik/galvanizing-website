import logo from "../../assets/logo2.png";
import "./Navbar.css";
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

const Navbar = () => {

  const [Back,  setBack] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setBack(true) : setBack(false);
    })
  },[])

  return (
    <nav className={`container ${Back? 'dark-nav' : ''}`}>
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
