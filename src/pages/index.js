// NPM Imports
import React from "react";
import { Helmet } from "react-helmet";

// Component Imports 
import Navbar from "../components/universal/Navbar";
import IntroSection from "../components/about/IntroSection";
import SkillsSection from "../components/about/SkillsSection";
import ProjectsSection from "../components/about/ProjectsSection";
import ContactSection from "../components/about/ContactSection";
import Footer from "../components/universal/Footer";

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
