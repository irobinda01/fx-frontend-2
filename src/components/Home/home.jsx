import React from "react";
import ImageSlider from "./imageSlider";
import Section from "./small_section";

const Home = () => {
  const datas = [
    {
      id: 0,
      url: "/background/back-img1.jpg",
      head: "Your future is owned by you",
      body: "Bitstock Assets LLC was built to help you be a more confident investorand set you on the path to secure your financial future.",
      foot: "Step to Financial Freedom",
    },
    {
      id: 1,
      url: "/background/back-img2.jpg",
      head: "Smart Diversified Investments",
      body: "Bitstock Assets LLC was founded to provide an alternative to the volatile investment market for people.",
      foot: "",
    },
    {
      id: 2,
      url: "/background/back-img3.jpg",
      head: "Invest with purpose using AI",
      body: "Effortless Trading, Consistent Gains - AI Brilliance",
      foot: "Bitstock Assets uses advanced Ai robots trained on extensive trading data and algorithms to analyze market trends and execute profitable trades with high precision. Our AI bots maintain an average 5% daily PNL.",
    },
  ];


  return (
    <div>
      <ImageSlider slider={datas}/>
      <Section />
    </div>
  );
};

export default Home;
