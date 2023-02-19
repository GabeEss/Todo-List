import displayProject from "./display-project";
import Todo from "./todo-object";

export default function generateToDo(project) {
    const toDoList = document.getElementById('todo-container');

    if(Array.isArray(project.todos)) {
        for (let i = 0; i < project.todos.length; i++) {
            const toDo = project.todos[i];
            const toDoElement = document.createElement('div');

            const toDoTitleContainer = document.createElement('div');
            const toDoTitleLabel = document.createElement('label');
            toDoTitleLabel.textContent = "Item #" + (i + 1) + ": ";
            const toDoTitle = document.createElement('input');
            toDoTitle.setAttribute('type', 'text');
            toDoTitle.value = project.todos[i].title;
            toDoTitleContainer.appendChild(toDoTitleLabel);
            toDoTitleContainer.appendChild(toDoTitle);

            const toDoDescriptionContainer = document.createElement('div');
            const toDoDescriptionLabel = document.createElement('label');
            toDoDescriptionLabel.textContent = "Description: ";
            const toDoDescription = document.createElement('input');
            toDoDescription.setAttribute('type', 'text');
            toDoDescription.value = project.todos[i].description;
            toDoDescriptionContainer.appendChild(toDoDescriptionLabel);
            toDoDescriptionContainer.appendChild(toDoDescription);

            const toDoPriorityContainer = document.createElement('div');
            const toDoPriorityLabel = document.createElement('label');
            toDoPriorityLabel.textContent = "Priority: ";
            const toDoPriorityLow = document.createElement('input');
            toDoPriorityLow.setAttribute('type', 'radio');
            toDoPriorityLow.setAttribute('name', 'priority' + i);
            toDoPriorityLow.setAttribute('value', 'Low');
            const toDoPriorityLowLabel = document.createElement('label');
            toDoPriorityLowLabel.textContent = "Low";
            const toDoPriorityMedium = document.createElement('input');
            toDoPriorityMedium.setAttribute('type', 'radio');
            toDoPriorityMedium.setAttribute('name', 'priority' + i);
            toDoPriorityMedium.setAttribute('value', 'Medium');
            const toDoPriorityMediumLabel = document.createElement('label');
            toDoPriorityMediumLabel.textContent = "Medium";
            const toDoPriorityHigh = document.createElement('input');
            toDoPriorityHigh.setAttribute('type', 'radio');
            toDoPriorityHigh.setAttribute('name', 'priority' + i);
            toDoPriorityHigh.setAttribute('value', 'High');
            const toDoPriorityHighLabel = document.createElement('label');
            toDoPriorityHighLabel.textContent = "High";
            const priorityValues = ['Low', 'Medium', 'High'];
            toDoPriorityContainer.appendChild(toDoPriorityLabel);
            toDoPriorityContainer.appendChild(toDoPriorityHigh);
            toDoPriorityContainer.appendChild(toDoPriorityMedium);
            toDoPriorityContainer.appendChild(toDoPriorityLow);

            const toDoNotesContainer = document.createElement('div');
            const toDoNotesLabel = document.createElement('label');
            toDoNotesLabel.textContent = "Notes: ";
            const toDoNotes = document.createElement('input');
            toDoNotes.setAttribute('type', 'text');
            toDoNotes.value = project.todos[i].notes;
            toDoNotesContainer.appendChild(toDoNotesLabel);
            toDoNotesContainer.appendChild(toDoNotes);

            const toDoDueDateContainer = document.createElement('div');
            const toDoDueDateLabel = document.createElement('label');
            toDoDueDateLabel.textContent = "Due date: ";
            const toDoDueDate = document.createElement('input');
            toDoDueDate.setAttribute('type', 'date');
            toDoDueDate.value = project.todos[i].dueDate;
            toDoDueDateContainer.appendChild(toDoDueDateLabel);
            toDoDueDateContainer.appendChild(toDoDueDate);

            const toDoRemoveButton = document.createElement('button');
            toDoRemoveButton.textContent = "Delete ToDo";

            toDoTitle.addEventListener('click', () => {
                const input = document.createElement('input');
                input.type = 'text';
                input.value = toDoTitle.value;

                toDoElement.replaceChild(input, toDoTitle);
            
                input.addEventListener('blur', () => {
                    toDoTitle.value = input.value;
                    project.toDos[i].editTitle(input.value);
                    displayProject(project);
                    toDoTitleLabel.textContent = "Todo " + i + ": ";
                });
            });


            toDoDescription.addEventListener('click', () => {
                const input = document.createElement('input');
                input.type = 'text';
                input.value = toDoDescription.textContent;
            
                toDoElement.replaceChild(input, toDoDescription);
            
                input.addEventListener('blur', () => {
                    toDoDescription.textContent = input.value;
                    project.todos[i].editDescription(input.value);
                    displayProject(project);
                });
            });

            toDoNotes.addEventListener('click', () => {
                const input = document.createElement('input');
                input.type = 'text';
                input.value = toDoNotes.textContent;
            
                toDoElement.replaceChild(input, toDoNotes);
            
                input.addEventListener('blur', () => {
                    toDoTitle.textContent = input.value;
                    project.todos[i].editNote(input.value);
                    displayProject(project);
                });
            });

    //             // Add click event listener to priority element
    // toDoPriority.addEventListener('click', () => {
    //     // Create a select element with priority options
    //     const select = document.createElement('select');
    //     const options = ['Low', 'Medium', 'High'];
    //     for (let j = 0; j < options.length; j++) {
    //         const option = document.createElement('option');
    //         option.value = options[j];
    //         option.text = options[j];
    //         if (options[j] === project.todos[i].priority) {
    //             option.selected = true;
    //         }
    //         select.appendChild(option);
    //     }

    //         // Replace the priority element with the select element
    //         toDoElement.replaceChild(select, toDoPriority);

    //         // Add change event listener to select element
    //         select.addEventListener('change', () => {
    //             toDoPriority.textContent = select.value;
    //             project.toDos[i].editPriority(select.value);
    //             displayProject(project);
    //         });
    //     });

            // Add click event listener to due date element
            toDoDueDate.addEventListener('click', () => {
                // Create an input element with type "date"
                const input = document.createElement('input');
                input.type = 'date';
                input.value = project.todos[i].dueDate;

                // Replace the due date element with the input element
                toDoElement.replaceChild(input, toDoDueDate);

                // Add change event listener to input element
                input.addEventListener('change', () => {
                    toDoDueDate.textContent = input.value;
                    project.todos[i].editDueDate(input.value);
                    displayProject(project);
                });
            });

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