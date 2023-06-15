import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import join from "../images/join_pic.png";
import BigButton from "../components/UI/BigButton";
import tokenization from "../images/tokenization.png";

function Index(props) {
  return (
    <div className="bg-black">
      <Header />
      <div className="shadow-[inset_2px_-20px_60px_40px_rgba(0,0,0,0.9)] bg-gradient-to-b from-primary to-black mt-0">
        <div className={`bg-bg1 bg-center bg-cover `}>
          <div className="pt-[150px] justify-between ml-20 pb-20">
            <h1 className="font-[700] text-[60px] md:leading-[60px] text-white w-[500px]">
              Bring Real World Asset Generate Real Value
            </h1>
            <p className="md:w-[500px] text-white my-5">
              Invest real estate and valuable assets world-wide easily. InVar
              Finance support investor accumulate wealth, help business to grow
              by using blockchain technology in a transparent and efficiency
              way.
            </p>
            <BigButton>View RWAs</BigButton>
            <div className="w-[19rem] h-full absolute top-40 right-0">
              <div className="w-[1px] h-32 mt-12 absolute bg-white" />
              <div className="absolute right-0">
                <img src={join} className="w-72 h-auto" alt="simple pic" />
                <p className="text-white">Dive into InVaria2222 meta-journey</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#18141b] bg-bgdeveloping bg-contain my-12 select-none">
        <div className="bg-black bg-opacity-80 py-8 px-11">
          <div className="w-[70%] text-white flex flex-row border-invar-light border border-l-8 border-l-green-600 bg-[#18141b] md:ml-[16%] py-2 px-3">
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
            <h1 className="font-bold text-4xl">How It Works</h1>
            <div className="flex flex-row justify-evenly">
                
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Index;
