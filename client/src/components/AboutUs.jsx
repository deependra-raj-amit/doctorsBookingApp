import React from "react";
import image from "../images/aboutimg.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img
              src={image}
              alt="hero"
            />
          </div>
          <div className="hero-content">
            <p>
            At DocBook, we believe healthcare should be simple, accessible, and trusted. Our platform connects patients with top-rated doctors for in-person and virtual appointments, providing a reliable and convenient way to access medical care. Driven by innovation and a commitment to patient-centered service, we make it easy to find, book, and manage appointments with healthcare providers across various specialties—all in one place.

Your health, our mission.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
