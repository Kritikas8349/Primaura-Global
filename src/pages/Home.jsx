import React, { useState } from "react";
import "./Home.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

import onion from "../assets/onion.png";
import garlic from "../assets/garlic.png";
import chilli from "../assets/chilli.png";
import turmeric from "../assets/turmeric.png";

import quality from "../assets/premiumQuality.png";
import trusted from "../assets/trustedExport.png";
import global from "../assets/globalSupply.png";
import seamless from "../assets/seamlessSupply.png";

import banner from "../assets/textContainer.png";
import banner1 from "../assets/banner.png";

import flag1 from "../assets/flag1.png";
import flag2 from "../assets/flag2.png";
import flag3 from "../assets/flag3.png";

import map from "../assets/map.png";

import richAgri from "../assets/richAgri.png";
import reliable from "../assets/reliable.png";
import exportGlobal from "../assets/exportGlobal.png";
import international from "../assets/international.png";


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


//why choose us
const features = [
  {
    id: 1,
    icon: quality,
    title: "Premium Quality Assurance",
    description:
      "Every product is carefully sourced and inspected to ensure it meets international quality standards, delivering consistency, safety, and excellence in every shipment.",
  },
  {
    id: 2,
    icon: trusted,
    title: "Trusted Export Partner",
    description:
      "With transparent communication, dependable service, and timely deliveries, we help businesses build long-term global supply relationships with confidence.",
  },
  {
    id: 3,
    icon: global,
    title: "Global Supply Network",
    description:
      "Leveraging a strong network of trusted manufacturers and logistics partners, we efficiently connect Indian products with international markets.",
  },
  {
    id: 4,
    icon: seamless,
    title: "Seamless Export Solutions",
    description:
      "From sourcing and quality inspection to documentation, packaging, and shipment, we manage the complete export process for a hassle-free experience.",
  },
];

//Testimonials
const testimonials = [
  {
    country: flag1,
    title: "A Trusted Export Partner",
    review:
      "Working with Primaura Global Private Limited has been an outstanding experience. Their commitment to quality, transparent communication, and timely deliveries has made them one of our most trusted sourcing partners. Every shipment arrives exactly as promised, meeting international standards and exceeding our expectations.",
    author:
      "UAE - Khalid Al-Obaisi, Procurement Manager, Abu Dhabi Trading LLC",
  },

  {
    country: flag2,
    title: "Exceptional Quality & Service",
    review:
      "Primaura Global has consistently delivered premium-quality ingredients with professionalism and reliability. Their attention to detail, efficient export documentation, and customer-first approach have made sourcing from India simple and dependable. We highly recommend them to businesses seeking a long-term export partner.",
    author:
      "USA – Michael Anderson, Purchasing Director, Global Food Imports Inc.",
  },

  {
    country: flag3,
    title: "Reliable. Professional. Consistent.",
    review:
      "Primaura Global combines premium product quality with exceptional service. Their team is responsive, dependable, and committed to delivering every order on time. Their dedication to maintaining international standards makes them a valuable partner for our business.",
    author:
      "UK – James Wilson, Import Manager, London Food Supplies Ltd.",
  },
];

//world map
const countries = [
  "India",
  "United States",
  "Canada",
  "Brazil",
  "United Kingdom",
  "France",
  "Germany",
  "Italy",
  "Russia",
  "China",
  "Japan",
  "Australia",
  "South Africa",
  "Mexico",
  "Saudi Arabia",
  "UAE",
];



