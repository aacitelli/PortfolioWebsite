// NPM Imports
import React from "react";

// Component Imports

// Style Imports
import "../../css/universal/UniversalStyles.css";
import "../../css/universal/NavbarStyles.css";

export default function Navbar() 
{
    return (
        <nav>
            <h1>Anden Acitelli</h1>
            <ul>
                <li>Projects</li>
                <li>Contact & Links</li>
                <li><a id="resumeNavbarLink" href="https://drive.google.com/file/d/1nlJzHsSkNTlFM0Xu_uAItzb8M-6_duzt/view?usp=sharing">Résumé</a></li>
            </ul>
        </nav>
    )
}