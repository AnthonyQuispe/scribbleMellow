import "./SignUp.scss";
import React from "react";
import Nav from "../../components/Nav/Nav";
import AlertNav from "../../components/AlertNav/AlertNav";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <main className="signup">
      <AlertNav />
      <Nav />
      <section className="signup-content">
        <form className="signup-content__form">
          <h2 className="signup-content__title">Sign up</h2>
          <div className="signup-content__container">
            <input className="signup-content__input" placeholder="Email" />
            <input className="signup-content__input" placeholder="Password" />
          </div>
          <div className="signup-content__container">
            <button className="signup-content__btn">Sign up</button>
            <button className="signup-content__btn signup-content__btn--google">
              Sign in with Google
            </button>
          </div>
          <p className="signup-content__text">
            Already have an account?{" "}
            <Link className="signup-content__link" to={"/login"}>
              Sign in
            </Link>
          </p>
        </form>
      </section>
      <Footer />
    </main>
  );
}
