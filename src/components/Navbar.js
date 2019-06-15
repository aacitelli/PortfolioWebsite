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
                <li><a href="https://andenacitelli.com">About</a></li>
                <li><a href="https://andenacitelli.com/skills">Skills</a></li>
                <li><a href="https://andenacitelli.com/projects">Projects</a></li>
                <li><a href="https://andenacitelli.com/blog">Blog</a></li>
                <li><a href="https://andenacitelli.com/contact">Contact</a></li>
            </ul>
        </nav>
    )
}