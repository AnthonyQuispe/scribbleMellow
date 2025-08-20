import React, { useState } from "react";
import Nav from "../../components/Nav/Nav";
import AlertNav from "../../components/AlertNav/AlertNav";
import Footer from "../../components/Footer/Footer";
import "./Profile.scss";

export default function Profile() {
  const [orders, setOrders] = useState(true);
  const [profile, setProfile] = useState(false);
  const [changePassword, setChangePassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleTabChange = (tab) => {
    setOrders(tab === "orders");
    setProfile(tab === "profile");
    setChangePassword(tab === "changePassword");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <main className="profile">
      <AlertNav />
      <Nav />
      <section className="profile__content">
        <h1> {`${username} Account`}</h1>
        <div className="profile__btns">
          <button
            className={`profile__btn ${orders ? "profile__btn--active" : ""}`}
            onClick={() => handleTabChange("orders")}
          >
            My Orders
          </button>
          <button
            className={`profile__btn ${profile ? "profile__btn--active" : ""}`}
            onClick={() => handleTabChange("profile")}
          >
            Profile
          </button>

          <button
            className={`profile__btn ${
              changePassword ? "profile__btn--active" : ""
            }`}
            onClick={() => handleTabChange("changePassword")}
          >
            Change Password
          </button>
        </div>
        <div>
          {orders && (
            <div className="profile__order">
              <ul className="profile__order-list">
                <li className="profile__order-list-item">
                  <p className="profile__order-label">Orders #</p>
                  <p className="order__number">12345</p>
                </li>
                <li className="profile__order-list-item">
                  <p className="profile__order-label">Order Date </p>
                  <p className="profile__order-date">09/07/2001</p>
                </li>
                <li className="profile__order-list-item">
                  <p className="profile__order-label">Store</p>
                  <p className="profile__order-store">ScribbleMeMellow.com</p>
                </li>
                <li className="profile__order-list-item profile__order-list-item--total">
                  <p className="profile__order-label ">Total Price</p>
                  <p className="profile__order-price">$250.0</p>
                </li>
              </ul>
              <div className="profile__order-button-container">
                <button className="profile__order-button">
                  Track My Order
                </button>
                <button className="profile__order-button">
                  View Order Detail
                </button>
                <button className="profile__order-button">
                  Write A Review
                </button>
              </div>
            </div>
          )}
          {profile && (
            <form className="profile__form" onSubmit={(e) => handleSubmit(e)}>
              <div className="profile__form-input">
                <label>FirstName</label>
                <input
                  className="profile__input"
                  type="text"
                  autoComplete="name"
                  value={firstName}
                  disabled={!isEditing}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="profile__form-input">
                <label>LastName</label>
                <input
                  className="profile__input"
                  type="text"
                  autoComplete="name"
                  value={lastName}
                  disabled={!isEditing}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="profile__form-input">
                <label>Address</label>
                <input
                  className="profile__input"
                  type="text"
                  autoComplete="address"
                  value={address}
                  disabled={!isEditing}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>

              <div className="profile__form-btns">
                <button
                  className="profile__btn profile__btn--green"
                  type={!isEditing ? "submit" : "button"}
                  onClick={() => {
                    if (!isEditing) setIsEditing(true);
                  }}
                >
                  {!isEditing ? "Edit" : "Submit"}
                </button>
                <button
                  className="profile__btn profile__btn--red"
                  type="button"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>
                <button className="profile__btn profile__btn--red">
                  Delete Account?
                </button>
              </div>
            </form>
          )}
          {changePassword && (
            <form className="profile__form" onSubmit={(e) => handleSubmit(e)}>
              <div className="profile__form-input">
                <label>Password</label>
                <input
                  className="profile__input"
                  type="password"
                  autoComplete="new-password"
                  disabled={!isEditing}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="profile__form-input">
                <label>Confirm Password</label>
                <input
                  className="profile__input"
                  type="password"
                  autoComplete="confirm-password"
                  disabled={!isEditing}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div className="profile__form-btns">
                <button
                  className="profile__btn profile__btn--green"
                  type={isEditing ? "submit" : "button"}
                  onClick={() => {
                    if (!isEditing) setIsEditing(true);
                  }}
                >
                  {!isEditing ? "Edit" : "Submit"}
                </button>
                <button
                  className="profile__btn profile__btn--red"
                  type="button"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
        <div className="profile__sign-out-container">
          <button className="profile__sign-out">Sign Out</button>
        </div>
      </section>
      <Footer />
    </main>
  );
}
