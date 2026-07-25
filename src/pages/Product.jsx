import React from "react";
import "./Product.css";
import {
    FaLeaf,
    FaAward,
    FaGlobeAsia,
    FaHandshake
  } from "react-icons/fa";

const Product = () => {
  return (
    <section className="product-hero">

      <div className="product-overlay"></div>

      <div className="product-container">

        <div className="product-left">

          <span className="product-tag">
            PRIMAURA
          </span>

          <h1 className="product-heading">
            Our
            <br />
            Products
          </h1>

          <div className="heading-line">
            <span></span>
            <i className="fa-solid fa-seedling"></i>
            <span></span>
          </div>

          <p className="product-text">
            Discover premium quality Indian products carefully sourced,
            processed and exported to international markets. We ensure
            exceptional quality, authenticity and reliability for every
            shipment across the globe.
          </p>

          <div className="product-features">

            <div className="feature-box">
              <div className="feature-icon">
                <i className="fa-solid fa-leaf"></i>
              </div>

              <span>100% Natural</span>
            </div>

            <div className="feature-box">
              <div className="feature-icon">
                <i className="fa-solid fa-award"></i>
              </div>

              <span>Premium Quality</span>
            </div>

            <div className="feature-box">
              <div className="feature-icon">
                <i className="fa-solid fa-earth-americas"></i>
              </div>

              <span>Global Export</span>
            </div>

            <div className="feature-box">
              <div className="feature-icon">
                <i className="fa-solid fa-handshake"></i>
              </div>

              <span>Trusted Partner</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Product;