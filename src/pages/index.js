// NPM Imports
import React from "react"

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
        <div>
            <Navbar />
            <IntroSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
            <Footer />
        </div>   
    )
     
}
