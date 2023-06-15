import React from "react";
import twitter from '../images/icons/twitter.png'
import discord from '../images/icons/discord.png'
import medium from '../images/icons/dots.png'
import email from '../images/icons/email.png'
import defi from '../images/icons/ic_defi.png'
import youtube from '../images/icons/youtube.png'

function Footer(props) {
  return (
    <div className="bg-black flex sm:flex-row flex-col border-solid border-primary border-t mt-12 items-center text-invar-light text-base font-bold justify-around">
      <div className="flex flex-col sm:my-14 mt-14 sm:items-start items-center">
        <img
          id="badge-button"
          style={{ width: "186px", height: "32px" }}
          src="https://static.alchemyapi.io/images/marketing/alchemy-wagbi-badge-dark.png"
          alt="Alchemy Supercharged"
        />
        <ul className="flex flex-row flex-wrap mt-6 text-sm sm:auto justify-center">
          <li className="mr-4">Github</li>
          <li className="mr-4">Docs</li>
          <li className="mr-4">Privacy Policy</li>
          <li className="mr-4">Terms & Conditions</li>
        </ul>
      </div>
      <div className="flex flex-col mt-6 sm:my-14 mb-10 sm:items-start justify-center">
        <div className="flex flex-row">
            <img src={defi} alt="defi" className="mr-6"/>
            <img src={youtube} alt="youtube" className="mr-6"/>
            <img src={medium} alt="medium" className="mr-6"/>
            <img src={twitter} alt="twitter" className="mr-6"/>
            <img src={discord} alt="discord" className="mr-6"/>
            <img src={email} alt="email"/>
        </div>
        <p className="mt-5 sm:text-base text-sm self-center">© 2022 InVaria2222 | InVar Finance</p>
      </div>
    </div>
  );
}

export default Footer;
