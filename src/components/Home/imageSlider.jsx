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
      className="flex w-[100%] h-[80vh]"
      onMouseEnter={() => {
        setAutoPlay(false);
        clearTimeout(timeOut);
      }}
      onMouseLeave={() => {
        setAutoPlay(true);
      }}
    >
      <div className="w-[100%] h-[80vh] relative">
        {slider.map((data, index) => {
          return (
            <div
              className={
                index === current
                  ? "carousel_card carousel_card_active"
                  : "carousel_card"
              }
              key={index}
              style={{
                backgroundImage: `url(${data.url})`,
              }}
            >
              <div className="bg-black bg-opacity-50 text-[#fff] p-4 pt-6 lg:p-[20px] w-[80%] m-auto mt-[3rem] lg:mt-[11.5rem] rounded-[10px]">
                <h1 className="text-xl font-medium lg:text-4xl lg:pb-5">{data.head}</h1>
                <p className="text-lg lg:text-2xl lg:pb-5">{data.body}</p>
                <p className="text-lg lg:text-2xl lg:pb-5">{data.foot}</p>
                <div className="flex gap-[10px] pt-[1rem] pb-[0.6rem]">
                  <button
                    className="py-3 px-4 rounded-[5px] border-none lg:py-[30px] lg:px-[50px] font-semibold text-[#fff] bg-gradient-to-tr from-[#6D42AC] to-[#8667E6] 
                  lg:text-3xl border-black border-[1px] lg:rounded-[30px] cursor-pointer transition-all duration-300"
                  >
                    LOGIN
                  </button>
                  <button 
                    className=" py-3 px-4 rounded-[5px] border-none lg:py-[30px] lg:px-[50px] font-semibold text-[#fff] bg-black lg:text-2xl border-white border-[2px]
                    lg:rounded-[30px] cursor-pointer transition-all duration-300 hover:border-black 
                    hover:bg-gradient-to-tr from-[#6D42AC] to-[#8667E6]">
                    GET STARTED
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        <div
          className="absolute top-[50%] left-[7px] lg:left-[32px] text-[30px] lg:text-[45px] text-[#fff] z-10 transform -translate-y-1/2
        cursor-pointer"
          onClick={moveLeft}
        >
          <FaRegArrowAltCircleLeft />
        </div>
        <div
          className="absolute top-[50%] right-[7px] lg:right-[32px] text-[30px] lg:text-[45px] text-[#fff] z-10 transform -translate-y-1/2
        cursor-pointer"
          onClick={moveRight}
        >
          <FaRegArrowAltCircleRight />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
