import React from "react";
import logo from "../images/logo.svg";
import { socialLinks, pageLinks } from "../data";
import NavItems from "./NavItems";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}

        <ul className="nav-links" id="nav-links">
          {pageLinks.map((link) => {
            const { id, href, text } = link;
            return <NavItems id={id} href={href} text={text} />;
          })}
          ;
        </ul>

        <ul className="nav-icons">
          {socialLinks.map((social) => {
            const { id, href, target, icon } = social;
            return (
              <li key={id}>
                <a
                  href={href}
                  target={target}
                  rel="nonreferrer"
                  className="nav-icon"
                >
                  <i className={icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
