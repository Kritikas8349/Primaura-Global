import React from "react";
import "./Home.css";
import onion from "../assets/onion.png";
import garlic from "../assets/garlic.png";
import chilli from "../assets/chilli.png";
import turmeric from "../assets/turmeric.png";

const products = [
    {
      id: 1,
      image: onion,
      title: "Onion Powder",
      description:
        "Premium quality onion powder with rich aroma and authentic taste for food industries worldwide.",
    },
    {
      id: 2,
      image: garlic,
      title: "Garlic Powder",
      description:
        "Finely processed garlic powder ensuring freshness, purity and consistent quality for export.",
    },
    {
      id: 3,
      image: chilli,
      title: "Red Chilli Powder",
      description:
        "Bright color, rich flavor and premium quality chilli powder sourced from the finest farms.",
    },
    {
      id: 4,
      image: turmeric,
      title: "Turmeric Powder",
      description:
        "Natural turmeric powder with high curcumin content, vibrant color and exceptional purity.",
    },
  ];
  

const Home = () => {
    return (
        <>
        <section className="hero">
            <div className="overlay"></div>

            <div className="hero-container">

                <div className="hero-content">

                    <span className="hero-tag">
                        Rooted in india. Reaching the world.
                    </span>

                    <h1 className="hero-title">
                        Bridging India’s
                        <br />
                        Finest Ingredients
                        <br />
                        with global markets
                    </h1>

                    <p className="hero-description">
                    Primaura Global is a merchant exporter committed to delivering high-quality
                     Indian products to international markets across multiple industries.
                    </p>

                    <div className="hero-buttons">
                        <button className="primary-btn">
                            Explore Products
                        </button>

                        <button className="secondary-btn">
                            Contact Us
                        </button>
                    </div>

                </div>

            </div>
        </section>

<section className="products">

<div className="section-title">

  <span>PRIMAURA</span>

  <h2>OUR PRODUCTS</h2>

</div>

<div className="products-grid">

  {products.map((item) => (
    <div className="product-card" key={item.id}>

      <div className="product-image">
        <img src={item.image} alt={item.title} />
      </div>

      <div className="product-content">

        <h3>{item.title}</h3>

        <p>{item.description}</p>

      </div>

    </div>
  ))}

</div>

</section>
</>
    );
};

export default Home;