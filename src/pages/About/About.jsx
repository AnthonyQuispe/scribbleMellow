import "./About.scss";
import Nav from "../../components/Nav/Nav";
import AlertNav from "../../components/AlertNav/AlertNav";
import Footer from "../../components/Footer/Footer";

import MadetoMakeYouSmile from "../../assets/Images/MadetoMakeYouSmile.png";
import MadebyMellow from "../../assets/Images/MadebyMellow.png";
import BecomingMellow from "../../assets/Images/BecomingMellow.png";

export default function About() {
  return (
    <main className="landing">
      <AlertNav />
      <Nav />
      <section className="about">
        <h2 className="about__title">Our Story</h2>
        <ul className="about__list">
          <li className="about__item">
            <img
              className="about__image"
              src={BecomingMellow}
              alt="Becoming Mellow drawing "
            />
            <h3 className="about__subtitle">Becoming Mellow</h3>
            <p className="about__text">
              Scribblememellow started as a little daydream and quickly became
              my happy space—a cozy corner filled with colors, characters, and
              charm. I’m Mellow, the artist behind it all, and this shop is a
              piece of my heart. Every product is part of my journey—growing,
              creating, and becoming who I am, one scribble at a time.
            </p>
          </li>
          <li className="about__item">
            <img
              className="about__image"
              src={MadetoMakeYouSmile}
              alt="Made to Make You Smile drawing of Mellow "
            />
            <h3 className="about__subtitle">Made to Make You Smile</h3>
            <p className="about__text">
              Life can feel a little dull sometimes, and that’s where
              Scribblememellow comes in. My creations are here to add a pop of
              cuteness, a dash of cozy, and a whole lot of personality to your
              everyday routine. If something I made made you smile, then that’s
              the best kind of magic. ✨
            </p>
          </li>
          <li className="about__item">
            <img
              className="about__image"
              src={MadebyMellow}
              alt="Made to Make You Smile drawing of Mellow "
            />
            <h3 className="about__subtitle">Made by Mellow</h3>
            <p className="about__text">
              Every sticker, bookmark, print, and wallpaper you see here is
              lovingly handmade by me, Mellow! From sketch to final sparkle, I
              pour joy, creativity, and care into every piece. I believe in art
              that feels personal and warm—like a little hug for your planner,
              journal, or room.
            </p>
          </li>
        </ul>
      </section>
      <Footer />
    </main>
  );
}
