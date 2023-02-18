import displayProject from "./display-project";
import generateProjects from "./generateProjectList";
import { createForm, handleFormSubmit} from "./new-project";
import Project from "./project-object";
import { setIndex, getCurrentIndex } from "./current-project-index";

// Populates the portfolio element with a title, a list of all the projects, and three buttons:
// to add a project and select it; to edit the current project's title and description;
// to delete the current project from the portfolio.

export default function displayPortfolio(portfolio) {
    const mainContainer = document.getElementById('content'); // get main container
    const newPort = document.getElementById('portfolio'); // get portfolio container

    const title = document.createElement('h1');
    title.textContent = "My Portfolio"; // set the title as the text content
    newPort.appendChild(title);

    const projectList = document.createElement('ul');
    projectList.setAttribute('id', 'project-list');
    newPort.appendChild(projectList);

    const newProjButton = document.createElement('button');
    newProjButton.id = "new-project-button";
    newProjButton.textContent = "New Project";
    newProjButton.addEventListener('click', () => {
        const form = createForm();
        newPort.removeChild(newProjButton); // remove buttons until submit event has concluded
        newPort.removeChild(editProjectButton);
        newPort.removeChild(removeProjectButton);
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = new FormData(event.target);
            const { title, description, array } = handleFormSubmit(formData);
            const project = new Project(title, description, array);
            portfolio.addProject(project); // add new project to portfolio array
            newPort.removeChild(form); // remove form upon submission
            displayProject(project); // display the new project
            setIndex(portfolio.projects.length - 1); // don't sort the projects inside the object itself
            generateProjects(portfolio); // generate project list again
            newPort.appendChild(newProjButton);
            newPort.appendChild(editProjectButton);
            newPort.appendChild(removeProjectButton);
        });
        newPort.appendChild(form);
    });

    const editProjectButton = document.createElement('button');
    editProjectButton.id = "edit-project-button";
    editProjectButton.textContent = "Edit Project";
    editProjectButton.addEventListener('click', () => {
        const form = createForm();
        newPort.removeChild(newProjButton);
        newPort.removeChild(editProjectButton);
        newPort.removeChild(removeProjectButton);
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = new FormData(event.target);
            const { title, description } = handleFormSubmit(formData);
            let currProjIndex = getCurrentIndex();
            portfolio.projects[currProjIndex].title = title; // update the project in the array
            portfolio.projects[currProjIndex].description = description;
            newPort.removeChild(form);
            generateProjects(portfolio); // generate project list again
            newPort.appendChild(newProjButton); // re-add buttons
            newPort.appendChild(editProjectButton);
            newPort.appendChild(removeProjectButton);
            displayProject(portfolio.projects[currProjIndex]); // re-display the current project
        });
        newPort.appendChild(form);
    });

    const removeProjectButton = document.createElement('button');
    removeProjectButton.id = "remove-project-button";
    removeProjectButton.textContent = "Delete Project";
    removeProjectButton.addEventListener('click', () => {
        // Test to see if there is more than one project left. If there is only one project, nothing will happen.
        if(portfolio.projects.length > 1) {
            newPort.removeChild(newProjButton);
            newPort.removeChild(editProjectButton);
            newPort.removeChild(removeProjectButton);
            let currProjIndex = getCurrentIndex();
            portfolio.removeProject(currProjIndex);
            generateProjects(portfolio); // generate project list again
            newPort.appendChild(newProjButton); // re-add buttons
            newPort.appendChild(editProjectButton);
            newPort.appendChild(removeProjectButton);
            setIndex(0); // reset index value
            currProjIndex = getCurrentIndex();
            displayProject(portfolio.projects[currProjIndex]); // re-display the first project on the list
        }
    });
    
    generateProjects(portfolio);
    newPort.appendChild(newProjButton);
    newPort.appendChild(editProjectButton);
    newPort.appendChild(removeProjectButton);
}