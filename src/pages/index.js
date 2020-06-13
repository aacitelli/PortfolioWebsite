// NPM Imports
import React from "react";
import { Helmet } from "react-helmet";

// Universal Component Imports 
import Navbar from "../components/navbar/Navbar";

// Page-Specific Component Imports
import IntroSection from "../components/intro/IntroSection";
import ExperienceClubsProjectsSection from "../components/experience-clubs-projects/ExperienceClubsProjectsSection";
import ContactSection from "../components/contact/ContactSection";

// Style Imports
export default () => 
{
    return (
        <div id="siteContainer">
            <Helmet>
                <meta charSet="utf-8"></meta>
                <title>Anden Acitelli - Software Developer and Full-Stack Web Developer</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>
            
            <Navbar />
            <IntroSection />
            <ExperienceClubsProjectsSection />
            <ContactSection />
        </div>   
    )
     
}
