import React from "react";

import "./BoxContainerStyles.css";

// TODO: Implement a "time" prop that shows when I worked on this (only necessary for internships, jobs, and clubs, not projects)
const BoxContainer = (props) => 
{
    return (
        <div className="boxContainer">
            <h1>{props.title}</h1>
            <p className="boxContainerPosition">{props.position}</p>
            <p>{props.description1}</p>
            <p>{props.description2}</p>
            <p>{props.description3}</p>
            <p>{props.description4}</p>
            <p className="boxContainerLanguages">{props.languages}</p>
        </div>
    )
}

export default BoxContainer;