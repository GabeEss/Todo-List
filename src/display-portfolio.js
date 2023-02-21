import displayProject from "./display-project";
import generateProjects from "./generateProjectList";
import { createForm, handleFormSubmit} from "./new-project";
import Project from "./project-object";
import { setIndex, getCurrentIndex } from "./current-project-index";

// Populates the portfolio element with a title, a list of all the projects, and three buttons:
// to add a project and select it; to edit the current project's title and description;
// to delete the current project from the portfolio.

export default function displayPortfolio(portfolio) {
    const newPort = document.getElementById('portfolio'); // get portfolio container

    const title = document.createElement('h1');
    const titleContainer = document.createElement('div');
    titleContainer.setAttribute('id', 'portfolio-title');
    title.textContent = "My Portfolio"; // set the title as the text content
    titleContainer.appendChild(title);
    newPort.appendChild(titleContainer);

    const projectList = document.createElement('ul');
    projectList.setAttribute('id', 'project-list');
    newPort.appendChild(projectList);

    const newProjButton = document.createElement('button');
    newProjButton.id = "new-project-button";
    newProjButton.textContent = "New Project";
    newProjButton.addEventListener('click', () => {
        const form = createForm();
        buttonContainer.removeChild(newProjButton);
        buttonContainer.removeChild(editProjectButton);
        buttonContainer.removeChild(removeProjectButton);
        buttonContainer.removeChild(completeProjectButton);
        buttonContainer.removeChild(saveProjectButton);

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = new FormData(event.target);
            const { title, description, array } = handleFormSubmit(formData);
            const project = new Project(title, description, array);
            portfolio.addProject(project); // add new project to portfolio array
            buttonContainer.removeChild(form); // remove form upon submission
            displayProject(project); // display the new project
            setIndex(portfolio.projects.length - 1); // don't sort the projects inside the object itself
            generateProjects(portfolio); // generate project list again
            buttonContainer.appendChild(newProjButton); // re-add buttons
            buttonContainer.appendChild(editProjectButton);
            buttonContainer.appendChild(removeProjectButton);
            buttonContainer.appendChild(completeProjectButton);
            buttonContainer.appendChild(saveProjectButton);

            // This is for local storage!
            const projectsJson = JSON.stringify(portfolio.projects);
            localStorage.setItem("projects", projectsJson);
        });
        buttonContainer.appendChild(form);
    });

    const editProjectButton = document.createElement('button');
    editProjectButton.id = "edit-project-button";
    editProjectButton.textContent = "Edit Project Title/Description";
    editProjectButton.addEventListener('click', () => {
        const form = createForm();
        buttonContainer.removeChild(newProjButton);
        buttonContainer.removeChild(editProjectButton);
        buttonContainer.removeChild(removeProjectButton);
        buttonContainer.removeChild(completeProjectButton);
        buttonContainer.removeChild(saveProjectButton);

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = new FormData(event.target);
            const { title, description } = handleFormSubmit(formData);
            let currProjIndex = getCurrentIndex();
            portfolio.projects[currProjIndex].title = title; // update the project in the array
            portfolio.projects[currProjIndex].description = description;
            buttonContainer.removeChild(form);
            generateProjects(portfolio); // generate project list again
            buttonContainer.appendChild(newProjButton); // re-add buttons
            buttonContainer.appendChild(editProjectButton);
            buttonContainer.appendChild(removeProjectButton);
            buttonContainer.appendChild(completeProjectButton);
            buttonContainer.appendChild(saveProjectButton);
            displayProject(portfolio.projects[currProjIndex]); // re-display the current project

            // This is for local storage!
            const projectsJson = JSON.stringify(portfolio.projects);
            localStorage.setItem("projects", projectsJson);
        });
        buttonContainer.appendChild(form);
    });

    const removeProjectButton = document.createElement('button');
    removeProjectButton.id = "remove-project-button";
    removeProjectButton.textContent = "Delete Project";
    removeProjectButton.addEventListener('click', () => {
        // Test to see if there is more than one project left. If there is only one project, nothing will happen.
        if(portfolio.projects.length > 1) {
            buttonContainer.removeChild(newProjButton);
            buttonContainer.removeChild(editProjectButton);
            buttonContainer.removeChild(removeProjectButton);
            buttonContainer.removeChild(completeProjectButton);
            buttonContainer.removeChild(saveProjectButton);

            let currProjIndex = getCurrentIndex();
            portfolio.removeProject(currProjIndex);
            generateProjects(portfolio); // generate project list again

            buttonContainer.appendChild(newProjButton); // re-add buttons
            buttonContainer.appendChild(editProjectButton);
            buttonContainer.appendChild(removeProjectButton);
            buttonContainer.appendChild(completeProjectButton);
            buttonContainer.appendChild(saveProjectButton);
            setIndex(0); // reset index value
            currProjIndex = getCurrentIndex();
            displayProject(portfolio.projects[currProjIndex]); // re-display the first project on the list

            // This is for local storage!
            const projectsJson = JSON.stringify(portfolio.projects);
            localStorage.setItem("projects", projectsJson);
        }
    });

    const completeProjectButton = document.createElement('button');
    completeProjectButton.id = "complete-project-button";
    completeProjectButton.textContent = "Change Completion Status";
    completeProjectButton.addEventListener('click', () => {
            buttonContainer.removeChild(newProjButton);
            buttonContainer.removeChild(editProjectButton);
            buttonContainer.removeChild(removeProjectButton);
            buttonContainer.removeChild(completeProjectButton);
            buttonContainer.removeChild(saveProjectButton);

            let currProjIndex = getCurrentIndex();
            if(portfolio.projects[currProjIndex].completed === true)
                portfolio.projects[currProjIndex].completed = false;
            else
                portfolio.projects[currProjIndex].completed = true;

            buttonContainer.appendChild(newProjButton); // re-add buttons
            buttonContainer.appendChild(editProjectButton);
            buttonContainer.appendChild(removeProjectButton);
            buttonContainer.appendChild(completeProjectButton);
            buttonContainer.appendChild(saveProjectButton);

            displayProject(portfolio.projects[currProjIndex]);

            // This is for local storage!
            const projectsJson = JSON.stringify(portfolio.projects);
            localStorage.setItem("projects", projectsJson);
    });

    const saveProjectButton = document.createElement('button');
    saveProjectButton.id = "save-project-button";
    saveProjectButton.textContent = "Save Your Projects/Todos"
    saveProjectButton.addEventListener('click', () => {
        // This is for local storage!
        const projectsJson = JSON.stringify(portfolio.projects);
        localStorage.setItem("projects", projectsJson);
    })
    
    const buttonContainer = document.createElement('div');
    buttonContainer.setAttribute('id', 'portfolio-buttons');
    buttonContainer.appendChild(newProjButton);
    buttonContainer.appendChild(editProjectButton);
    buttonContainer.appendChild(removeProjectButton);
    buttonContainer.appendChild(completeProjectButton);
    buttonContainer.appendChild(saveProjectButton);

    generateProjects(portfolio);
    newPort.appendChild(buttonContainer);
}