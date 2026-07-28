import React, { useState } from "react";
import "./InquiryPopup.css";

const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbywcUsXyI2z1hZQpU8bnvPyGJz3GP9YhEx_qBHptPk06J8VcdzUqRV57ivRKRoXilxb/exec";

const InquiryPopup = ({ isOpen, onClose }) => {
//   const [showPopup, setShowPopup] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    location: "",
    product: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    if (!formData.name.trim()) {
      alert("Please enter your name.");
      return false;
    }

    if (!/^[0-9]{10}$/.test(formData.contact)) {
      alert("Please enter a valid 10-digit contact number.");
      return false;
    }

    if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      alert("Please enter a valid email address.");
      return false;
    }

    if (!formData.location.trim()) {
      alert("Please enter your location.");
      return false;
    }

    if (!formData.product.trim()) {
      alert("Please enter the product inquiry.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      const response = await fetch(WEB_APP_URL, {
        method: "POST",
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        alert("Inquiry submitted successfully!");

        setFormData({
          name: "",
          contact: "",
          email: "",
          location: "",
          product: "",
        });

        onClose();
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong.");
    }

    setLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-container">

        <button
          className="close-btn"
          onClick={onClose}
        >
          ×
        </button>

        <h2>Product Inquiry</h2>

        <p className="subtitle">
          Fill in your details and our team will contact you shortly.
        </p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="tel"
            name="contact"
            placeholder="Contact Number"
            value={formData.contact}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email ID"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
          />

          <textarea
            rows="4"
            name="product"
            placeholder="Product Inquiry"
            value={formData.product}
            onChange={handleChange}
          ></textarea>

          <button
            className="submit-btn"
            type="submit"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Inquiry"}
          </button>

        </form>

      </div>
    </div>
  );
};

export default InquiryPopup;