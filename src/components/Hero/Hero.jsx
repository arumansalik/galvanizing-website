// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Hero.css";
import dark_arrow from '../../assets/dark-arrow.png'
import { Link } from "react-scroll";

const Hero = () => {
  return <div className="hero contain">
   <div className="hero-text">
    <h1>Protecting Your Steel for a Stronger Tomorrow</h1>
    <p>At SG Galvanizing, we provide high-quality galvanizing solutions that ensure your steel structures are protected against corrosion, extending their lifespan and reliability.</p>
    <Link to='home' smooth={true} offset={0} duration={500}><button className="secondary-btn btn">Explore more <img src={dark_arrow} alt="" /></button></Link>
   </div>
  </div>;
};

export default Hero;
