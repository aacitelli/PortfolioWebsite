import React from "react";

import "./BoxContainerStyles.css";

const BoxContainer = (props) => 
{
    return (
        <div className="boxContainer">
            <h1>{props.title}</h1>
            <p className="boxContainerPosition">{props.position}</p>
            <p>{props.description1}</p>
            <p>{props.description2}</p>
            <p className="boxContainerLanguages">{props.languages}</p>
        </div>
    )
}

export default BoxContainer;