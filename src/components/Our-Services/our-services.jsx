import React from "react";

const Services = () => {
  const services = [
    {
      id: 0,
      image: "/services/ser-2.jpg",
      heading: "FOREIGN EXCHANGE",
      discription:
        "Bitstock Assets LLC finance offers a broad array of professional services and access to the global foreign exchange markets for commercial and institutional clients.",
    },
    {
      id: 1,
      image: "/services/ser-1.jpg",
      heading: "REAL ESTATE",
      discription:
        "As one of the world's largest investors in real estate, we own and operate iconic properties in the world's most dynamic markets.",
    },
    {
      id: 2,
      image: "/services/ser-3.jpg",
      heading: "INFRASTRUCTURE",
      discription:
        "We are one of the world's largest infrastructure investors, owning and operating assets across the utilities, transport and energy.",
    },
    {
      id: 3,
      image: "/services/ser-4.jpg",
      heading: "FIXED INCOME",
      discription:
        "We meet our investor's needs by offering a broad fixed income solution set and targeted global market intelligence.",
    },
    {
      id: 4,
      image: "/services/ser-5.jpeg",
      heading: "STOCK",
      discription:
        "Stock trading involves buying and selling shares in companies in an effort to make money on daily changes in price. Traders watch the short-term price fluctuations of these stocks closely and then try to buy low and sell high.",
    },
    {
      id: 5,
      image: "/services/ser-6.jpg",
      heading: "OPTIONS COPY TRADING",
      discription:
        "With over 500+ registered and regulated traders on Bitstock Assets LLC, you get the liberty to beat the PDT and day trading requirements by getting started with our copy trading tool below the $25k minimum requirement, get a more advanced view of the Market data Center, more enhanced pricing and Mirror your desired/ dream expert on the best linked platform like Thinkorswim, Webull, Robinhood. At Bitstock Assets LLC we thrive to bring you the modern trading experience.",
    },
  ];

  const servicesElement = services.map((service, index) => {
    return (
      <div
        key={index}
        className="flex flex-col flex-grow-0 flex-shrink-0 bg-[#F9F9F9] w-[100%] md:mx-0 md:min-w-[40%]
      lg:min-w-[31%] md:max-w-[31%] lg:-max-w-[31%] py-[1.5rem] lg:py-[3rem] px-[1.3rem] shadow-[0_0_9px_0_rgba(0,0,0,0.2)] 
      hover:shadow-[0_0_9px_0_rgba(0,0,0,0.75)] group"
      >
        <img src={service.image} alt="image of the services" />
        <div>
          <h3
            className="text-center pt-[2.5rem] font-bold text-[1rem] md:text-[1.1rem] 
          lg:text-[1.2rem] group-hover:text-[#6C0BA9]"
          >
            {service.heading}
          </h3>
          <p>{service.discription}</p>
          <button>Read more...</button>
        </div>
      </div>
    );
  });

  return (
    <div className="flex flex-col px-[1rem] lg:px-[5rem]">
      <h1
        className="text-center font-extrabold text-[1.2rem] md:text-[1.2rem] lg:text-[1.4rem] pb-5"
      >
        OUR SERVICES
      </h1>
      <div
        className="flex flex-col lg:flex-row flex-wrap gap-10 lg:gap-8 items-start md:flex-row md:justify-evenly
      justify-center mt-3"
      >
        {servicesElement}
      </div>
    </div>
  );
};

export default Services;
