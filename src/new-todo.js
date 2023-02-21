// This is a form that is displayed to gather information to create a new Todo object.

export function newToDoForm() {
    const form = document.createElement('form');
    form.setAttribute('id', 'new-todo'); 

    const formTitle = document.createElement('textarea');
    formTitle.setAttribute('maxlength', '20'); // character limit
    formTitle.setAttribute('required', 'true');
    formTitle.setAttribute('name', 'title');
    const titleLabel = document.createElement('label');
    titleLabel.setAttribute('for', 'titleLabel');
    titleLabel.textContent = "Title: ";

    const formDesc = document.createElement('textarea');
    formDesc.setAttribute('maxlength', '50'); // character limit
    formDesc.setAttribute('name', 'description');
    formDesc.setAttribute('id', 'form-description');
    const descLabel = document.createElement('label');
    descLabel.setAttribute('for', 'descriptionLabel');
    descLabel.textContent = "Description: ";

    const priorityLabel = document.createElement('label');
    priorityLabel.setAttribute('for', 'priorityLabel');
    priorityLabel.setAttribute('id', 'form-priority-label');
    priorityLabel.textContent = "Priority Level: ";

    const priorityLevel1 = document.createElement('input');
    priorityLevel1.setAttribute('type', 'radio');
    priorityLevel1.setAttribute('name', 'priority');
    priorityLevel1.setAttribute('value', '1 (low)');
    priorityLevel1.setAttribute('checked', true); // default selection
    const priorityLabel1 = document.createElement('label');
    priorityLabel1.textContent = "Low";
    const priorityContainer1 = document.createElement('div');
    priorityContainer1.setAttribute('id', 'form-priority-container1');
    priorityContainer1.appendChild(priorityLabel1);
    priorityContainer1.appendChild(priorityLevel1);

    const priorityLevel2 = document.createElement('input');
    priorityLevel2.setAttribute('type', 'radio');
    priorityLevel2.setAttribute('name', 'priority');
    priorityLevel2.setAttribute('value', '2 (medium)');
    const priorityLabel2 = document.createElement('label');
    priorityLabel2.textContent = "Medium";
    const priorityContainer2 = document.createElement('div');
    priorityContainer2.setAttribute('id', 'form-priority-container2');
    priorityContainer2.appendChild(priorityLabel2);
    priorityContainer2.appendChild(priorityLevel2);

    const priorityLevel3 = document.createElement('input');
    priorityLevel3.setAttribute('type', 'radio');
    priorityLevel3.setAttribute('name', 'priority');
    priorityLevel3.setAttribute('value', '3 (high)');
    const priorityLabel3 = document.createElement('label');
    priorityLabel3.textContent = "High";
    const priorityContainer3 = document.createElement('div');
    priorityContainer3.setAttribute('id', 'form-priority-container3');
    priorityContainer3.appendChild(priorityLabel3);
    priorityContainer3.appendChild(priorityLevel3);

    const formNotes = document.createElement('textarea');
    formNotes.setAttribute('maxlength', '200'); // character limit
    formNotes.setAttribute('name', 'notes');
    formNotes.setAttribute('id', 'form-notes');
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
    submitButton.textContent = "Create ToDo";

    // const cancelButton = document.createElement('button');
    // cancelButton.setAttribute('type', 'button');
    // cancelButton.textContent = "Cancel";
    // cancelButton.addEventListener('submit', (event) => { 
    //     event.preventDefault(); // prevent the form from submitting
    // });

    // append the elements to the form
    form.appendChild(titleLabel);
    form.appendChild(formTitle);
    form.appendChild(document.createElement('br'));
    form.appendChild(descLabel);
    form.appendChild(formDesc);
    form.appendChild(document.createElement('br'));
    form.appendChild(priorityLabel);
    form.appendChild(priorityContainer1);
    form.appendChild(priorityContainer2);
    form.appendChild(priorityContainer3);
    form.appendChild(document.createElement('br'));
    form.appendChild(notesLabel);
    form.appendChild(formNotes);
    form.appendChild(document.createElement('br'));
    form.appendChild(duedateLabel);
    form.appendChild(formDueDate);
    form.appendChild(document.createElement('br'));
    form.appendChild(submitButton);
    // form.appendChild(cancelButton);

    return form;
}

export function handleTodoFormSubmit(formData)
{
    const title = formData.get('title');
    const desc = formData.get('description');
    const priority = formData.get('priority');
    const notes = formData.get('notes');
    const dueDate = formData.get('dueDate');

    return { title, desc, priority, notes, dueDate };
}