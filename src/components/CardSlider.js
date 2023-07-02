import React, { useState } from "react";
import "../CardSlider.css";
import img from "../assets/frontImg.jpg"

const CardSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };

  const cards = [
    {
      name: "David Dell",
      description:
        "The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.",
    },
    {
      name: "David Dell",
      description:
        "The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.",
    },
    {
      name: "David Dell",
      description:
        "The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.",
    },
    {
      name: "David Dell",
      description:
        "The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.",
    },
    {
      name: "David Dell",
      description:
        "The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.",
    },
    {
      name: "David Dell",
      description:
        "The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.",
    },

    // Add more card objects as needed
  ];

  return (
    <div className="slide-container">
      <h2 className="slider-heading">Our Best Recruiters</h2>
      <div className="slide-content">
        <div className="card-wrapper">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`card ${index === activeIndex ? "active" : ""}`}
            >
              <div className="image-content">
                <span className="overlay"></span>
                <div className="card-image">
                  <img src={img} alt="" className="card-img" />
                </div>
              </div>
              <div className="card-content">
                <h2 className="name">{card.name}</h2>
                <p className="description">{card.description}</p>
                <button className="button">View More</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="swiper-navBtn" onClick={prevSlide}>
        &lt;
      </div>
      <div className="swiper-navBtn" onClick={nextSlide}>
        &gt;
      </div>
    </div>
  );
};

export default CardSlider;
