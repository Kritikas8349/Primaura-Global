import React, { useState } from "react";
import "./Product.css";
import InquiryPopup from "../components/InquiryPopup";

import onionImg from "../assets/onionPowder.png";
import garlicImg from "../assets/garlicPowder.png";
import chilliImg from "../assets/chilliPowder.png";
import turmericImg from "../assets/turmericPowder.png";


import {
    FaLeaf,
    FaAward,
    FaGlobeAsia,
    FaHandshake,
    FaGlobe,
    FaBoxes,
} from "react-icons/fa";


const products = [
    {
        id: 1,
        name: "Onion",
        title: "Onion Powder",
        image: onionImg,

        description:
            "Our premium onion powder is manufactured from carefully selected onions and processed under hygienic conditions. It delivers a rich aroma, excellent flavor, and long shelf life, making it ideal for food processing, seasoning blends, ready-to-eat products, and international export markets.",

        features: [
            "100% Natural",
            "Premium Quality",
            "Export Grade",
            "Hygienically Processed",
        ],
    },

    {
        id: 2,
        name: "Garlic",
        title: "Garlic Powder",
        image: garlicImg,

        description:
            "Made from fresh garlic cloves, our garlic powder offers strong aroma, authentic taste, and superior purity. It is widely used in sauces, seasonings, snack foods, soups, and food manufacturing industries worldwide.",

        features: [
            "Rich Aroma",
            "Fine Texture",
            "Export Quality",
            "Long Shelf Life",
        ],
    },

    {
        id: 3,
        name: "Red Chilli",
        title: "Red Chilli Powder",
        image: chilliImg,

        description:
            "Our red chilli powder is produced using premium quality chillies to provide vibrant natural color, balanced pungency, and rich flavor. It is suitable for spice blends, processed foods, and global culinary applications.",

        features: [
            "Natural Color",
            "High Pungency",
            "Premium Grade",
            "Quality Tested",
        ],
    },

    {
        id: 4,
        name: "Turmeric",
        title: "Turmeric Powder",
        image: turmericImg,

        description:
            "Prepared from high-curcumin turmeric roots, our turmeric powder is known for its bright golden color, freshness, and purity. It is extensively used in food, nutraceutical, and pharmaceutical industries.",

        features: [
            "High Curcumin",
            "Pure & Natural",
            "Export Standard",
            "Fresh Aroma",
        ],
    },
];

const Product = () => {
    const [showInquiryPopup, setShowInquiryPopup] = useState(false);
    const [activeProduct, setActiveProduct] = useState(products[0]);

    return (
        <>
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

            <section className="catalogSection">

                <div className="catalogContainer">

                    <span className="catalogSubtitle">
                        PRIMAURA GLOBAL
                    </span>

                    <h2 className="catalogHeading">
                        Our Product Catalog
                    </h2>

                    <div className="catalogDivider">
                        <span></span>
                        <FaLeaf />
                        <span></span>
                    </div>

                    <div className="catalogTabs">

                        {products.map((product) => (

                            <button
                                key={product.id}
                                className={`catalogTab ${activeProduct.id === product.id
                                        ? "activeTab"
                                        : ""
                                    }`}
                                onClick={() => setActiveProduct(product)}
                            >
                                {product.name}
                            </button>

                        ))}

                    </div>

                    <div className="catalogCard">

                        <div className="catalogImage">

                            <img
                                src={activeProduct.image}
                                alt={activeProduct.title}
                            />

                        </div>

                        <div className="catalogContent">

                            <h3>
                                {activeProduct.title}
                            </h3>

                            <p>
                                {activeProduct.description}
                            </p>
                            <div className="catalogFeatureGrid">

                                <div className="catalogFeature">
                                    <FaLeaf className="featureIcon" />
                                    <span>{activeProduct.features[0]}</span>
                                </div>

                                <div className="catalogFeature">
                                    <FaAward className="featureIcon" />
                                    <span>{activeProduct.features[1]}</span>
                                </div>

                                <div className="catalogFeature">
                                    <FaGlobe className="featureIcon" />
                                    <span>{activeProduct.features[2]}</span>
                                </div>

                                <div className="catalogFeature">
                                    <FaBoxes className="featureIcon" />
                                    <span>{activeProduct.features[3]}</span>
                                </div>

                            </div>

                            <button
  className="catalogBtn"
  onClick={() => setShowInquiryPopup(true)}
>
  Send Inquiry
</button>

                        </div>

                    </div>

                </div>

            </section>

            <InquiryPopup
  isOpen={showInquiryPopup}
  onClose={() => setShowInquiryPopup(false)}
/>
        </>
    );
};

export default Product;