// NPM Imports
import React from "react";

// Component Imports

// Style Imports
import "../../css/UniversalStyles.css";
import "./IntroSectionStyles.css";

export default function IntroSection()
{
    return (
        <div id="IntroSection">
            <h1 className="redText">Anden Acitelli</h1>
            <p>Hey! I’m a <b>Full-Stack Web Developer</b> and <b>Software Developer</b> with a focus on an intuitive and effective front-end and a clean and efficient back-end.</p>
            <p>I build websites with <span className="redText">React</span>, <span className="redText">Node</span>, <span className="redText">MongoDB</span>, and <span className="redText">HTML</span>/<span className="redText">CSS</span>. For more general-purpose languages, I am strongest in <span className="redText">JavaScript</span>, <span className="redText">Java</span>, and <span className="redText">C/C++</span>. Please see my <b><a className="redText" href="https://drive.google.com/file/d/1nlJzHsSkNTlFM0Xu_uAItzb8M-6_duzt/view?usp=sharing">résume</a></b> for a more exhaustive list of my experience.</p>
            <p>I’m currently studying <b>Computer Science Engineering</b> at Ohio State, and am actively looking for an internship Summer 2020. </p>
        </div>
    )    
}