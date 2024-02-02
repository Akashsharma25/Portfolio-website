import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Akash</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#contacts" className="footer__link">
              Contacts
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://leetcode.com/akasharma2525/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="uil uil-arrow"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/akash-sharma-550ba621b/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="uil uil-linkedin"></i>
          </a>

          <a
            href="https://github.com/Akashsharma25"
            className="footer__social-link"
            target="_blank"
          >
            <i className="uil uil-github-alt"></i>
          </a>
        </div>
      </div>

      <span className="footer__copy">&#169; Akash Sharma. All rights reserved</span>
    </footer>
  );
};

export default Footer;
