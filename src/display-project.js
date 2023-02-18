export default function displayProject(project) {
    const mainContainer = document.getElementById('content');
    const newProj = document.getElementById('project');
    mainContainer.removeChild(newProj); // remove the current project from the main container
    newProj.innerHTML = ""; // reset the current project container

    const title = document.createElement('h2');
    title.textContent = project.title; // set the title as the text content

    // create a paragraph element to show the description
    const description = document.createElement('p');
    description.textContent = project.description;

    const completed = document.createElement('p');
    if(project.completed !== true)
        completed.textContent = "This project has not been completed.";
    else
        completed.textContent = "This project has been completed.";

    // const toDoList = document.createElement('ul');
    // if(Array.isArray(project.toDos)) {
    //     for (let i = 0; i < project.toDos.length; i++) {
    //         const toDo = project.toDos[i];
    //         const toDoElement = document.createElement('li');
    //         toDoElement.textContent = toDo.title;
    //         toDoElement.addEventListener('click', () => {
    //         // do something when the element is clicked
    //         console.log('ToDo clicked:', toDo.title);
    //         });
    //         toDoList.appendChild(toDoElement);
    //     }
    // }
    
    // const newToDoButton = document.createElement('button');
    // newToDoButton.textContent = "New ToDo";
    // newToDoButton.addEventListener('click', () => { 
    //     newToDo(project);
    // });

    // const backButton = document.createElement('button');
    // backButton.textContent = 'Back to Portfolio';
    // backButton.addEventListener('click', () => {
    // displayPortfolio();
    // });
    
    // append to the newProj element
    newProj.appendChild(title);
    newProj.appendChild(description);
    newProj.appendChild(completed);
    // newProj.appendChild(toDoList);
    // newProj.appendChild(newToDoButton);
    mainContainer.appendChild(newProj); // append the current child to the main container
}