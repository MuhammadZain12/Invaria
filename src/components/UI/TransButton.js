import React from 'react'

function TransButton(props){
    return(
        <button onClick={props.onClick} className={`px-2 text-white border border-solid border-invar-light bg-transparent rounded ${props.className}`}>{props.children}</button>
    )
}

export default TransButton