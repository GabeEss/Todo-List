import displayProject from "./display-project";

// Generates the DOM elements and click events for each todo item within a project.

export default function generateToDo(project) {
    const toDoList = document.getElementById('todo-container');

    if(Array.isArray(project.todos)) {
        for (let i = 0; i < project.todos.length; i++) {
            const toDoElement = document.createElement('div');

            // Todo Title Container
            const toDoTitleContainer = document.createElement('div');
            const toDoTitleLabel = document.createElement('label');
            toDoTitleLabel.textContent = "Item #" + (i + 1) + ": ";
            const toDoTitle = document.createElement('input');
            toDoTitle.setAttribute('type', 'text');
            toDoTitle.value = project.todos[i].title;
            toDoTitleContainer.appendChild(toDoTitleLabel);
            toDoTitleContainer.appendChild(toDoTitle);

            // Todo Description Container
            const toDoDescriptionContainer = document.createElement('div');
            const toDoDescriptionLabel = document.createElement('label');
            toDoDescriptionLabel.textContent = "Description: ";
            const toDoDescription = document.createElement('textarea');
            toDoDescription.setAttribute('id', 'todo-description');
            toDoDescription.value = project.todos[i].description;
            toDoDescriptionContainer.appendChild(toDoDescriptionLabel);
            toDoDescriptionContainer.appendChild(toDoDescription);

            // Todo Priority Container
            const toDoPriorityContainer = document.createElement('div');
            const toDoPriorityLabel = document.createElement('label');
            const toDoPriority = document.createElement('div');

            toDoPriorityLabel.textContent = "Priority: ";
            toDoPriority.textContent = project.todos[i].priority;
            toDoPriorityContainer.appendChild(toDoPriorityLabel);
            toDoPriorityContainer.appendChild(toDoPriority);

            // Todo Notes Container
            const toDoNotesContainer = document.createElement('div');
            const toDoNotesLabel = document.createElement('label');
            toDoNotesLabel.textContent = "Notes: ";
            const toDoNotes = document.createElement('textarea');
            toDoNotes.setAttribute('id', 'todo-notes');
            toDoNotes.value = project.todos[i].notes;
            toDoNotesContainer.appendChild(toDoNotesLabel);
            toDoNotesContainer.appendChild(toDoNotes);

            // Todo Due Date Container
            const toDoDueDateContainer = document.createElement('div');
            const toDoDueDateLabel = document.createElement('label');
            toDoDueDateLabel.textContent = "Due date: ";
            const toDoDueDate = document.createElement('input');
            toDoDueDate.setAttribute('type', 'date');
            toDoDueDate.value = project.todos[i].dueDate;
            toDoDueDateContainer.appendChild(toDoDueDateLabel);
            toDoDueDateContainer.appendChild(toDoDueDate);

            // Todo Remove Button
            const toDoRemoveButton = document.createElement('button');
            toDoRemoveButton.textContent = "Delete ToDo";

            // Title Event
            toDoTitle.addEventListener('click', () => {
                const input = document.createElement('input');
                input.type = 'text';
                input.value = toDoTitle.value;

                input.setAttribute('maxlength', '20');
                input.setAttribute('id', 'todo-title');

                toDoTitleContainer.replaceChild(input, toDoTitle);
            
                input.addEventListener('blur', () => {
                    toDoTitle.value = input.value;
                    project.todos[i].title = input.value;
                    displayProject(project);
                    toDoTitleLabel.textContent = "Todo " + i + ": ";
                });
            });

            // Priority Event
            toDoPriority.addEventListener('click', () => {
                const priorityOptions = ['1 (low)', '2 (medium)', '3 (high)', 'Ignore'];
              
                // Create radio buttons for each priority option
                const radioButtons = document.createElement('div');
                radioButtons.classList.add('priority-options');
              
                priorityOptions.forEach((option) => {
                  const radioButton = document.createElement('input');
                  radioButton.setAttribute('type', 'radio');
                  radioButton.setAttribute('name', 'priority');
                  radioButton.setAttribute('value', option);
                  if (option === project.todos[i].priority) {
                    radioButton.checked = true;
                  }
              
                  const label = document.createElement('label');
                  label.textContent = option;
              
                  const radioButtonContainer = document.createElement('div');
                  radioButtonContainer.appendChild(radioButton);
                  radioButtonContainer.appendChild(label);
              
                  radioButtons.appendChild(radioButtonContainer);
                });
              
                // Replace the priority container with the radio buttons
                toDoPriorityContainer.replaceChild(radioButtons, toDoPriority);
              
                // Update the priority value of the todo object when the user makes a selection
                radioButtons.addEventListener('change', (event) => {
                    const newPriority = event.target.value;
                    if (newPriority !== 'Ignore') {
                        project.todos[i].priority = newPriority;
                    }
                    displayProject(project);
                });
            });

            // Description Event
            toDoDescription.addEventListener('click', () => {
                const textarea = document.createElement('textarea');
                textarea.value = toDoDescription.value;
                textarea.setAttribute('maxlength', '50');
                textarea.setAttribute('id', 'todo-description');
                textarea.setAttribute('rows', '4'); // Set the number of visible rows
              
                toDoDescriptionContainer.replaceChild(textarea, toDoDescription);
              
                textarea.addEventListener('blur', () => {
                  toDoDescription.value = textarea.value;
                  project.todos[i].description = textarea.value;
                  displayProject(project);
                });
              });

            // Notes Event
            toDoNotes.addEventListener('click', () => {
                const textarea = document.createElement('textarea'); // textarea to enable text wrapping
                textarea.value = toDoNotes.value;
                textarea.setAttribute('maxlength', 200);
                textarea.setAttribute('id', 'todo-notes');
                textarea.setAttribute('rows', '6');

                toDoNotesContainer.replaceChild(textarea, toDoNotes);
            
                textarea.addEventListener('blur', () => {
                    toDoNotes.value = textarea.value;
                    project.todos[i].notes = textarea.value;
                    displayProject(project);
                });
            });

            

            // Due Date Event
            toDoDueDate.addEventListener('click', () => {
                // Create an input element with type "date"
                const input = document.createElement('input');
                input.type = 'date';
                input.value = project.todos[i].dueDate;

                // Replace the due date element with the input element
                toDoDueDateContainer.replaceChild(input, toDoDueDate);

                // Add change event listener to input element
                input.addEventListener('change', () => {
                    toDoDueDate.textContent = input.value;
                    project.todos[i].editDueDate(input.value);
                    displayProject(project);
                });
            });

            // Remove Button Event
            toDoRemoveButton.addEventListener('click', () => {
                project.todos.splice(i, 1);
                displayProject(project);
            });

            toDoElement.appendChild(toDoTitleContainer);
            toDoElement.appendChild(toDoDescriptionContainer);
            toDoElement.appendChild(toDoPriorityContainer);
            toDoElement.appendChild(toDoNotesContainer);
            toDoElement.appendChild(toDoDueDateContainer);
            toDoElement.appendChild(toDoRemoveButton);

            toDoList.appendChild(toDoElement);
        }
    }
}