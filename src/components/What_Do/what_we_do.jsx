import React from "react";

const What = () => {
  return (
    <div className="mb-10 lg:mx-[6rem] lg:mb-[6rem]">
      <h1 className="my-6 mt-8 font-extrabold text-[1.2rem] lg:text-[2rem] lg:font-[400] text-center lg:my-[3.5rem]">
        WHAT WE DO
      </h1>
      <div className="px-4 py-4 md:px-12 lg:p-0 what-text-box">
        <div className="text-[#000] isolate lg:text-[2rem] lg:font-[400] lg:w-[70%]">
          <p>
            These days, it's more important than ever to have a plan. Our
            version of financial planning not only gives you the confidence to
            know you're ready for anything, but is also designed to help you
            reach all your goals in the days ahead.
          </p>
          <div className="flex flex-col justify-center items-center lg:flex-row gap-1 lg:gap-4 w-auto h-auto
          lg:justify-start lg:items-end">
            <button
              className="py-3 lg:px-6 lg:py-5 mt-2 lg:mt-4 lg:text-[0.9rem] font-medium text-white md:w-[70%]
            hover:bg-[#6C0BA9] bg-gradient-to-tr from-[#6D42AC] to-[#8667E6] border-[3px] border-[#6C0BA9] 
            rounded cursor-pointer hover:from-transparent hover:to-transparent w-[100%] lg:w-auto"
            >
              View Certification of Incorporation
            </button>
            <button
              className="py-3 lg:px-10 lg:py-5 mt-2 mb-4 lg:mt-4 lg:text-[0.9rem] font-medium text-white md:w-[70%] 
            hover:bg-[#6C0BA9] bg-gradient-to-tr from-[#6D42AC] to-[#8667E6] border-[3px] border-[#6C0BA9] 
            rounded cursor-pointer hover:from-transparent hover:to-transparent w-[100%] lg:w-auto lg:mb-0"
            >
              USER MANUAL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default What;
