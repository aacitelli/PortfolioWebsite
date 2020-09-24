// NPM Imports
import React from "react";
import { Helmet } from "react-helmet";

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
                <title>Anden Acitelli - Software Engineer, Full-Stack Web Developer</title>
                <meta name="title" content="Anden Acitelli - Software Engineer, Full-Stack Web Developer" />
                <meta name="description" content="Hi! I'm Anden Acitelli, a student at The Ohio State University currently studying Computer Science and Engineering. I have skills in a wide variety of computer science disciplines, including software engineering and full-stack web development, and am currently looking for a Summer 2021 internship." />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>
            
            <IntroSection />
            <ExperienceClubsProjectsSection />
            <ContactSection />
        </div>   
    )
     
}
