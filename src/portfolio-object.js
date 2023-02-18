export default class Portfolio {
    constructor(projects)
    {
        this.projects = projects;
    }

    addProject(project)
    {
        this.projects.push(project);
    }

    removeProject(index)
    {
        this.projects.splice(index, 1);
    }
}