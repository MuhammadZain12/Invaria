import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import join from "../images/join_pic.png";
import BigButton from "../components/UI/BigButton";
import tokenization from "../images/tokenization.png";
import circlelg2 from "../images/circle-lg2.png";
import arrow from "../images/arrow-right.png";
import classes from "./Index.module.css";
import trustMinimized from "../images/trust-minimized.png";
import phase2 from "../images/phase2.0dd674fc.png";
import phase3 from "../images/phase3.ade748b9.png";

function Index(props) {
  let [background, setBackground] = useState("bg-transparent");
  document.addEventListener("scroll", () => {
    if (window.scrollY < 20) {
      if (window.scrollY == 0 && background != "bg-transparent") {
        setBackground("bg-transparent");
      } else {
        setBackground("bg-invar-light-dark");
      }
    }
  });

  const [partners, setPartners] = useState([
    "partner1.png",
    "partner2.png",
    "partner3.png",
    "partner4.png",
    "partner5.png",
    "partner6.png",
    "partner7.png",
    "partner8.png",
    "partner9.png",
    "partner10.png",
    "partner11.png",
  ]);

  return (
    <div className="bg-black">
      <Header className={background} />
      <div className="shadow-[inset_2px_-20px_60px_40px_rgba(0,0,0,0.9)] bg-gradient-to-b from-primary via-invar-light-dark to-black mt-0">
        <div className={`bg-bg1 bg-center bg-cover `}>
          <div className="pt-[150px] justify-between ml-20 pb-32">
            <h1 className="font-[700] text-[60px] md:leading-[60px] text-white w-[500px]">
              Bring Real World Asset Generate Real Value
            </h1>
            <p className="md:w-[500px] text-white my-5 text-lg leading-snug">
              Invest real estate and valuable assets world-wide easily. InVar
              Finance support investor accumulate wealth, help business to grow
              by using blockchain technology in a transparent and efficiency
              way.
            </p>
            <BigButton>View RWAs</BigButton>
            <div className="w-[19rem] h-max absolute top-80 right-0">
              <div className="w-[1px] h-32 mt-12 absolute bg-white" />
              <div className="absolute right-0">
                <img src={join} className="w-72 h-auto" alt="simple pic" />
                <p className="text-white">Dive into InVaria2222 meta-journey</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#18141b] bg-contain my-0 select-none">
        <div className="bg-black bg-opacity-0 py-8 px-11">
          <div className="w-[70%] text-white flex flex-row border-invar-light border border-l-8 border-l-green-600 bg-invar-light-dark md:ml-[16%] py-2 px-3">
            <div className=" text-4xl w-max border-invar-light border py-3 px-6">
              <p className="mb-2">+</p>
            </div>
            <p className="my-auto ml-5"> Under Development </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-primary to-black py-32 px-14 text-white">
        <div className="flex flex-row">
          <div className="w-[25rem] ml-32">
            <h1 className="font-bold text-4xl mb-10">
              Explore the Benefits from Real-World-Asset Tokenization
            </h1>
            <p className="my-4 text-lg">
              InVaria2222 is a RWA-based, tokenization world with the goal of
              constructing connections between real-world and digital economies.
              In addition, InVaria2222 is positioned as an experiment flagship
              of InVar Finance
            </p>
            <p className="my-6 text-lg">
              In InVaria, there are vast opportunities to invest in fascinating
              properties that you may never have had a chance to invest in
              before! Get rid of annoying procedures, start accumulate your
              wealth by owning your first REAL NFT!
            </p>
          </div>
          <div className="ml-12 relative">
            <img src={tokenization} />
            <div className="bg-gray-500 rounded-2xl w-max px-8 py-4 absolute top-[50%] right-72 hover:bg-red-600 cursor-pointer ">
              <svg
                width="18"
                height="21"
                viewBox="0 0 18 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.6666 10.3333L0.599959 20.1868L0.59996 0.479899L17.6666 10.3333Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="mt-48 text-center mb-20">
          <h1 className="font-bold text-4xl mb-8">How It Works</h1>
          <div className="flex flex-row justify-evenly select-none">
            <div className="flex flex-col relative w-[230px]">
              <div>
                <h3
                  className={`${classes.circleHeading} mx-auto relative top-[50%]`}
                >
                  Do KYC First
                </h3>
                <img className="mx-auto" src={circlelg2} />
              </div>
              <p className="relative top-10 text-left">
                Connect wallet and complete identity verification to access RWA
                tokenization investment opportunities.
              </p>
            </div>
            <img className="my-auto relative bottom-10" src={arrow} />
            <div className="flex flex-col justify-start relative w-[270px]">
              <div>
                <h3
                  className={`${classes.circleHeading} mx-auto relative top-[50%]`}
                >
                  Mint RWA-NFT
                </h3>
                <img className="mx-auto" src={circlelg2} />
              </div>
              <p className="relative top-10 text-left">
                Mint NFT by using USDC stablecoin. NFT is stored in your wallet,
                can be held, sold, traded, or even redeemed after specific time.
              </p>
            </div>
            <img className="my-auto relative bottom-10" src={arrow} />
            <div className="flex flex-col relative w-[250px]">
              <div className="my-auto relative top-[-10%]">
                <h3
                  className={`w-[80%] ${classes.circleHeading} mx-auto relative top-[50%]`}
                >
                  Finance & Investment
                </h3>
                <img className="mx-auto" src={circlelg2} />
              </div>
              <p className="text-left">
                The minting cost is transferred to fiat for financing/investing
                in the underlying asset, which is overseen by accredited parties
                and us.
              </p>
            </div>
            <img className="my-auto relative bottom-10" src={arrow} />
            <div className="flex flex-col relative w-[230px]">
              <div className="my-auto relative top-[-10%]">
                <h3
                  className={`w-[75%] ${classes.circleHeading} mx-auto relative top-[50%]`}
                >
                  Hold, Sell or Redeem
                </h3>
                <img className="mx-auto" src={circlelg2} />
              </div>
              <p className="text-left">
                Hold-to-Earn, or you can sell it on the open market, or redeem
                it when it expires. It’s your NFT, so you decide!
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-row mt-64">
          <img src={trustMinimized} />
          <div>
            <h1 className="text-3xl font-bold ">
              Trust-Minimized Model to Foster Crypto Mass Adoption
            </h1>
            <div className="ml-10 mt-8">
              <p>
                InVaria aiming to build open-platform and tokenization
                infrastructure for RWA owners and investors. We bring tokenized
                RWAs become strong backstop to decentralized economy.
              </p>
              <p className="mt-8 mb-5">
                Real value with trust-minimized model. InVaria support
                fractionalized RWAs NFT issuance through on-chain and off-chain
                coordination to protect the interest of investors.
              </p>
              <BigButton>Get Started</BigButton>
            </div>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-white text-center mt-64">
          Mindmap
        </h1>
        <div className="ml-32 mt-8 text-white text-center pr-[-30px]">
          <p className="text-left w-[85%] text-lg">
            The emerging tech market changes rapidly and is hard to predict, as
            is the industry framework. We are cautious not to over-promise and
            fail to deliver on our plans. Nevertheless, we sincerely share the
            pre-organized milestones with everyone, including in our
            documentation.
          </p>
          <img className="absolute right-[0%] z-10" src={phase2} />
          <div className="text-left mt-24 relative z-10 ">
            <h3 className="text-invar-light text-xl font-bold">
              Phase Two - NOV. 2022 ~ MAY. 2023
            </h3>
            <h1 className="text-4xl font-bold mt-3 mb-5">
              Diversification / Segmentation
            </h1>
            <p className="text-lg w-[40%]">
              Dive deep to think more about feedback and benefits that can bring
              to early adopters, replicate the successful model and develop
              exciting products.
            </p>
            <ul className="mt-12 list-disc ml-5">
              <li>Launch InVariant - An PFP & Pass NFT</li>
              <li>Release Hybrid Finance Concept</li>
              <li>Release Second RWA Fractionalization NFT</li>
            </ul>
          </div>
        </div>

        <div className="mt-32 flex flex-row">
          <img src={phase3} className="absolute left-0" />
          <div className="w-[99%]"></div>
          <div className="text-left z-10 ml-40 mt-56">
            <h3 className="text-invar-light text-xl font-bold">June. 2023 ~</h3>
            <h1 className="text-4xl font-bold mt-3 mb-5">Integration</h1>
            <p className="text-lg w-[80%]">
              InVaria2222 is the foundation also the digital world of InVar
              Finance. Building solid infrastructure and value backstop to
              construct a hybrid finance ecosystem is a reasonable,
              indispensable move.
            </p>
            <ul className="mt-12 list-disc ml-5">
              <li>InVar Finance Integration</li>
            </ul>
          </div>
        </div>
        <h1 className="text-center text-4xl text-white font-bold mt-48 mb-12">
          Partners
        </h1>
        <div className="bg-invar-light-dark shadow-[inset_5px_0px_90px_50px_rgba(0,0,0,0.5)] flex flex-row flex-wrap mx-32 py-16 px-12">
          {partners.map((partner) => {
            return (
              <a href="#">
                <div className="w-[180px] h-[80px] mx-5 my-6 hover:opacity-10">
                  <img
                    className="w-full h-full object-contain "
                    src={require(`../images/partners/${partner}`)}
                  />
                </div>
              </a>
            );
          })}
        </div>

        <div className="ml-0 mt-32 relative">
          <img
            className={`w-[700px] ${classes.goKyc} relative`}
            src={require("../images/gokyc.jpg")}
          />
          <img
            className={`w-[500px] ${classes.bgGoKyc}`}
            src={require("../images/nft-bg.png")}
          />
          <div className="absolute text-right right-36 leading-tight top-20">
            <h3 className="text-[32px] font-bold">Experience New Option for Your</h3>
            <h3 className="text-[32px] font-bold mb-6">Investment. Let NFT Be REAL.</h3>
            <BigButton className="px-10">Go KYC</BigButton>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Index;
