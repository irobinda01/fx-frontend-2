import React from "react";

const Who = () => {
  return (
    <div className="">
      <h1 className="text-[1.5rem] font-bold mt-[3rem] mb-[1.5rem] lg:text-[2rem] lg:font-semibold text-center 
      lg:my-[3.5rem]">WHO WE ARE</h1>
      <div className="flex lg:flex-row">
        <div className="bg-[url('/who/who-image-3.jpg')] bg-cover bg-center bg-no-repeat flex-none w-[100%]
        lg:w-[50%]">
          <div className="text-[rgb(255,255,255)] bg-black bg-opacity-50 h-[100%] lg:pl-[5rem] lg:py-[5rem] 
          lg:pr-[1rem] p-[2rem]">
            <h2 className="text-[1.35rem] mb-[1.5rem] lg:text-[1.5rem] lg:mb-[3rem]">Welcome to Bitstock Assets LLC</h2>
            <p>
              We begin by getting a deep understanding of your personal situation,
              goals and needs. Bitstock Assets LLC Finance uses this information
              in our top-down investment process to first determine the mix of
              Alternative funds, fixed income, cash or other securities that
              maximizes the likelihood of reaching your financial goals.
            </p>
            <p>
              We believe this decision has the biggest impact on your returns over
              time. From there, we emphasise parts of the market we believe will
              perform best, such as different countries and assets market sectors.
              Finally, we analyze individual stocks and other securities and
              select those we believe will perform best. We believe this active,
              flexible approach to portfolio management enables us to capitalize
              on global investing opportunities and help you achieve your
              financial goals.
            </p>
          </div>
        </div>
        <div className="hidden lg:block">
          <img src="/who/who-image-2.jpg" className="flex-none h-[100%]"/>
        </div>
      </div>
    </div>
  );
};

export default Who;
