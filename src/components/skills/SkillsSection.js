// NPM Imports
import React from "react";

// Component Imports
import TylerPic from "./../../../static/tyler.jpg";

// Style Imports
import "../../css/UniversalStyles.css";
import "./SkillsSectionStyles.css";

export default function SkillsSection()
{
    return (
        <div id="SkillsSection">
            <h1>A Happy Customer who apparently wants to do penetration on my website:</h1>
            <img src={TylerPic} />
        </div>
    )
}