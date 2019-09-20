import React from "react";

import "./BoxContainerStyles.css";

const BoxContainer = (props) => 
{
    return (
        <div className="boxContainer">
            <h1>{props.title}</h1>
            <p><b>{props.languages}</b></p>
            <p>{props.description1}</p>
            <p>{props.description2}</p>
        </div>
    )
}

export default BoxContainer;