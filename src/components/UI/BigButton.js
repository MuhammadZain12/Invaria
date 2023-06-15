import React from "react";

function BigButton(props) {
    return(
        <button className={`bg-white text-black rounded-[2rem] py-3 px-6 text-lg font-bold ${props.className}`}>
            {props.children}
        </button>
    )
}

export default BigButton;
