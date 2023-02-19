import Todo from "./todo-object";
import { newToDoForm } from "./new-todo";
import { handleTodoFormSubmit } from "./new-todo";
import generateToDo from "./generateTodoList";

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

    const toDoList = document.createElement('div');
    toDoList.setAttribute('id', 'todo-container');
    const toDoListLabel = document.createElement('label');
    toDoListLabel.textContent = "To-do Items: ";
    toDoList.appendChild(toDoListLabel);
    
    const newToDoButton = document.createElement('button');
    newToDoButton.textContent = "New ToDo";
    newToDoButton.addEventListener('click', () => { 
        const form = newToDoForm();
        newProj.removeChild(newToDoButton);
        newProj.appendChild(form);
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = new FormData(event.target);
            const { title, desc, priority, notes, dueDate } = handleTodoFormSubmit(formData);
            const newToDoItem = new Todo(title, desc, dueDate, priority, notes);
            project.addToDo(newToDoItem);
            newProj.removeChild(form);
            displayProject(project);
        })
    });

    // set completed button for project (maybe can go in portfolio display)

    // append to the newProj element
    newProj.appendChild(title);
    newProj.appendChild(description);
    newProj.appendChild(completed);
    newProj.appendChild(toDoList);
    newProj.appendChild(newToDoButton);
    mainContainer.appendChild(newProj); // append the current child to the main container
    generateToDo(project);
}