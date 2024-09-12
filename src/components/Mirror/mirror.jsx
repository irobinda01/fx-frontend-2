import React from "react";

const Mirror = () => {
  return (
    <div className='lg:h-[85vh] bg-[url("/mirror-img.jpg")] bg-cover bg-center bg-no-repeat'>
      <div className="text-white bg-black opacity-85 h-[100%] w-[100%] lg:text-center lg:py-40 lg:px-52 
      p-4 md:py-8 md:px-12">
        <h1 className="text-[1.4rem] lg:text-[2.1rem] mb-[1.5rem]">
          MIRROR YOUR DESIRED EXPERT
        </h1>
        <p className="lg:text-[1.1rem] lg:font-medium">
          Bitstock Assets LLC offers automated Mirror trading services across
          all sectors, Find your desired expert, get your account linked to
          their services and mirror the trades, learn as well through the
          trades, across various Market and sectors, Options, derivatives,
          currency pairs, Swings/ Scalp trading, Crypto currencies, Forex and
          Index. With over 90% protection on trading capital with stop loss
          softwares and indicators. At Bitstock Assets LLC, Clients capital
          security is always our major Concern.
        </p>
        <button>Read More</button>
      </div>
    </div>
  );
};

export default Mirror;
