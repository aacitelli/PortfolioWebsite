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
                <li><Link to="/">About</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}