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
            <p>Hey! I’m a <span className="redText">Full-Stack Web Developer</span> and <span className="redText">Software Developer</span> with a focus on an <b>intuitive</b> and <b>effective</b> front-end and a <b>clean</b> and <b>efficient</b> back-end.</p>
            <p>I build websites with <span className="redText">React</span>, <span className="redText">Node</span>, <span className="redText">MongoDB</span>, and <span className="redText">HTML</span>/<span className="redText">CSS</span>. For more general-purpose languages, I am strongest in <span className="redText">Java</span>, <span className="redText">C/C++</span>, and <span className="redText">Python</span>. Please see my <a className="redText" href="https://drive.google.com/file/d/1nlJzHsSkNTlFM0Xu_uAItzb8M-6_duzt/view?usp=sharing">résume</a> for a more exhaustive list of my experience.</p>
            <p>I’m currently studying <b>Computer Science Engineering</b> at Ohio State, and am actively looking for an internship Summer 2020. </p>
        </div>
    )    
}