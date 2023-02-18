export default class Project {
    constructor(title, description, todos)
    {
        this.title = title;
        this.description = description;
        this.completed = false;
        this.todos = todos || [];
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

    addToDo(todo) {
        this.todos.push(todo);
    }
}