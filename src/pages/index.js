// NPM Imports
import React from "react";
import { Helmet } from "react-helmet";

// Component Imports 
import Navbar from "../components/Navbar";
import IntroSection from "../components/IntroSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

// Style Imports

export default () => 
{
    return (
        <div id="siteContainer">
            <Helmet>
                <meta charSet="utf-8"></meta>
                <title>Anden Acitelli - Full-Stack Web and Software Developer</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Helmet>
            <Navbar />
            <IntroSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
            <Footer />
        </div>   
    )
     
}
