import React from "react";

import "./BoxContainerStyles.css";

const BoxContainer = (props) => 
{
    return (
        <div className="boxContainer">
            <h1>{props.title}</h1>
            <p><b>{props.languages}</b></p>
            <p>{props.description}</p>
        </div>
    )
}

export default BoxContainer;