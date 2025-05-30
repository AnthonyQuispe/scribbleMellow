import "./Landing.scss";
import Nav from "../../components/Nav/Nav";
import AlertNav from "../../components/AlertNav/AlertNav";
import Footer from "../../components/Footer/Footer";

import HeroImg from "../../assets/Images/HeroImg.png";
export default function Landing() {
  return (
    <main className="landing">
      <AlertNav />
      <Nav />
      <section className="hero">
        <div className="hero__container">
          <img
            src={HeroImg}
            className="hero__img"
            alt="Picture of Mellow Looking at the camera doing a cute pose"
          />
          <div className="hero__text-container">
            <h1 className="hero__title">
              Hi, I'm Mellow – your Florida-based small creator
            </h1>
            <p className="hero__description">
              Welcome to scribblememellow – a cozy corner of the internet full
              of doodly stickers, mellow art, and handmade goodies made with
              love.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
