// NPM Imports
import React from "react";

// Component Imports
import BoxContainer from "./boxcontainer/BoxContainer"; 

// Style Imports
import "../../css/UniversalStyles.css";
import "./ProjectsSectionStyles.css";

export default function ProjectsSection()
{
    return (
        <div id="ProjectsSection">
            <h1 className="redText">Projects</h1>
            
            <BoxContainer 
                title="Portfolio Website" 
                languages="React, HTML, CSS, SCSS"
                description="Lorem ipsum baby!"
            />

            <BoxContainer 
                title="Portfolio Website" 
                languages="React, HTML, CSS, SCSS"
                description="Lorem ipsum baby!"
            />

            <BoxContainer 
                title="Portfolio Website" 
                languages="React, HTML, CSS, SCSS"
                description="Lorem ipsum baby!"
            />

            <BoxContainer 
                title="Portfolio Website" 
                languages="React, HTML, CSS, SCSS"
                description="Lorem ipsum baby!"
            />

        </div>
    )
}