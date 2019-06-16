// NPM Imports
import React from "react";
import { Link } from "gatsby";

// Component Imports

// Style Imports
import "../../css/universal/UniversalStyles.css";
import "../../css/universal/NavbarStyles.css";

// Image Imports
import resume from "../../../static/materialicons/resume.svg";
import github from "../../../static/materialicons/github.svg";

export default function Navbar() 
{
    return (
        <nav id="navbar">
            <ul>

                <li id="navbarLink1" className="lighterNavbarButton">
                    <div class="fullSizeOfParent">
                        <Link to="/">About</Link>
                    </div>
                </li>

                <li id="navbarLink2" className="darkerNavbarButton">
                    <div className="fullSizeOfParent">
                        <Link to="/skills">Skills</Link>
                    </div>
                </li>

                <li id="navbarLink3" className="lighterNavbarButton">
                    <div className="fullSizeOfParent">
                        <Link to="/projects">Projects</Link>
                    </div>                    
                </li>

                <li id="navbarLink4" className="darkerNavbarButton">
                    <div className="fullSizeOfParent">
                        <Link to="/blog">Blog</Link>
                    </div>                    
                </li>

                <li id="navbarLink5" className="lighterNavbarButton">
                    <div className="fullSizeOfParent">
                        <Link to="/contact">Contact</Link>
                    </div>
                </li>

            </ul>

            <div>
                <img alt="Resume Logo" width="35px" height="35px" src={resume}></img>
                <img alt="GitHub Logo" width="35px" height="35px" src={github}></img>
            </div>

        </nav>
    )
}