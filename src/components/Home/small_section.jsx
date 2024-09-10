import React from "react";
import { AiOutlineBarChart } from "react-icons/ai";
import { FaRecycle } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";

const Section = () => {
  return (
    <div className="relative flex flex-col lg:flex-row lg:h-[11rem] my-0 mx-[1rem] md:mx-[3rem] lg:mx-[6rem] text-white">
      <div className="absolute top-[13px] left-[40%] lg:w-[1px] h-[150px] bg-white"></div>
      <div className="absolute top-[13px] left-[72%] lg:w-[1px] h-[150px] bg-white"></div>
      <div className="hidden lg:flex lg:w-[15%] justify-center items-center bg-gradient-to-tr from-[#6D42AC] to-[#8667E6]">
        <AiOutlineBarChart className="icon-bar-chart" />
      </div>
      <div className="lg:w-[25%] pt-[2rem] px-[1.5rem] text-center text-white text-[1.1rem] font-[500] 
      border-b-[1px] border-b-white bg-[#1C212E]">
        <h5 className="lg:text-[0.9rem] lg:font-[700]">ASSETS MANAGEMENT</h5>
        <p className="m-[0.5rem]">
          Bitstock Assets LLC has a long track record of managing the
          complexities of assets.
        </p>
      </div>
      <div className="lg:w-[30%] bg-[#1C212E] flex justify-center items-center gap-[1.3rem] py-[1rem]
      border-b-[1px] border-b-white">
        <FaRecycle className="text-[1.5rem] lg:text-[4rem] lg:ml-[0.5rem]" />
        <h5>INSTITUTIONAL MANAGEMENT</h5>
      </div>
      <div className="lg:w-[30%] bg-[#1C212E] flex justify-center items-center gap-[1.3rem] py-[1rem]
      border-b-[1px] border-b-white">
        <BsPencilSquare className="text-[1.5rem] lg:text-[3rem]" />
        <h5>WEALTH MANAGEMENT</h5>
      </div>
    </div>
  );
};

export default Section;
