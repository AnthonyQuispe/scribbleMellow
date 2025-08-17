import "./Forgot.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import AlertNav from "../../components/AlertNav/AlertNav";
import Footer from "../../components/Footer/Footer";
import { requestPasswordReset } from "../../firebase/FirebaseForget";

export default function Forgot() {
  const [formError, setFormError] = useState("");
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormError("");
    setSent(false);

    if (!email) {
      setFormError("Please enter your email.");
      return;
    }

    try {
      setLoading(true);
      await requestPasswordReset(email);
      setSent(true);
      setEmail("");
    } catch (err) {
      // With Email Enumeration Protection, Firebase often won’t reveal if an email exists.
      // So we show a generic message.
      setFormError("If that email exists, a reset link will be sent.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="forgot">
      <AlertNav />
      <Nav />
      <section className="forgot-content">
        <form className="forgot-content__form" onSubmit={handleFormSubmit}>
          <h1 className="forgot-content__title">Forgot password?</h1>

          {formError && <p className="forgot-content__error">{formError}</p>}
          {sent && (
            <p className="forgot-content__success">
              Check your inbox for a password reset link.
            </p>
          )}

          <div className="forgot-content__container">
            <input
              className="forgot-content__input"
              placeholder="Email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
          </div>

          <div className="forgot-content__container">
            <button
              className="forgot-content__btn"
              disabled={loading || !email}
              aria-busy={loading ? "true" : "false"}
            >
              {loading ? "Sending..." : "Reset Password"}
            </button>
          </div>

          <p className="forgot-content__text">
            Don’t have an account?{" "}
            <Link className="forgot-content__link" to={"/signup"}>
              Sign up
            </Link>
          </p>
          <p className="forgot-content__text">
            Have an account?{" "}
            <Link className="forgot-content__link" to={"/login"}>
              Sign in
            </Link>
          </p>
        </form>
      </section>
      <Footer />
    </main>
  );
}
