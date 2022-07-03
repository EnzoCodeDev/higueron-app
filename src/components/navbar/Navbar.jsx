import React from "react";
// import navigation data
import { navigation } from "./data";
// import Link
import { Link } from "react-scroll";
import "./navbar.scss";

export const Navbar = () => {
  return (
    <nav className="navbar-desktop">
      <ul>
        {navigation.map((item, idx) => {
          return (
            <li key={idx}>
              <Link
                to={item.href}
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className="link-redirect"
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
