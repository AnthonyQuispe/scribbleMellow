import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Nav.scss";
import Logo from "../../assets/Logo/ScribbleMeMellowLogo.svg";
import MenuIcon from "../../assets/Icons/MenuIcon.svg";
import ProfileIcon from "../../assets/Icons/ProfileIcon.svg";
import CartIcon from "../../assets/Icons/CartIcon.svg";
import CloseIcon from "../../assets/Icons/CloseIcon.png";

export default function Nav({ MenuModal }) {
  const [modal, setModal] = useState(false);

  const getNavLinkClass = ({ isActive }) =>
    `nav__list-items-link ${isActive ? "nav__list-items-link--active" : ""}`;

  function ModalHandler() {
    setModal(!modal);
  }

  function MenuModal({ closeModal }) {
    const getMenuLinkClass = ({ isActive }) =>
      `menu-modal-list-items-link ${
        isActive ? "menu-modal-list-items-link--active" : ""
      }`;

    return (
      <div className="menu-modal">
        <ul className="menu-modal-list">
          <button
            className="menu-modal-list-items menu-modal-list-items--close"
            onClick={closeModal}
          >
            <img src={CloseIcon} className=" menu-modal-list-close-img" />
          </button>
          <li className="menu-modal-list-items ">
            <Link to="/" className=" menu-modal-list-logo-container">
              <img
                src={Logo}
                className=" menu-modal-list-logo"
                alt="Scribble Me Mellow Logo"
              />
            </Link>
          </li>
          <li className="menu-modal-list-items ">
            <NavLink to="/shop" className={getMenuLinkClass}>
              Shop
            </NavLink>
          </li>
          <li className="menu-modal-list-items ">
            <NavLink to="/" className={getMenuLinkClass}>
              Home
            </NavLink>
          </li>
          <li className="menu-modal-list-items ">
            <NavLink to="/about" className={getMenuLinkClass}>
              About
            </NavLink>
          </li>
          <li className="menu-modal-list-items ">
            <NavLink to="/contact" className={getMenuLinkClass}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <nav className="nav">
      {modal && <MenuModal closeModal={() => setModal(false)} />}
      <ul className="nav__list nav__list--desktop">
        <li className="nav__list-items">
          <NavLink to="/shop" className={getNavLinkClass}>
            Shop
          </NavLink>
        </li>
        <li className="nav__list-items">
          <NavLink to="/" className={getNavLinkClass}>
            Home
          </NavLink>
        </li>
        <li className="nav__list-items ">
          <Link
            to="/"
            className="nav__list-items-link nav__list-items-link--logo"
          >
            <img src={Logo} className="nav__list-items-link-logo-img" />
          </Link>
        </li>
        <li className="nav__list-items">
          <NavLink to="/about" className={getNavLinkClass}>
            About
          </NavLink>
        </li>
        <li className="nav__list-items">
          <NavLink to="/contact" className={getNavLinkClass}>
            Contact
          </NavLink>
        </li>
      </ul>

      <ul className="nav__list nav__list--mobile">
        <li className="nav__list-items">
          <button className="nav__list-items-button" onClick={ModalHandler}>
            <img
              src={MenuIcon}
              alt="Menu Button"
              className="nav__list-items-button-img"
            />
          </button>
        </li>
        <li className="nav__list-items">
          <Link to="/" className="nav__list-items-link ">
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
