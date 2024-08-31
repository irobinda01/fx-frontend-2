import React from 'react'
import { useState } from 'react'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

const ImageSlider = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = ()=> {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? props.slider.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === props.slider.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  return (
    <div className='slider-box'>
      <div className='left-arrow-styles' onClick={goToPrevious}><FaRegArrowAltCircleLeft /></div>
      <div className='right-arrow-styles' onClick={goToNext}><FaRegArrowAltCircleRight /></div>
      <div className="background-img" style={{backgroundImage: `url(${props.slider[currentIndex].url})`}}>
        <div className='background-box'>
          <h1 className='text-4xl pb-5'>{props.slider[currentIndex].head}</h1>
          <p className='text-2xl pb-5'>{props.slider[currentIndex].body}</p>
          <p className='text-2xl pb-5'>{props.slider[currentIndex].foot}</p>
          <div className='background-btn-box'>
            <button className='background-btn1 text-3xl'>LOGIN</button>
            <button className='background-btn2 text-2xl'>GET STARTED</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageSlider