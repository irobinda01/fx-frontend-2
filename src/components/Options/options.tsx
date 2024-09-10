import React from "react";

const Options = () => {
  return (
    <div
      className="options-box px-[1rem] py-[1rem] md:px-[3rem] md:pb-12 lg:px-[2rem] lg:py-[2.5rem] flex flex-col 
    lg:flex-row lg:justify-between text-[#fff] w-full"
    >
      <div className="w-[100%] lg:w-[50%] flex-none">
        <div>
          <img src="/options/liquid.jpg" className="" />
        </div>
        <div className="mt-8">
          <h1 className="font-bold text-center lg:text-start text-[1.3rem] mb-2 lg:mt-[2rem] 
          lg:mb-[3rem]">
            How to trade options in four steps
          </h1>
          <ul className="pl-5 space-y-2 mb-10">
            <li className="relative before:content-['★'] before:absolute before:-left-5">
              <span className="font-bold text-[1rem]">
                Investment objectives
              </span>
              . - This usually includes income, growth, capital preservation or
              speculation.
            </li>
            <li className="relative before:content-['★'] before:absolute before:-left-5">
              <span className="font-bold text-[1rem]">Trading experience</span>.
              - The broker will want to know your knowledge of investing, how
              long you’ve been trading stocks or options, how many trades you
              make per year and the size of your trades.
            </li>
            <li className="relative before:content-['★'] before:absolute before:-left-5">
              <span className="font-bold text-[1rem]">
                Personal financial information
              </span>
              . - Have on hand your liquid net worth (or investments easily sold
              for cash), annual income, total net worth and employment
              information.
            </li>
            <li className="relative before:content-['★'] before:absolute before:-left-5">
              <span className="font-bold text-[1rem]">
                The types of options you want to trade
              </span>
              . - For instance, calls, puts or spreads. And whether they are
              covered or naked. The seller or writer of options has an
              obligation to deliver the underlying stock if the option is
              exercised. If the writer also owns the underlying stock, the
              option position is covered. If the option position is left
              unprotected, it's naked.
            </li>
          </ul>
        </div>
      </div>
      <div className="w-[100%] lg:w-[45%] flex-none">
        <h1 className="font-bold text-center lg:text-start text-[1.3rem] mb-2 lg:mb-[2rem] lg:mt-[3rem]">
          Options trading
        </h1>
        <p className="pb-[1.2rem]">
          Options trading is when you buy or sell an underlying asset at a
          pre-negotiated price by a certain future date.
        </p>
        <p className="pb-[1.2rem]">
          Trading stock options can be complex — even more so than stock
          trading. When you buy a stock, you just decide how many shares you
          want, and your broker fills the order at the prevailing market price
          or a limit price you set. Options trading requires an understanding of
          advanced strategies, and the process for opening an options trading
          account includes a few more steps than opening a typical investment
          account.
        </p>
        <p className="pb-[1.2rem]">
          In 2022, the stock market has seen its share of highs and lows amid
          concerns about inflation, Russia's invasion of Ukraine and rising oil
          prices. When the market is volatile, options trading often increases,
          says Randy Frederick, managing director of trading and derivatives
          with the Schwab Center for Financial Research.
        </p>
        <p className="pb-[1.2rem]">
          “You can use options to speculate and to gamble, but the reality is
          ... the best use of options is to protect your downside,” he says.
          "Options are one way to generate income when the markets aren’t going
          up.”
        </p>
        <p className="pb-[1.2rem]">
          According to the Options Clearing Corporation, there were 939 million
          options contracts traded in March 2022, up 4.5% compared with March
          2021. It was second-highest trading month on record.
        </p>
      </div>
    </div>
  );
};

export default Options;
