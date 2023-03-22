import React from "react";
import { pageLinks, socialLinks } from "../data";
import NavItems from "./NavItems";
const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map((link) => {
          const { id, href, text } = link;
          return (
            <li key={id}>
              <a href={href} className="footer-link">
                {text}
              </a>
            </li>
          );
        })}
        ;
      </ul>
      <ul className="footer-icons">
        {socialLinks.map((social) => {
          const { id, href, target, icon } = social;
          return (
            <li key={id}>
              <a href={href} target={target} rel = "nonreferrer" className="footer-icon">
                <i className={icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
