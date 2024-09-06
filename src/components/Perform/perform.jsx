import React from "react";

const Perform = () => {
  return (
    <div>
      <h1 className="text-[2rem] text-[#B28C46] text-center mt-[8rem] mb-[4rem]">TRADE OUR TOP PERFORMING PRODUCTS</h1>
      <div className="bg-[#F1F3F9] py-[1rem] px-[10rem]">
        <h1 className="text-[2rem] text-[#B28C46] text-center mt-[3rem] mb-[0.7rem]">EXPLORE OPTIONS TRADING</h1>
        <p className="text-center text-[#626B9D] text-[0.7rem] font-semibold mb-2">OPTIONS TRADING</p>
        <p className="text-center text-[#626B9D] text-[0.7rem] font-semibold">TRADING STEPS</p>
        <div className="flex items-center">
          <div className="perform-container-1 order-2 w-[50%] flex-none">
            <img src="/perform/perform-1.png"/>
            <img src="/perform/movie-1.png" className="moving-1-image animate-moveImage"/>
            <img src="/perform/movie-2.png" className="moving-2-image animate-secondMoveImage"/>
          </div>
          <div>
            <h3 className="text-[#03105F] font-bold text-[1rem] mb-[1rem]">WHAT IS OPTIONS TRADING?</h3>
            <p className="text-[#03105F] text-[0.9rem] font-medium mb-[1rem]">
              Options trading is when you buy or sell an underlying asset at a
              pre-negotiated price by a certain future date.
            </p>
            <p className="text-[#03105F] text-[0.9rem] font-medium mb-[1rem]">
              Trading stock options can be complex — even more so than stock
              trading. When you buy a stock, you just decide how many shares you
              want, and your broker fills the order at the prevailing market
              price or a limit price you set. Options trading requires an
              understanding of advanced strategies, and the process for opening
              an options trading account includes a few more steps than opening
              a typical investment account.
            </p>
            <p className="text-[#03105F] text-[0.9rem] font-medium mb-[1rem]">
              “You can use options to speculate and to gamble, but the reality
              is ... the best use of options is to protect your downside,” he
              says. "Options are one way to generate income when the markets
              aren’t going up.”
            </p>
            <p className="text-[#03105F] text-[0.9rem] font-medium mb-[1rem]">
              According to the Options Clearing Corporation, there were 939
              million options contracts traded in March 2022, up 4.5% compared
              with March 2021. It was second-highest trading month on record.
            </p>
          </div>
        </div>
        <h3 className="text-[#03105F] font-bold text-[1rem] text-center">HOW TO TRADE OPTIONS IN FOUR STEPS</h3>
        <div className="flex">
          <div className="order-2 w-[50%] flex-none">
            <img src="/perform/perform-2.png"/>
            <img />
          </div>
          <ol className="custom-list text-[#03105F] text-[0.9rem] font-medium">
            <li>
              <span className="font-bold text-[1rem]">Investment objectives</span>
              <br />
              This usually includes income, growth, capital preservation or
              speculation.
            </li>
            <li>
              <span className="font-bold text-[1rem]">Trading experience</span>
              <br />
              The broker will want to know your knowledge of investing, how long
              you’ve been trading stocks or options, how many trades you make
              per year and the size of your trades.
            </li>
            <li>
              <span className="font-bold text-[1rem]">Personal financial</span>
              <br />
              information Have on hand your liquid net worth (or investments
              easily sold for cash), annual income, total net worth and
              employment information.
            </li>
            <li>
              <span className="font-bold text-[1rem]">The types of options you want to trade</span>
              <br />
              For instance, calls, puts or spreads. And whether they are covered
              or naked. The seller or writer of options has an obligation to
              deliver the underlying stock if the option is exercised. If the
              writer also owns the underlying stock, the option position is
              covered. If the option position is left unprotected, it's naked.
            </li>
          </ol>
        </div>
        <button></button>
      </div>
    </div>
  );
};

export default Perform;
