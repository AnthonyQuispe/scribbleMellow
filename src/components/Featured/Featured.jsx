import "./Featured.scss";
import placeholder from "../../assets/Images/Pika.png";
import AddToCartIcon from "../../assets/Icons/AddtoCartIcon.svg";
import StarIcon from "../../assets/Icons/StarIcon.svg";

export default function Featured() {
  const collectionArr = [
    { picture: placeholder, name: "What's that Pika? Sticker", price: "5.99" },
    {
      picture: placeholder,
      name: "Snorlax Leftovers Club Sticker",
      price: "5.99",
    },
    {
      picture: placeholder,
      name: "Apple Bear Wallpaper",
      price: "5.99",
    },
    {
      picture: placeholder,
      name: "Apple Bear Wallpaper",
      price: "5.99",
    },
    {
      picture: placeholder,
      name: "Apple Bear Wallpaper",
      price: "5.99",
    },
    {
      picture: placeholder,
      name: "Apple Bear Wallpaper",
      price: "5.99",
    },
  ];

  return (
    <section className="featured">
      <div className="featured__header">
        <h2 className="featured__title">Featured Collection</h2>
        <img className="featured__decor-sun" alt="Yellow Sun" src={StarIcon} />
      </div>
      <ul className="featured__list">
        {collectionArr.map((item, index) => (
          <li className="featured__item" key={index}>
            <div className="featured__image-container">
              <img
                className="featured__image"
                src={item.picture}
                alt={item.name}
              />
            </div>
            <div className="featured__text-container">
              <h3 className="featured__name">{item.name}</h3>
              <div className="featured__price-container">
                <p className="featured__price">${item.price} USD</p>
                <button className="featured__cart">
                  <img
                    className="featured__cart-img"
                    src={AddToCartIcon}
                    alt="Add to cart button"
                  />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="featured__newsletter">
        <p className="featured__newsletter-text">
          Join Our Newsletter to stay up to date with all things
          scirbblememelllow and get access to discounts and limited time offers!
        </p>
        <form className="featured__newsletter-form">
          <input
            className="featured__newsletter-input"
            placeholder="Email Address"
          />
          <button className="featured__newsletter-button">Sign Me Up!</button>
        </form>
      </div>
    </section>
  );
}
