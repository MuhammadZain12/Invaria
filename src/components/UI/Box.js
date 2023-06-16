import React from "react";

function Box(props) {
    return(
        <div className="rounded-md bg-gradient-to-b from-primary to-[#1E1722]">
            {props.children}
        </div>
    )
}

export default Box;
