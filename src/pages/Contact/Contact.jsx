import "./Contact.scss";
import Nav from "../../components/Nav/Nav";
import AlertNav from "../../components/AlertNav/AlertNav";
import Footer from "../../components/Footer/Footer";

import YoutubeIcon from "../../assets/Icons/YoutubeIcon.png";
import InstagramIcon from "../../assets/Icons/InstagramIcon.png";
import TwitterIcon from "../../assets/Icons/TwitterIcon.png";

export default function Landing() {
  function handleSubmit(e) {
    e.preventDefault();
    const subject = document.getElementById("contact-subject").value;
    const body = document.getElementById("contact-message").value;
    window.location.href = `mailto:Scribblememellow@outlook.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }
  return (
    <main className="landing">
      <AlertNav />
      <Nav />
      <section className="contact">
        <div className="contact__content">
          <h2 className="contact__title">Love to hear from you,Get in touch</h2>
          <ul className="contact__info-list">
            <li className="contact__info-item">
              <p className="contact__info-label">Via Email:</p>
              <a
                className="contact__link"
                href="mailto:Scribblememellow@outlook.com"
                aria-label="Outlook"
              >
                Scribblememellow@outlook.com
              </a>
            </li>
            <li className="contact__info-item">
              <p className="contact__info-label">Instagram:</p>
              <a
                className="contact__link"
                href="https://www.instagram.com/scribblememellow/"
                aria-label="Instagram"
              >
                @scribblememellow
              </a>
            </li>
            <li className="contact__info-item">
              <p className="contact__info-label">Twitter:</p>
              <a
                className="contact__link"
                href="https://x.com/ScribbleMellow"
                aria-label="Twitter"
              >
                @ScribbleMellow
              </a>
            </li>
          </ul>
          <ul className="contact__social-list">
            <li className="contact__social-item">
              <a
                className="contact__social-link"
                href="https://www.youtube.com/@scribblememellow6244"
                aria-label="YouTube"
              >
                <img
                  className="contact__social-icon"
                  src={YoutubeIcon}
                  alt="YouTube"
                />
              </a>
            </li>
            <li className="contact__social-item">
              <a
                className="contact__social-link"
                href="https://www.instagram.com/scribblememellow/"
                aria-label="Instagram"
              >
                <img
                  className="contact__social-icon"
                  src={InstagramIcon}
                  alt="Instagram"
                />
              </a>
            </li>
            <li className="contact__social-item">
              <a
                className="contact__social-link"
                href="https://x.com/ScribbleMellow"
                aria-label="Twitter"
              >
                <img
                  className="contact__social-icon"
                  src={TwitterIcon}
                  alt="Twitter"
                />
              </a>
            </li>
            <li className="contact__social-item">
              <p className="contact__social-text">.................</p>
            </li>
          </ul>
        </div>
        <form className="contact__form" onSubmit={handleSubmit}>
          <label className="contact__label">Subject</label>
          <input
            id="contact-subject"
            className="contact__input"
            placeholder="Enter Your Subject"
          />
          <label className="contact__label">Message</label>
          <textarea
            id="contact-message"
            className="contact__input contact__input--textarea"
            placeholder="Enter Your Message"
          />
          <button className="contact__button">Submit</button>
        </form>
      </section>
      <Footer />
    </main>
  );
}
