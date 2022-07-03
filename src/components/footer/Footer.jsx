import React from "react";
// import social data
import { social } from "../../data";
// import logo
import Logo from "../../assets/img/logo.svg";
import "./footer.scss";
export const Footer = () => {
  return (
    <footer className="container-main-footer">
      <div className="container-custom container-sub-main-footer">
        <div className="container-social">
          <div className="container-sub-social">
            {social.map((item, index) => {
              const { href, icon } = item;
              return (
                <a className="social-redirect" href={href} key={index}>
                  {icon}
                </a>
              );
            })}
          </div>
          <div>
            <img src={Logo} alt="" />
          </div>
          <p className="parrafo">
            &copy; 2022 Cristian Mihai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
