// NPM Imports
import React from "react";

// Component Imports
import BoxContainer from "./boxcontainer/BoxContainer"; 

// Style Imports
import "../../css/UniversalStyles.css";
import "./ProjectsSectionStyles.css";

// TODO: Use GraphQL (Harder, but more futureproof) or a JSON file 
// TODO: (easier, but less futureproof and with more limitations) to 
// TODO: Implement all the text strings here 
export default function ExperienceClubsProjectsSection()
{
    return (
        <div id="ProjectsSection">
            

            <h1 className="redText">Experience</h1>

            <BoxContainer 
                title="Pennsylvania Department of Transportation" 
                position="Engineering, Scientific, and Technical Intern"
                languages="React, HTML, CSS, SCSS"
                description1="At this internship, I worked with Excel to organize data, utilizing extensive conditional formatting, intelligent formulas, and complex boolean logic to do in-depth cost analysis, optimize a filing system, and speed up data lookup on frequently used sheets."
                description2="I also ended up using AutoHotkey and JavaScript to automate a highly repetitive, regularly done task, cutting completion time by 75% (a benchmarked value)."
            />

            <h1 className="redText">Clubs & Activities</h1>

            <BoxContainer 
                title="The Underwater Robotics Team" 
                languages="C++, Python, Linux/Bash, Docker"
                description1="As part of this club, I co-lead a scrum team of six people, teaching new members C++ and Python (the languages used by the team) and acclimatizing them to our system."
                description2="Personally, I've written a driver to read in data from an ultrasonic sensor, using Python to convert sensor output into a usable data stream. I've also written a Bash script that sets up the team's entire development environment and Docker container from a fresh Ubuntu install. We are currently using to set up new members' computers."
            />

            <BoxContainer 
                title="Code 4 Community" 
                languages="JavaScript (ReactJS), HTML, CSS (SCSS)"
                description1="For this club, I co-lead the Front-End team of the Web Application half of the club (10-15 people), delegating tasks, giving presentations, and teaching JavaScript (ReactJS), HTML, CSS, and other front-end technologies. I keep the team organized and ensure the project is making continuous progress."
                description2="I also lead a project team (6 people) that develops JavaScript browser games, presenting at local schools and teaching schoolchildren programming in a fun and accessible way. My job is to delegate tasks and ensure the project is completed in a reasonable timeline (usually a few months)."
            />

            <h1 className="redText">Projects</h1>
            
            <BoxContainer 
                title="Robot Project" 
                languages="C++, QT Creator"
                description1="During the Spring 2019 semester, I worked in a team of four to design, manufacture, and program an autonomous robot to navigate an obstacle course and complete tasks. This is the First-Year Honors Engineering project."                
                description2="I was responsible for writing all of the code, and implemented an intelligent \, GPS-based navigation system, task code, and failure mitigation behavior, all in C++."
            />

            <BoxContainer 
                title="Portfolio Website" 
                languages="JavaScript (ReactJS), HTML, CSS (SCSS)"
                description1="The website you're on right now! I maintain this and generally rebuild the design a few times a year to keep things fresh. I place a huge focus on appealing design, website speed, and concise information delivery. The website is built mobile-first and is mobile responsive. "                
                description2="Prior to design iterations, I build a mockup in Figma then build from that, simplifying the whole process. I automate deployment with Netlify, which is linked to a GitHub repo."
            />

        </div>
    )
}