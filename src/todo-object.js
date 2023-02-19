export default class Todo {

    constructor(title, description, dueDate, priority, notes) {
      this.title = title;
      this.description = description;
      this.priority = priority;
      this.notes = notes;
      this.dueDate = dueDate;
      this.completed = false;
    }
  
    markComplete() {
      this.completed = true;
    }
  
    editTitle(newTitle) {
      this.title = newTitle;
    }
  
    editDescription(newDescription) {
      this.description = newDescription;
    }
  
    editDueDate(newDueDate) {
      this.dueDate = newDueDate;
    }
  
    editPriority(newPriority) {
      this.priority = newPriority;
    }
  
    editNote(newNote) {
      this.note = newNote;
    }
  }
  