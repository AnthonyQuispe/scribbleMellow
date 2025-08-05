import React from "react";
import "./AlertNav.scss";

import YoutubeIcon from "../../assets/Icons/YoutubeIcon.svg";
import InstagramIcon from "../../assets/Icons/InstagramIcon.svg";
import TwitterIcon from "../../assets/Icons/TwitterIcon.svg";
import ProfileIcon from "../../assets/Icons/ProfileIconWhite.svg";
import CartIcon from "../../assets/Icons/CartIconWhite.svg";
import { Link } from "react-router-dom";

export default function AlertNav() {
  return (
    <div className="alert-nav">
      <ul className="alert-nav__social-icons">
        <li className="alert-nav__social-item">
          <a
            href="https://www.youtube.com/@scribblememellow6244"
            className="alert-nav__social-link"
            aria-label="YouTube"
          >
            <img
              className="alert-nav__social-icon"
              src={YoutubeIcon}
              alt="YouTube"
            />
          </a>
        </li>
        <li className="alert-nav__social-item">
          <a
            href="https://www.instagram.com/scribblememellow/"
            className="alert-nav__social-link"
            aria-label="Instagram"
          >
            <img
              className="alert-nav__social-icon"
              src={InstagramIcon}
              alt="Instagram"
            />
          </a>
        </li>
        <li className="alert-nav__social-item">
          <a
            href="https://x.com/ScribbleMellow"
            className="alert-nav__social-link"
            aria-label="Twitter"
          >
            <img
              className="alert-nav__social-icon"
              src={TwitterIcon}
              alt="Twitter"
            />
          </a>
        </li>
      </ul>
      <div className="alert-nav__promo">
        <h3 className="alert-nav__promo-text" />
      </div>
      <ul className="alert-nav__user-icons">
        <li className="alert-nav__user-item">
          <Link
            className="alert-nav__user-link"
            aria-label="User Profile"
            to={"/profile"}
          >
            <img
              className="alert-nav__user-icon"
              src={ProfileIcon}
              alt="User Profile"
            />
          </Link>
        </li>
        <li className="alert-nav__user-item">
          <Link className="alert-nav__user-link" aria-label="Shopping Cart">
            <img
              className="alert-nav__user-icon"
              src={CartIcon}
              alt="Shopping Cart"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
}
