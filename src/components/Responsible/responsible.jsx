import React from "react";

const Responsible = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center px-4 md:px-[3rem] lg:px-[5rem] lg:pt-[5.5rem] pb-[2rem]">
      <div className="flex-none lg:w-[47%]">
        <h1 className="text-[1.5rem] font-medium mb-4 mt-8 lg:mb-[1.5rem]">Responsible Investing</h1>
        <div className="h-[2px] w-[14rem] bg-[#008000] mb-4 lg:mb-[1.5rem]"></div>
        <p className="text-base lg:text-lg mb-4">
          At Bitstock Assets LLC Finance we consider environmental, social and
          governance (ESG) issues throughout the investment decision-making
          process and life-cycle. We believe that robust and well-implemented
          ESG policies and practices contribute directly to the long-term
          success and sustainability of our portfolio companies. Implemented
          effectively, they help us to protect and enhance reputation and
          financial performance whilst creating stronger, more valuable
          companies which can create benefits for all stakeholders: from
          employees to customers, suppliers to shareholders, and the wider
          community at large.
        </p>
        <p className="text-lg">
          We review our approach to ESG regularly to ensure that it continues to
          reflect best practice.
        </p>
      </div>
      <div className="flex-none mt-4 lg:w-[50%]">
        <img src="/responsible-img.jpg" />
      </div>
    </div>
  );
};

export default Responsible;
