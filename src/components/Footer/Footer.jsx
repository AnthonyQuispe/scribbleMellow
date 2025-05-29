import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import logo from "../../assets/Logo/ScribbleMeMellowLogo.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <ul className="footer__nav">
        <li className="footer__nav-item">
          <Link className="footer__nav-link" to="/privacy-policy">
            Privacy Policy
          </Link>
        </li>
        <li className="footer__nav-item">
          <Link className="footer__nav-link" to="/return-policy">
            Return Policy
          </Link>
        </li>
        <li className="footer__nav-item">
          <Link className="footer__nav-link" to="/profile">
            Profile
          </Link>
        </li>
        <li className="footer__nav-item">
          <Link className="footer__nav-link" to="/contact-us">
            Contact Us
          </Link>
        </li>
      </ul>
      <div className="footer__branding">
        <Link className="footer__logo-link" to="/">
          <img
            src={logo}
            className="footer__logo"
            alt="ScribbleMeMellow Logo"
          />
        </Link>
        <p className="footer__disclaimer">
          ©2025 Scribblememellow All artwork and designs are lovingly created by
          Mellow. Please do not copy or redistribute without permission. Website
          develop by AQDev
        </p>
      </div>
    </footer>
  );
}
