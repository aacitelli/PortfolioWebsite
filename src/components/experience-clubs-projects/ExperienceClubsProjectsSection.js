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
                title="Ohio State Center for Design and Manufacturing Excellence (CDME)"
                position="Software Engineering Intern"
                languages="Python, C++, Machine Learning"
                description1="I am helping improve the Center for Design and Manufacturing Excellence's 3D printing quality assurance process by implementing better methods of planning scan strategy. I am doing a lot of computational geometry and reinforcement learning to develop a data-driven approach for minimizing cost while keeping printing quality high."
            />

            <BoxContainer 
                title="The Ohio State Department of Engineering"
                position="Undergraduate Teaching Assistant"
                languages="MATLAB, Microsoft Excel"
                description1="I teach Microsoft Excel and MATLAB to first-year engineering students, simplifying lessons on baseline engineering principles, complex programming concepts, and concise technical writing down to a more easily understandable and communicable level. I also troubleshoot technical issues, swiftly diagnosing problems and ensuring students learn from the debugging experience."
            />

            <BoxContainer 
                title="Pennsylvania Department of Transportation (PennDOT)" 
                position="Engineering, Scientific, and Technical Intern"
                languages="Microsoft Excel, AutoHotkey"
                description1="Worked with Microsoft Excel to organize data, utilizing extensive conditional formatting, intelligent formulas, and complex boolean logic to do in-depth cost analysis, optimize a filing system, and speed up data lookup on frequently used sheets. I also used AutoHotkey and JavaScript to automate a highly repetitive, regularly done task, cutting completion time by a measured 75%."
            />

            <h1 className="redText">Clubs & Activities</h1>

            <BoxContainer 
                title="The Ohio State Underwater Robotics Team (http://uwrt.club)" 
                position="Software Team Lead"
                languages="ROS, C++, Python, JavaScript"
                description1="I am leading the Underwater Robotics Team's Software Team for the 2020-2021 school year. The team, overall, assembles and programs a robot that enters the AUVSI RoboSub competition held annually in San Diego, California, where autonomous underwater robots go through a sequence of tasks. "
                description2="Specific to my responsibilities, I am managing around 25 people and am the main decision maker for what projects the subteam works on in order to improve the robot's codebase. The robot runs off of ROS (C++, Python) on Ubuntu, but we have projects that. We frequently touch Robotics topics like Machine Learning, Computer Vision, Real-Time Computing, and Controls, but we are sizeable enough as a team that we have touched Shell Scripting, Web Development, and everything in between."
                description3="My personal past accomplishments with the team, prior to this year, include leading the project team developing an Electron application used to speed up the team's image labeling (to feed into YOLO, a machine learning framework), programming a Python driver to translate an ultrasonic sensor's output to something readable in our system, and writing numerous bash scripts to help set up the team's development environment."
            />

            <BoxContainer 
                title="Code 4 Community (https://code4community.github.io)" 
                languages="React, JavaScript, HTML, CSS"
                description1="I am leading the Front-End team for Code 4 Community, a club that focuses on programming projects that give back to the community, during the 2020-2021 school year. Our main project, Mindup, is a web application intended to provide resources and other help to adolescents struggling with mental health issues. We are working with the College of Social Work to deliver an end product they are happy with."                
                description2="In this role, I am personally responsible for delegating tasks to a team of around five to ten people working on the Front-End of the Mindup application. I am responsible for teaching React, JavaScript, HTML, and CSS. Our main goals this year are to finish the website and implement Redux and a more extensive testing interface through Jest."
                description3="Previous to this year, I have been personally responsible for switching all of our previous pages to React and designing and implementing several responsive pages with API integration."
            />

            <h1 className="redText">Projects</h1>
            
            <BoxContainer 
                title="Birdwatch" 
                languages="Godot Game Engine, GDScript, C++"
                description1="Passion game development project built in the Godot Game Engine using GDScript (a language very similar to Python). I am currently working on the game's terrain generation, which uses a multi-threaded chunk-based generation that goes off of a Perlin / Simplex noise heightmap."                
            />
            
            <p><b>I work on all sorts of stuff not covered here on my GitHub (<a className="redText" href="https://github.com/aacitelli">@aacitelli</a>) - Please check it out!</b></p>

        </div>
    )
}