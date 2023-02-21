export function createForm() {
    const form = document.createElement('form');
  
    const titleLabel = document.createElement('label');
    titleLabel.textContent = 'Title:';
    form.appendChild(titleLabel);
  
    const titleInput = document.createElement('input');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('name', 'title');
    titleInput.setAttribute('maxlength', '20');
    form.appendChild(titleInput);
  
    const descriptionLabel = document.createElement('label');
    descriptionLabel.textContent = 'Description:';
    form.appendChild(descriptionLabel);
  
    const descriptionInput = document.createElement('input');
    descriptionInput.setAttribute('type', 'text');
    descriptionInput.setAttribute('name', 'description');
    descriptionInput.setAttribute('maxlength', '50');
    form.appendChild(descriptionInput);
  
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    form.appendChild(submitButton);
  
    return form;
  }

export function handleFormSubmit(formData) {
    const title = formData.get('title');
    const description = formData.get('description');
    const array = [];
  
    return { title, description, array };
}