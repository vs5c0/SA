import React, { useState } from "react";
import img from "./v3.png";
import "../App.css";
import menu from './menu.webp'
function Header() {
  const [isopen, setIspoen] = useState(true);
  const onIsopenClick = () => {
    console.log(isopen);
    setIspoen(!isopen);
  };
  return (
    <>
      <header className="header">
        <a href="#" className="logo">
          <img src={img} alt="" />
        </a>

        <div>
          <div className="hamburger" onClick={onIsopenClick}>
           {/* <MenuIcon fontSize="large"/>  */}
            <img className="ham-btn" src={menu} alt="" />
          </div>
        </div>
        <nav className="navbar">
          <a href="#home" className="active">
            Home
          </a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
             



        </nav>
        <div className="container">
                <input id="checkbox" name="checkbox" type="checkbox" />
                <label className="label" htmlFor="checkbox">
                </label>
              </div>
      </header>
      {isopen ? (
        <div className="mobile-nav">
          <nav className="mobile-navbar">
            <a href="#home" className="mob-nav-li">
              Home
            </a>
            <a className="mob-nav-li" href="#about">About</a>
            <a className="mob-nav-li" href="#services">Services</a>
            <a className="mob-nav-li" href="#portfolio">Portfolio</a>
            <a className="mob-nav-li" href="#contact">Contact</a>
            <div className="container">
                <input id="checkbox" name="checkbox" type="checkbox" />
                <label className="label" htmlFor="checkbox">
                </label>
              </div>
          </nav>
              
        </div>
       ) : (
        ""
      )} 
    </>
  );
}

export default Header;
