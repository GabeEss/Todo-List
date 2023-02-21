import './style.css';
import displayProject from './display-project';
import FirstProject from './create-default-project.js';
import Portfolio from './portfolio-object';
import displayPortfolio from './display-portfolio';

// Creates a portfolio object to hold the data of all the projects.
// Creates a portfolio element and project element.
// Calls the displayPortfolio and displayProject methods to populate both of these elements.
// Checks to see if the user's local storage contains any past data from use.

loadProjects();

function loadProjects() {
    // Check if there is any data in local storage
    const data = localStorage.getItem('projects');
    let projects;
    try {
        // If data exists, parse it from JSON format and store it in your app
        projects = JSON.parse(data);
      } catch (error) {
        console.error(error);
      }
    if (projects) {
      const portfolio = new Portfolio([]);
      portfolio.projects = projects;
        const mainContainer = document.getElementById('content'); // get main container
        const newPort = document.createElement('div'); // portfolio container
        newPort.id = 'portfolio'; // set the ID of the element
        const newProj = document.createElement('div');
        newProj.id = 'project'; // set the class of the element

        mainContainer.appendChild(newPort);
        mainContainer.appendChild(newProj);

        displayPortfolio(portfolio);
        displayProject(portfolio.projects[0]);

    } else {
        const portfolio = new Portfolio([]);
        portfolio.addProject(FirstProject);
        
        const mainContainer = document.getElementById('content'); // get main container
        const newPort = document.createElement('div'); // portfolio container
        newPort.id = 'portfolio'; // set the ID of the element
        const newProj = document.createElement('div');
        newProj.id = 'project'; // set the class of the element
        
        mainContainer.appendChild(newPort);
        mainContainer.appendChild(newProj);
        
        displayPortfolio(portfolio);
        displayProject(FirstProject);
    }
  }

