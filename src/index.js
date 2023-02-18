import './style.css';
import displayProject from './display-project';
import FirstProject from './create-default-project.js';
import Portfolio from './portfolio-object';
import displayPortfolio from './display-portfolio';

// Creates a portfolio object to hold the data of all the projects.
// Creates a portfolio element and project element.
// Calls the displayPortfolio and displayProject methods to populate both of these elements.

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