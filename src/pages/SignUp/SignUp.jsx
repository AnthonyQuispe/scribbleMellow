import "./SignUp.scss";
import React, { useState } from "react";
import { FirebaseSignup } from "../../firebase/FirebaseSignup";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import AlertNav from "../../components/AlertNav/AlertNav";
import Footer from "../../components/Footer/Footer";

import GoogleButton from "../../components/GoogleButton/GoogleButton";

export default function SignUp() {
  const [formError, setFormError] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await FirebaseSignup(username, email, password, navigate);
    } catch (error) {
      setFormError(true);
    }
  };

  return (
    <main className="signup">
      <AlertNav />
      <Nav />
      <section className="signup-content">
        <form className="signup-content__form" onSubmit={handleFormSubmit}>
          <h2 className="signup-content__title">Sign up</h2>
          {formError && (
            <p> Please Enter a Valid Email and Password And Try Again</p>
          )}
          <div className="signup-content__container">
            <input
              className="signup-content__input"
              placeholder="Username"
              type="text"
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="signup-content__input"
              placeholder="Email"
              type="text"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="signup-content__input"
              placeholder="Password"
              type="password"
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="signup-content__container">
            <div className="signup__checkbox">
              <input type="checkbox" id="privacy&terms" name="privacy&terms" />
              <label htmlFor="privacy&terms" className="signup__checkbox-label">
                I've read and agree with the{" "}
                <Link className="signup__checkbox-link">
                  Terms and Conditions
                </Link>{" "}
                and the{" "}
                <Link className="signup__checkbox-link">Privacy Policy</Link>.
              </label>
            </div>
            <button className="signup-content__btn">Sign up</button>
            <GoogleButton />
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
