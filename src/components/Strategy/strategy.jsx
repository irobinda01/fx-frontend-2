import React from "react";
import { FaUmbrella } from "react-icons/fa";
import { LiaGripfire } from "react-icons/lia";
import { BsPencilSquare } from "react-icons/bs";
import { FaRenren } from "react-icons/fa";

const Strategy = () => {
  const data = [
    {
      icon: <FaUmbrella className="text-[#6C0BA9] text-[2rem] my-[3rem] group-hover:text-[#fff]
      transition-all duration-500"/>,
      discription:
        "We know that established branding enhances the value and dependability of investments.",
    },
    {
      icon: <BsPencilSquare className="text-[#6C0BA9] text-[2rem] my-[3rem] group-hover:text-[#fff]
      transition-all duration-500"/>,
      discription:
        "We identify businesses with strong management teams and a demonstrated record of sustained growth and strong financial returns.",
    },
    {
      icon: <LiaGripfire className="text-[#6C0BA9] text-[2rem] my-[3rem] group-hover:text-[#fff]
      transition-all duration-500"/>,
      discription:
        "We have a unique network of contacts with government and business leaders throughout the United States and around the world.",
    },
    {
      icon: <FaRenren className="text-[#6C0BA9] text-[2rem] my-[3rem] group-hover:text-[#fff]
      transition-all duration-500"/>,
      discription:
        "We seek out opportunities for capitalizing on untapped value that others have failed to recognize.",
    },
  ];

  const strategyElement = data.map((box, index) => {
    return(
      <div key={index} className="group mx-[auto] border-2 px-5 pb-5 w-[80%] lg:w-[21%]">
        <div className="flex items-start justify-center">{box.icon}</div>
        <p className="text-[0.8rem] text-center">{box.discription}</p>
      </div>
    )
  })

  return (
    <div className="px-[2rem] lg:px-[5rem]">
      <h1
        className="font-bold text-center text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] pt-[2rem] pb-[1rem]
      lg:pt-[8rem] lg:pb-[2.5rem]"
      >
        INVESTMENT STRATEGY
      </h1>
      <p className="text-[1.2rem] text-center font-5 mb-[1rem]">
        We seek out business teams with the coherence and expertise to develop a
        project capable of reaping long-term financial returns, which has
        positioned us as a firm with reliable investment expertise and
        dependable profitability.
      </p>
      <div className="my-[0] lg:my-[5rem] flex justify-between gap-5 flex-col lg:flex-row">{strategyElement}</div>
    </div>
  );
};

export default Strategy;
