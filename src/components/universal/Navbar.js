// NPM Imports
import React from "react";
import { Link } from "gatsby";

// Component Imports

// Style Imports
import "../../css/universal/UniversalStyles.css";
import "../../css/universal/NavbarStyles.css";

// Image Imports
import githubIcon from "../../../static/materialicons/github.svg";
import linkedInIcon from "../../../static/materialicons/linkedin.svg";

export default function Navbar() 
{
    return (
        <nav id="navbar">
            <ul>

                <li id="navbarLink1" className="lighterNavbarButton">
                        <Link to="/">About</Link>
                    <div id="onHoverEffect1" className="onHoverEffect"></div>  
                </li>

                <li id="navbarLink2" className="darkerNavbarButton">
                        <Link to="/skills">Skills</Link>
                    <div id="onHoverEffect2" className="onHoverEffect"></div>  
                </li>

                <li id="navbarLink3" className="lighterNavbarButton"> 
                        <Link to="/projects">Projects</Link>
                    <div id="onHoverEffect3" className="onHoverEffect"></div>  
                </li>

                <li id="navbarLink4" className="darkerNavbarButton">
                    <Link to="/blog">Blog</Link>
                    <div id="onHoverEffect4" className="onHoverEffect"></div>  
                </li>

                <li id="navbarLink5" className="lighterNavbarButton">
                    <Link to="/contact">Contact</Link>
                    <div id="onHoverEffect5" className="onHoverEffect"></div>  
                </li>

            </ul>

            <div>

                <div>

                    <a href="https://linkedin.com/in/anden-acitelli">
                        <img alt="LinkedIn Logo" width="35px" height="35px" src={linkedInIcon} />
                    </a>

                    <a href="https://github.com/aacitelli">
                        <img alt="GitHub Logo" width="35px" height="35px" src={githubIcon} />
                    </a>

                </div>

            </div>

        </nav>
    )
}