// NPM Imports
import React from "react";
import { Link } from "gatsby";

// Component Imports

// Style Imports
import "../../css/universal/UniversalStyles.css";
import "../../css/universal/NavbarStyles.css";

export default function Navbar() 
{
    return (
        <nav id="navbar">
            <ul>
                { /* TODO: MAKE THE ENTIRE SECTION CLICKABLE AND NOT JUST THE TEXT */ }
                <li className="navbarLink1"><Link to="/">About</Link></li>
                <li><div className="navbarSeparator"></div></li>
                <li className="navbarLink2"><Link to="/skills">Skills</Link></li>
                <li><div className="navbarSeparator"></div></li>
                <li className="navbarLink3"><Link to="/projects">Projects</Link></li>
                <li><div className="navbarSeparator"></div></li>
                <li className="navbarLink4"><Link to="/blog">Blog</Link></li>
                <li><div className="navbarSeparator"></div></li>
                <li className="navbarLink5"><Link to="/contact">Contact</Link></li>
                <li><div className="navbarSeparator"></div></li>
            </ul>
        </nav>
    )
}