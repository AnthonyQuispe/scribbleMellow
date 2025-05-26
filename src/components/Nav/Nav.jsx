import React, { useState } from "react";
import "./Nav.scss";
import Logo from "../../assets/logo/ScribbleMeMellowLogo.svg";
import MenuIcon from "../../assets/Icons/MenuIcon.svg";
import ProfileIcon from "../../assets/Icons/ProfileIcon.svg";
import CartIcon from "../../assets/Icons/CartIcon.svg";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="nav">
      <ul className="nav__list nav__list--desktop">
        <li className="nav__list-items">
          <Link className="nav__list-items-link">Shop</Link>
        </li>
        <li className="nav__list-items">
          <Link to="/home" className="nav__list-items-link">
            Home
          </Link>
        </li>
        <li className="nav__list-items ">
          <Link
            to="/home"
            className="nav__list-items-link nav__list-items-link--logo"
          >
            <img src={Logo} />
          </Link>
        </li>
        <li className="nav__list-items">
          <Link to="/about" className="nav__list-items-link">
            About
          </Link>
        </li>
        <li className="nav__list-items">
          <Link to="/contact" className="nav__list-items-link">
            Contact
          </Link>
        </li>
      </ul>

      <ul className="nav__list nav__list--mobile">
        <li className="nav__list-items">
          <button className="nav__list-items-button">
            <img
              src={MenuIcon}
              alt="Menu Button"
              className="nav__list-items-button-img"
            />
          </button>
        </li>
        <li className="nav__list-items">
          <Link to="/home" className="nav__list-items-link ">
            <img
              src={Logo}
              alt="Scribble Me Mellow Logo "
              className="nav__list-items-link-logo"
            />
          </Link>
        </li>
        <div className="nav__list-container">
          <li className="nav__list-items">
            <Link to="/profile" className="nav__list-items-link">
              <img src={ProfileIcon} alt="Profile Button" />
            </Link>
          </li>
          <li className="nav__list-items">
            <Link to="/Cart" className="nav__list-items-link">
              <img src={CartIcon} alt="Cart Button" />
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}
