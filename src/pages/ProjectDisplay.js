import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} />
      <p >
        <b>Skills:</b> {project.skills}
      </p>
      <p >
        <b>link:</b> {project.link}
      </p>
      <GitHubIcon   onClick={() => window.open('https://github.com/biswajeet6')}/>
    </div>
  );
}

export default ProjectDisplay;
