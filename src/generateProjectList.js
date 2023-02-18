import { setIndex } from './current-project-index.js';
import displayProject from "./display-project";

export default function generateProjects(portfolio) {
    const projectList = document.getElementById('project-list');
    projectList.innerHTML = ""; // remove old list before generating a new one
    if(Array.isArray(portfolio.projects)) {
        for (let i = 0; i < portfolio.projects.length; i++) {
            const project = portfolio.projects[i];
            const projElement = document.createElement('li');
            projElement.textContent = project.title;
            projElement.addEventListener('click', () => {
                displayProject(project); // display the current project
                setIndex(i); // set the current project
            });
            projectList.appendChild(projElement);
        }
    }

    const port = document.getElementById('portfolio');
    port.appendChild(projectList);
}