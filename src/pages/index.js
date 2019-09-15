// NPM Imports
import React from "react";
import { Helmet } from "react-helmet";

// Universal Component Imports 
import Navbar from "../components/universal/Navbar";

// Page-Specific Component Imports
import IntroSection from "../components/about/IntroSection";
import ProjectsSection from "../components/about/ProjectsSection";
import ContactSection from "../components/about/ContactSection";

// Style Imports
export default () => 
{
    return (
        <div id="siteContainer">
            <Helmet>
                <meta charSet="utf-8"></meta>
                <title>Anden Acitelli - Full-Stack Web Developer and Software Developer</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>
            
            <Navbar />
            <IntroSection />
            <ProjectsSection />
            <ContactSection />
        </div>   
    )
     
}
