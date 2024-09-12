import React from "react";

const Management = () => {
  return (
    <div className="flex">
      <div className="w-[70%] bg-gradient-to-tr from-[#8667E6] to-[#6D42AC]">
        <h1>Professional Portfolio Management</h1>
        <p>
          Bitstock Assets LLC believes portfolio management is far more than
          just buying stocks and bonds and hoping they do well. We combine a
          tested "top-down" investment approach with personalized planning to
          build a portfolio tailored to your long-term financial goals. Our
          proven approach has attracted over $649 billion* from a global base of
          individual and institutional clients.
        </p>
      </div>
      <div className="lg:order-first">
        <img src="management-img.jpg" />
      </div>
    </div>
  );
};

export default Management;
