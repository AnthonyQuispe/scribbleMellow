import "./Login.scss";
import React, { useState } from "react";
import { FirebaseLogin } from "../../firebase/FirebaseLogin";
import { Link, useNavigate } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import AlertNav from "../../components/AlertNav/AlertNav";
import Footer from "../../components/Footer/Footer";
import GoogleButton from "../../components/GoogleButton/GoogleButton";

export default function Login() {
  const [formError, setFormError] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await FirebaseLogin(email, password, navigate);
    } catch (error) {
      console.error(error);
      setFormError(true);
    }
  };

  return (
    <main className="login">
      <AlertNav />
      <Nav />
      <section className="login-content">
        <form className="login-content__form" onSubmit={handleFormSubmit}>
          <h1 className="login-content__title">Sign in </h1>
          {formError && (
            <p>Please Enter a Valid Email and Password And Try Again</p>
          )}
          <div className="login-content__container">
            <input
              className="login-content__input"
              placeholder="Email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="login-content__input"
              placeholder="Password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="login-content__container">
            <button className="login-content__btn">Sign in</button>
            <GoogleButton />
          </div>
          <p className="login-content__text">
            Don't have an account?{" "}
            <Link className="login-content__link" to={"/signup"}>
              Sign up
            </Link>
          </p>
          <Link
            className="login-content__link login-content__link--forgot"
            to="/forgot"
          >
            Forgot password?
          </Link>
        </form>
      </section>
      <Footer />
    </main>
  );
}
