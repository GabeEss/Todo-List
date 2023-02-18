import Todo from "./todo-object";
import displayProject from './display-project.js';

// This is a form that is displayed to gather information to create a new Todo object.
// The project in the parameter is the current Project object that is attempting to create a new Todo object.

export default function newToDo(project) {
    const formElement = document.createElement('form');
    formElement.setAttribute('id', 'new-todo'); 

    const formTitle = document.createElement('textarea');
    formTitle.setAttribute('maxlength', '50'); // character limit
    formTitle.setAttribute('required', 'true');
    formTitle.setAttribute('name', 'title');
    const titleLabel = document.createElement('label');
    titleLabel.setAttribute('for', 'titleLabel');
    titleLabel.textContent = "Title: ";

    const formDesc = document.createElement('textarea');
    formDesc.setAttribute('maxlength', '100'); // character limit
    formDesc.setAttribute('name', 'description');
    const descLabel = document.createElement('label');
    descLabel.setAttribute('for', 'descriptionLabel');
    descLabel.textContent = "Description: ";

    const priorityLabel = document.createElement('label');
    priorityLabel.setAttribute('for', 'priorityLabel')
    priorityLabel.textContent = "Priority Level: ";

    const priorityLevel1 = document.createElement('input');
    priorityLevel1.setAttribute('type', 'radio');
    priorityLevel1.setAttribute('name', 'priority');
    priorityLevel1.setAttribute('value', '1');
    priorityLevel1.setAttribute('checked', true); // default selection
    const priorityLabel1 = document.createElement('label');
    priorityLabel1.textContent = "Low";

    const priorityLevel2 = document.createElement('input');
    priorityLevel2.setAttribute('type', 'radio');
    priorityLevel2.setAttribute('name', 'priority');
    priorityLevel2.setAttribute('value', '2');
    const priorityLabel2 = document.createElement('label');
    priorityLabel2.textContent = "Medium";

    const priorityLevel3 = document.createElement('input');
    priorityLevel3.setAttribute('type', 'radio');
    priorityLevel3.setAttribute('name', 'priority');
    priorityLevel3.setAttribute('value', '3');
    const priorityLabel3 = document.createElement('label');
    priorityLabel3.textContent = "High";

    const formNotes = document.createElement('textarea');
    formNotes.setAttribute('maxlength', '250'); // character limit
    formNotes.setAttribute('name', 'notes');
    const notesLabel = document.createElement('label');
    notesLabel.setAttribute('for', 'notesLabel');
    notesLabel.textContent = "Notes: ";

    const formDueDate = document.createElement('input');
    formDueDate.setAttribute('type', 'date');
    formDueDate.setAttribute('name', 'dueDate')
    const duedateLabel = document.createElement('label');
    duedateLabel.setAttribute('for', 'dueDateLabel');
    duedateLabel.textContent = "Due Date: ";

    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = "Create ToDo";
    submitButton.addEventListener('submit', (event) => {
        event.preventDefault(); // prevent the form from submitting
      
        const formElement = event.target.form; // get the form element
        const formData = new FormData(formElement); // create a FormData object with the form data
        const title = formData.get('title');
        const desc = formData.get('description');
        const priority = formData.get('priority');
        const notes = formData.get('notes');
        const dueDate = formData.get('dueDate');

        const newToDoObject = new Todo(title, desc, priority, notes, dueDate);
        project.addToDo(newToDoObject);
      });

    const cancelButton = document.createElement('button');
    cancelButton.setAttribute('type', 'button');
    cancelButton.textContent = "Cancel";
    cancelButton.addEventListener('submit', (event) => { 
        event.preventDefault(); // prevent the form from submitting
    });

    // append the elements to the form
    formElement.appendChild(titleLabel);
    formElement.appendChild(formTitle);
    formElement.appendChild(document.createElement('br'));
    formElement.appendChild(descLabel);
    formElement.appendChild(formDesc);
    formElement.appendChild(document.createElement('br'));
    formElement.appendChild(priorityLabel);
    formElement.appendChild(priorityLevel1);
    formElement.appendChild(priorityLabel1);
    formElement.appendChild(priorityLevel2);
    formElement.appendChild(priorityLabel2);
    formElement.appendChild(priorityLevel3);
    formElement.appendChild(priorityLabel3);
    formElement.appendChild(document.createElement('br'));
    formElement.appendChild(notesLabel);
    formElement.appendChild(formNotes);
    formElement.appendChild(document.createElement('br'));
    formElement.appendChild(duedateLabel);
    formElement.appendChild(formDueDate);
    formElement.appendChild(document.createElement('br'));
    formElement.appendChild(submitButton);
    formElement.appendChild(cancelButton);

    const mainContainer = document.getElementById('content');
    mainContainer.appendChild(formElement);
}