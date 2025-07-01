import React from "react";
import "./Product.scss";
import { useParams } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import AlertNav from "../../components/AlertNav/AlertNav";
import Footer from "../../components/Footer/Footer";
import placeholder from "../../assets/Images/Pika.png";

import { useState } from "react";

export default function Product() {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState(null);

  const productData = [
    {
      id: 0,
      picture: placeholder,
      name: "What's that Pika? Sticker",
      price: "5.99",
      tag: "sticker",
      description: "A bold sticker of Pikachu looking suspicious.",
      sizes: ["XS", "S", "M", "L"],
    },
  ];

  const product = productData.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <main className="product">
        <AlertNav />
        <Nav />
        <section className="product-content">
          <h2>Product not found</h2>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="product">
      <AlertNav />
      <Nav />
      <section className="product-content">
        <div className="product-content__gallery">
          <div className="product-content__preview-group">
            <img
              className="product-content__preview-side"
              src={product.picture}
              alt={`Side preview of ${product.name}`}
            />
            <img
              className="product-content__preview-side"
              src={product.picture}
              alt={`Side preview of ${product.name}`}
            />
          </div>
          <div className="product-content__preview-main-container">
            <img
              className="product-content__preview-main"
              src={product.picture}
              alt={`Main preview of ${product.name}`}
            />
          </div>
        </div>
        <form
          className="product-content__form"
          onSubmit={(e) => e.preventDefault()}
        >
          <h1 className="product-content__title">{product.name}</h1>
          <p className="product-content__price">${product.price}</p>
          <div className="product-content__size">
            <label className="product-content__size-label">Size:</label>
            <div className="product-content__size-buttons">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={`product-content__size-option${
                    selectedSize === size
                      ? " product-content__size-option--active"
                      : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedSize(size);
                  }}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="product-content__qty">
            <p className="product-content__qty-label">Qty</p>
            <select className="product-content__qty-select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              {[
                ...Array(10).map((_, i) => (
                  <option key={i + 1}>{i + 1}</option>
                )),
              ]}
            </select>
          </div>
          <button className="product-content__add-btn">Add to bag</button>
          <button className="product-content__wishlist-btn">
            Add to wishlist
          </button>
        </form>
      </section>
      <Footer />
    </main>
  );
}
