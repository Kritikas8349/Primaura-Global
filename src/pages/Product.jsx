import React from "react";
import "./Product.css";

import {
  FaLeaf,
  FaAward,
  FaGlobeAsia,
  FaHandshake,
} from "react-icons/fa";

const Product = () => {
  return (
    <section className="newProductsHero">

      <div className="newProductsOverlay"></div>

      <div className="newProductsContainer">

        <div className="newProductsContent">

          <span className="newProductsSubtitle">
            PRIMAURA GLOBAL
          </span>

          <h1 className="newProductsHeading">
            Our Products
          </h1>

          <p className="newProductsDescription">
            Explore our premium range of Indian export products,
            carefully sourced and processed to meet international
            quality standards. From authentic spices and herbs to
            pharmaceutical products, we deliver excellence with
            every shipment worldwide.
          </p>

          <div className="newProductsFeatures">

            <div className="newProductsFeatureCard">
              <div className="newProductsFeatureIcon">
                <FaLeaf />
              </div>

              <h4>100% Natural</h4>

              <p>
                Naturally sourced ingredients with
                premium quality assurance.
              </p>
            </div>

            <div className="newProductsFeatureCard">
              <div className="newProductsFeatureIcon">
                <FaAward />
              </div>

              <h4>Premium Quality</h4>

              <p>
                Carefully processed following
                international export standards.
              </p>
            </div>

            <div className="newProductsFeatureCard">
              <div className="newProductsFeatureIcon">
                <FaGlobeAsia />
              </div>

              <h4>Global Export</h4>

              <p>
                Supplying trusted products to
                customers across the world.
              </p>
            </div>

            <div className="newProductsFeatureCard">
              <div className="newProductsFeatureIcon">
                <FaHandshake />
              </div>

              <h4>Trusted Partner</h4>

              <p>
                Reliable partnerships with
                commitment and timely delivery.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Product;