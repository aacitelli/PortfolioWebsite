// NPM Imports
import React from "react";

// Component Imports
import BoxContainer from "./boxcontainer/BoxContainer"; 

// Style Imports
import "../../css/UniversalStyles.css";
import "./ProjectsSectionStyles.css";

// I have too much specific styling and I only type this all in one place anyway, so moving all my strings to one file or using GraphQL 
// on such a comparatively small project doesn't help me much here or offer Single Point of Control Benefits 

// TODO: Use wordpress or some sort of CMS (possibly even a custom one) so I don't have to manually edit code but can rather use some sort of WYSIWYG editor 
export default function ExperienceClubsProjectsSection()
{
    return (
        <div id="ProjectsSection">            

            <h1 className="redText">Experience</h1>

            <BoxContainer 
                title="Pennsylvania Department of Transportation" 
                position="Engineering, Scientific, and Technical Intern"
                languages="Microsoft Excel, AutoHotkey"
                description1="At this internship, I worked with Excel to organize spreadsheets. I used conditional formatting and formulas to do cost analysis, organize the filing system, and shorten the time needed to find projects at a glance."
                description2="I also used AutoHotkey and JavaScript to automate a highly repetitive, regularly done task (Printing PDFs of finished construction projects for archival purposes). I cut down time by a benchmarked 75%."
            />

            <BoxContainer 
                title="The Ohio State Department of Engineering"
                position="Undergraduate Teaching Assistant"
                languages="Microsoft Excel, MATLAB"
                description1="I teach Microsoft Excel and MATLAB to first-year engineering students, simplifying lessons on baseline engineering principles, complex programming concepts, and concise technical writing down to a more easily understandable and communicable level."
                description2="I guide students to the answer based on things they previously know, rather than telling them, so that it sticks in their mind more permanently. This pays dividends towards my own thought process and makes me much better at debugging."
            />

            <h1 className="redText">Clubs & Activities</h1>

            <BoxContainer 
                title="The Underwater Robotics Team" 
                languages="C++, Python, JavaScript, Linux/Bash, Docker"
                description1="This team builds, manufactures, and programs an autonomous robot that competes in RoboSub, a competition in the summer. I lead a scrum team on the software team, writing code for the robot, working primarily with C++ and Python."
                description2="I've personally written a driver to read data from an ultrasonic sensor, using Python to convert sensor output into a data stream usable by our robot. I've also written Bash scripts that set up the team's development environments."
                description3="My scrum team is currently working on Scylla, an Electron/Python application that streamlines our robot's computer vision training system."
            />

            <BoxContainer 
                title="Code 4 Community" 
                languages="JavaScript (React), HTML, CSS (SCSS)"
                description1="This club works on a full-stack web application for the College of Social Work, intended to serve as a resource to students with mental health issues."                
                description2="I am personally in charge of the Front-End team. In this capacity, I delegate tasks, track overall project goals and progress, and teach JavaScript (React), HTML, CSS, and other front-end technologies to members."
            />

            <h1 className="redText">Projects</h1>
            
            <BoxContainer 
                title="Robot Project" 
                languages="C++, QT Creator"
                description1="During the Spring 2019 semester, I worked in a team of four to design, manufacture, and program an autonomous robot to navigate an obstacle course and complete tasks. This is the First-Year Honors Engineering project."                
                description2="I was responsible for writing all of the code, and implemented an intelligent GPS-based navigation system, task code, and failure mitigation behavior in C++."
            />

            <BoxContainer 
                title="Portfolio Website" 
                languages="JavaScript (ReactJS), HTML, CSS (SCSS)"
                description1="The website you're on right now! I maintain this and generally rebuild the design once or twice a year to keep things fresh and build my front-end skills. I place a huge focus on simple, yet appealing design, website speed, and concise information delivery. The website is built mobile-first and is mobile responsive."                
                description2="Prior to design iterations, I build a mockup in Figma then build from that, simplifying the whole process. I automate deployment with Netlify, which is linked to a GitHub repo."
            />

        </div>
    )
}