const Home = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };


  const [country, setCountry] = useState("");
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };
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
              <Link to="/products">
                <button className="primary-btn">
                  Explore Products
                </button>
              </Link>

              <Link to="/contact">
                <button className="secondary-btn">
                  Contact Us
                </button>
              </Link>
            </div>

          </div>

        </div>
      </section>

      <section className="products">

        <div className="section-title">

          <span>PRIMAURA</span>

          <h2>Our Products</h2>

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

      <section className="whyChoose">
        <div className="container">

          <div className="sectionHeading">
            <h2>Why Choose Primaura Global?</h2>

            <p>
              At Primaura Global Private Limited, we are committed to delivering
              premium-quality Indian products to international markets with
              reliability, consistency, and uncompromising quality. Through
              trusted sourcing, rigorous quality standards, and seamless export
              solutions, we build lasting partnerships across the globe.
            </p>
          </div>

          <div className="chooseGrid">
            {features.map((item) => (
              <div className="chooseCard" key={item.id}>
                <img src={item.icon} alt={item.title} />

                <div className="cardContent">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="heroBanner">
        <div className="bannerContainer">

          <picture>
            <source
              media="(max-width:768px)"
              srcSet={banner1}
            />

            <img
              src={banner}
              alt="Primaura Banner"
              className="bannerImage"
            />
          </picture>

          <div className="bannerContent">
            <h2>Delivering India's Finest Ingredients to Global Markets</h2>

            <p>
              Primaura Global Private Limited is a trusted merchant exporter
              specializing in premium-quality dehydrated ingredients, spices, and
              food products. We collaborate with reliable manufacturers to deliver
              products that meet international quality standards, ensuring
              consistency, authenticity, and excellence for customers worldwide.
            </p>
          </div>

        </div>
      </section>

      <section className="testimonials">

        <h2>Trusted by Global Partners</h2>

        <p className="subHeading">
          We take pride in building lasting relationships with importers,
          distributors, and food manufacturers across international markets
          through quality, reliability, and consistent service.
        </p>

        <div className="testimonialWrapper">

          <button className="arrow left" onClick={prevSlide}>
            <FaArrowLeft />
          </button>

          <div className="testimonialCard">

            <img
              src={testimonials[current].country}
              alt=""
              className="flag"
            />

            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            <h3>{testimonials[current].title}</h3>

            <p className="review">
              {testimonials[current].review}
            </p>

            <span>{testimonials[current].author}</span>

          </div>

          <button className="arrow right" onClick={nextSlide}>
            <FaArrowRight />
          </button>

        </div>

      </section>

      <section className="partners-section">

        <h2>Trusted by Global Partners</h2>

        <div
          className="map-wrapper"
          onMouseMove={handleMove}
        >
          <img
            src={map}
            alt="World Map"
            className="world-map"
          />

          {/* Demo Hotspots */}
          <div
            className="hotspot india"
            onMouseEnter={() => setCountry("India")}
            onMouseLeave={() => setCountry("")}
          ></div>

          <div
            className="hotspot usa"
            onMouseEnter={() => setCountry("United States")}
            onMouseLeave={() => setCountry("")}
          ></div>

          <div
            className="hotspot canada"
            onMouseEnter={() => setCountry("Canada")}
            onMouseLeave={() => setCountry("")}
          ></div>

          <div
            className="hotspot uk"
            onMouseEnter={() => setCountry("United Kingdom")}
            onMouseLeave={() => setCountry("")}
          ></div>

          <div
            className="hotspot china"
            onMouseEnter={() => setCountry("China")}
            onMouseLeave={() => setCountry("")}
          ></div>

          <div
            className="hotspot australia"
            onMouseEnter={() => setCountry("Australia")}
            onMouseLeave={() => setCountry("")}
          ></div>

          <div
            className="hotspot europe"
            onMouseEnter={() => setCountry("Europe")}
            onMouseLeave={() => setCountry("")}
          />

          <div
            className="hotspot africa"
            onMouseEnter={() => setCountry("Africa")}
            onMouseLeave={() => setCountry("")}
          />

          <div
            className="hotspot asia"
            onMouseEnter={() => setCountry("Asia")}
            onMouseLeave={() => setCountry("")}
          />

          <div
            className="hotspot italy"
            onMouseEnter={() => setCountry("Italy")}
            onMouseLeave={() => setCountry("")}
          />

          <div
            className="hotspot france"
            onMouseEnter={() => setCountry("France")}
            onMouseLeave={() => setCountry("")}
          />

          <div
            className="hotspot saudi"
            onMouseEnter={() => setCountry("Saudi Arabia")}
            onMouseLeave={() => setCountry("")}
          />

          <div
            className="hotspot uae"
            onMouseEnter={() => setCountry("United Arab Emirates")}
            onMouseLeave={() => setCountry("")}
          />

          <div
            className="hotspot brazil"
            onMouseEnter={() => setCountry("Brazil")}
            onMouseLeave={() => setCountry("")}
          />

          {country && (
            <div
              className="tooltip"
              style={{
                left: position.x + 15,
                top: position.y - 10,
              }}
            >
              {country}
            </div>
          )}
        </div>

        <p className="note">
          Hover your mouse over the map to know the country name.
        </p>

      </section>


      <section className="last-section">
        <div className="last-section-container">

          <div className="last-section-heading">
            <h2>Why the World Chooses Indian Products</h2>

            <p>
              India has earned a strong reputation as one of the world's leading
              sourcing hubs for premium agricultural products, spices, herbs, and
              food ingredients. With abundant natural resources, skilled producers,
              and internationally compliant manufacturing, India continues to be the
              preferred choice for global importers.
            </p>
          </div>

          <div className="last-section-grid">

            <div className="last-section-card">
              <div className="last-section-icon">
                <img src={richAgri} alt="Agriculture" />
              </div>

              <div className="last-section-content">
                <h3>Rich Agricultural Heritage</h3>

                <p>
                  India's diverse climate and fertile lands produce a wide variety of
                  high-quality spices, fruits, and agricultural products renowned for
                  their authenticity and natural goodness.
                </p>
              </div>
            </div>

            <div className="last-section-card">
              <div className="last-section-icon">
                <img src={exportGlobal} alt="Export" />
              </div>

              <div className="last-section-content">
                <h3>Global Export Excellence</h3>

                <p>
                  As one of the world's largest exporters of food ingredients and
                  spices, India consistently supplies international markets with
                  products that meet global quality standards.
                </p>
              </div>
            </div>

            <div className="last-section-card">
              <div className="last-section-icon">
                <img src={international} alt="Compliance" />
              </div>

              <div className="last-section-content">
                <h3>International Compliance</h3>

                <p>
                  Indian manufacturers follow strict food safety regulations, quality
                  certifications, and export guidelines, ensuring products are ready
                  for global distribution.
                </p>
              </div>
            </div>

            <div className="last-section-card">
              <div className="last-section-icon">
                <img src={reliable} alt="Supply Chain" />
              </div>

              <div className="last-section-content">
                <h3>Reliable Supply Chain</h3>

                <p>
                  With world-class ports, advanced logistics infrastructure, and
                  efficient export systems, India enables smooth and timely deliveries
                  to customers across the globe.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default Home;