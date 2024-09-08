import React, { useEffect } from "react";
import { useState } from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

const ImageSlider = ({ slider }) => {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  let timeOut = null;

  useEffect(() => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        moveRight();
      }, 3500);
  });

  const moveLeft = () => {
    setCurrent(current === 0 ? slider.length - 1 : current - 1);
  };
  const moveRight = () => {
    setCurrent(current === slider.length - 1 ? 0 : current + 1);
  };

  return (
    <div
      className="carousel"
      onMouseEnter={() => {
        setAutoPlay(false);
        clearTimeout(timeOut)
      }}
      onMouseLeave={() => {
        setAutoPlay(true);
      }}
    >
      <div className="carousel-wrapper">
        {slider.map((data, index) => {
          return (
            <div
              className={
                index === current ? "carousel_card carousel_card_active" : "carousel_card"
              }
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
        <div className="left-arrow-styles" onClick={moveLeft}>
          <FaRegArrowAltCircleLeft />
        </div>
        <div className="right-arrow-styles" onClick={moveRight}>
          <FaRegArrowAltCircleRight />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
