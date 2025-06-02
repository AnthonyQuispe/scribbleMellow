import "./Landing.scss";
import Nav from "../../components/Nav/Nav";
import AlertNav from "../../components/AlertNav/AlertNav";
import Footer from "../../components/Footer/Footer";
import HeroImg from "../../assets/Images/HeroImg.png";
import SnorlaxSticker from "../../assets/Images/SnorlaxSticker.png";
import PhoneWallpaper from "../../assets/Images/PhoneWallpaper.png";
import DiscountSticker from "../../assets/Images/DiscountSticker.png";
import { Link } from "react-router-dom";

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
      <section className="products">
        <ul className="products__list">
          <li className="products__item">
            <img
              src={SnorlaxSticker}
              className="products__image"
              alt="Snorlax Sticker"
            />
            <Link to="/products/stickers" className="products__link">
              Stickers
            </Link>
          </li>
          <li className="products__item">
            <img
              src={PhoneWallpaper}
              className="products__image"
              alt="Phone wallpaper"
            />
            <Link to="/products/wallpapers" className="products__link">
              Wallpapers
            </Link>
          </li>
          <li className="products__item">
            <img
              src={PhoneWallpaper}
              className="products__image"
              alt="Art Prints"
            />
            <Link className="products__link">Art Prints</Link>
          </li>
        </ul>
      </section>
      <section className="discount">
        <div className="discount__content">
          <h2 className="discount__title">
            25% off All Items For A Limited Time !
          </h2>
          <p className="discount__description">
            Use the Code “springSale” at checkout
          </p>
        </div>
        <div className="discount__image-wrapper">
          <img
            className="discount__image"
            src={DiscountSticker}
            alt="Discount Stickers"
          />
        </div>
      </section>
      <Footer />
    </main>
  );
}
