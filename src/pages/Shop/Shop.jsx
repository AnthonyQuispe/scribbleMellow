import "./Shop.scss";
import Nav from "../../components/Nav/Nav";
import AlertNav from "../../components/AlertNav/AlertNav";
import Footer from "../../components/Footer/Footer";
import placeholder from "../../assets/Images/Pika.png";
import AddToCartIcon from "../../assets/Icons/AddtoCartIcon.svg";
import { useState } from "react";

export default function Shop() {
  const [filterTag, setFilterTag] = useState("all");
  const [sortOption, setSortOption] = useState("");
  const handleFilterClick = (tag) => {
    setFilterTag(tag);
  };
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };
  const collectionArr = [
    { picture: placeholder, name: "What's that Pika? Sticker", price: "5.99" },
    {
      picture: placeholder,
      name: "Snorlax Leftovers Club Sticker",
      price: 5.99,
      tag: "sticker",
      releasedDate: 1 / 2 / 2024,
    },
    {
      picture: placeholder,
      name: "Apple Bear Wallpaper",
      price: 2.99,
      tag: "wallpaper",
      releasedDate: 1 / 2 / 2025,
    },
    {
      picture: placeholder,
      name: "Apple Bear Wallpaper",
      price: 4.99,
      tag: "sticker",
      releasedDate: 6 / 5 / 2024,
    },
    {
      picture: placeholder,
      name: "Apple Bear Wallpaper",
      price: 5.99,
      tag: "art print",
      releasedDate: 6 / 24 / 2025,
    },
    {
      picture: placeholder,
      name: "Apple Bear Wallpaper",
      price: 7.99,
      releasedDate: 6 / 24 / 2025,
    },
  ];
  return (
    <main className="shop">
      <AlertNav />
      <Nav />
      <section className="shop-content">
        <div className="shop-content__header">
          <div className="shop-content__filter-btns">
            <button
              className={`shop-content__filter-btn ${
                filterTag === "all" ? "shop-content__filter-btn--active" : ""
              }`}
              onClick={() => handleFilterClick("all")}
            >
              All
            </button>
            <button
              className={`shop-content__filter-btn ${
                filterTag === "sticker"
                  ? "shop-content__filter-btn--active"
                  : ""
              }`}
              onClick={() => handleFilterClick("sticker")}
            >
              Sticker
            </button>
            <button
              className={`shop-content__filter-btn ${
                filterTag === "art print"
                  ? "shop-content__filter-btn--active"
                  : ""
              }`}
              onClick={() => handleFilterClick("art print")}
            >
              Prints
            </button>
            <button
              className={`shop-content__filter-btn ${
                filterTag === "wallpaper"
                  ? "shop-content__filter-btn--active"
                  : ""
              }`}
              onClick={() => handleFilterClick("wallpaper")}
            >
              Wallpapers
            </button>
          </div>
          <div>
            <select
              className="shop-content__sort-select"
              value={sortOption}
              onChange={handleSortChange}
              name="Sort by "
            >
              <option value="" disabled>
                Sort By - - - - - - -
              </option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
              <option value="newest">Newest Arrivals</option>
            </select>
          </div>
        </div>
        <ul className="shop-content__list">
          {collectionArr
            .filter((item) => filterTag === "all" || item.tag === filterTag)
            .sort((a, b) => {
              if (sortOption === "price-low-high") {
                return a.price - b.price;
              } else if (sortOption === "price-high-low") {
                return b.price - a.price;
              } else if (sortOption === "newest") {
                return new Date(b.releasedDate) - new Date(a.releasedDate);
              } else if (!sortOption) {
                return 0;
              } else {
                return 0;
              }
            })
            .map((item, index) => (
              <li className="shop-content__item" key={index}>
                <div className="shop-content__image-container">
                  <img
                    className="shop-content__image"
                    src={item.picture}
                    alt={item.name}
                  />
                </div>
                <div className="shop-content__text-container">
                  <h3 className="shop-content__name">{item.name}</h3>
                  <div className="shop-content__price-container">
                    <p className="shop-content__price">${item.price} USD</p>
                    <button className="shop-content__cart">
                      <img
                        className="shop-content__cart-img"
                        src={AddToCartIcon}
                        alt="Add to cart button"
                      />
                    </button>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </section>
      <Footer />
    </main>
  );
}
