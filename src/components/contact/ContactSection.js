// NPM Imports
import React from "react";

// Component Imports

// Style Imports
import "../../css/UniversalStyles.css";
import "./ContactSectionStyles.css";

// Image Imports
import EmailIcon from "../../../static/EmailIcon.svg";
import GithubIcon from "../../../static/GithubIcon.svg";
import LinkedinIcon from "../../../static/LinkedinIcon.svg";

export default function ContactSection()
{
    return (
        <div id="ContactSection">
            <h1 className="redText">Contact & Links</h1>
            <div>
                <ul>
                    <li>
                        <img alt="Email Icon" src={EmailIcon}></img>
                        <a href="mailto:a.acitelli@gmail.com">a.acitelli@gmail.com</a>
                    </li>
                    <li>
                        <img alt="GitHub Logo" src={GithubIcon}></img>
                        <a href="https://github.com/aacitelli">github.com/aacitelli</a>
                    </li>
                    <li>
                        <img alt="LinkedIn Logo" src={LinkedinIcon}></img>
                        <a href="https://linkedin.com/in/aacitelli">linkedin.com/in/andenacitelli</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}