// NPM Imports
import React from "react";

// Component Imports

// Style Imports
import "../css/UniversalStyles.css";
import "../css/NavbarStyles.css";

export default function Navbar() 
{
    return (
        <nav id="navbar">
            <ul>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}