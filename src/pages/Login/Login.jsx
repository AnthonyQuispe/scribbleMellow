import "./Login.scss";
import React from "react";
import Nav from "../../components/Nav/Nav";
import AlertNav from "../../components/AlertNav/AlertNav";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <main className="login">
      <AlertNav />
      <Nav />
      <section className="login-content">
        <form className="login-content__form">
          <h2 className="login-content__title">Sign in </h2>
          <div className="login-content__container">
            <input className="login-content__input" placeholder="Email" />
            <input className="login-content__input" placeholder="Password" />
          </div>
          <div className="login-content__container">
            <button className="login-content__btn">Sign in</button>
            <button className="login-content__btn login-content__btn--google">
              Sign in with Google
            </button>
          </div>
          <p className="login-content__text">
            Don't have an account?{" "}
            <Link className="signup-content__link" to={"/signup"}>
              Sign up
            </Link>
          </p>
        </form>
      </section>
      <Footer />
    </main>
  );
}
