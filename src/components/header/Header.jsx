import React, { useState, useEffect } from "react";
import Logo from "../../assets/img/logo.svg";
import { NavBarMobile } from "../navbar-mobile/NavBarMobile";
import { Navbar } from "../navbar/Navbar";
import Socials from "../Socials";
import "./header.scss";

export const Header = () => {
  const [bg, setBg] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });
  return (
    <header
      className={`${
        bg ? "container-main-opacity " : "container-main-not-opacity "
      } container-main`}
    >
      <div className="container-sub-main container-custom">
        {/* logo */}
        <a href="#">
          <img src={Logo} alt="" />
        </a>
        {/* nav */}
        <div className="nav-desktop">
          <Navbar />
        </div>
        {/* Socials */}
        <div className="social">
          <Socials />
        </div>
        {/* nav mobile*/}
        <div className="nav-mobile">
          <NavBarMobile />
        </div>
      </div>
    </header>
  );
};
