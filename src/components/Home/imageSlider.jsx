import React from "react";
import { useState } from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

const ImageSlider = ({ slider }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="carousel">
      <div className="carousel-wrapper">
        {slider.map((data, index) => {
          return (
            <div
              className={index === 0 ? "carousel_card" : "carousel_card_none"}
              key={index}
              style={{
                backgroundImage: `url(${data.url})`,
              }}
            >
              <div className="carousel-box">
                <h1 className="text-4xl pb-5">{data.head}</h1>
                <p className="text-2xl pb-5">{data.body}</p>
                <p className="text-2xl pb-5">{data.foot}</p>
                <div className="carousel-btn-box">
                  <button className="carousel-btn1 text-3xl">LOGIN</button>
                  <button className="carousel-btn2 text-2xl">
                    GET STARTED
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="left-arrow-styles">
        <FaRegArrowAltCircleLeft />
      </div>
      <div className="right-arrow-styles">
        <FaRegArrowAltCircleRight />
      </div>
    </div>
  );
};

export default ImageSlider;
