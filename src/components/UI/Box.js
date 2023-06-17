import React from "react";

function Box(props) {
  return (
    <div className={`rounded-md relative self-center ml-[13rem] mt-[7rem] w-[70%] bg-gradient-to-b from-primary to-[#1E1722] ${props.className}`}>
      <div className="absolute top-12 right-12 w-max">
        <svg
          width="44"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 6L6 18"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6 6L18 18"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      {props.children}
    </div>
  );
}

export default Box;
