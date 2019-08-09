import React, {Component } from "react";
import Card from './Card';
import projects from "../projects.json";
import './Portfolio.css';


//TODO: re-write this to make the folioCards repeatable components.

class Portfolio extends Component {
    state = {
        projects
    };


    render() {
        return (
            <div className="content">
                    <header>
                        <h1>Portfolio</h1>
                    </header>

                    <div className="bio foliobox">
                        {this.state.projects.map(project => (
                            <Card
                                key={project.id}
                                appName={project.appName}
                                appLink={project.appLink}
                                vidlink={project.vidlink}
                                gitLink={project.gitLink}
                                img={project.img}
                                alt={project.alt}
                            />
                        ))}
                    </div>
            </div>
        );
    }
};

export default Portfolio;