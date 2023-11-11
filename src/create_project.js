const projects = (() => {
    let project_array = [];
    //localStorage.clear();
    if (localStorage.getItem('projects') === null){
        
    }
    else{
        const project_local = JSON.parse(localStorage.getItem('projects'));
        project_array = project_local;
    }
    class Project {
        constructor(title) {
            this.title = title;
            this.todos = [];
        }
    }

    function create_project(title){
        let project = new Project(title);
        project_array.push(project);
        localStorage.setItem('projects', JSON.stringify(projects.project_array));
    }

    function addTodo(index, todo){
        project_array[index].todos.push(todo);
        localStorage.setItem('projects', JSON.stringify(projects.project_array));
    }

    function removeTodo(project_id, index){
        //alert(project_array[project_id].todos.length);
        project_array[project_id].todos.splice(index, 1);
        //alert(project_array[project_id].todos.length);
        localStorage.setItem('projects', JSON.stringify(projects.project_array));
    }

    function removeProject(project_id){
        //alert(project_array.length);
        project_array.splice(project_id, 1);
        //alert(project_array.length);
        localStorage.setItem('projects', JSON.stringify(projects.project_array));
    }

    function editTodo(project_id, index, title, dueDate, priority, description){
        project_array[project_id].todos[index].title = title;
        project_array[project_id].todos[index].dueDate = dueDate;
        project_array[project_id].todos[index].priority = priority;
        project_array[project_id].todos[index].description = description;
        localStorage.setItem('projects', JSON.stringify(projects.project_array));
    }

    function editProject(project_id, title){
        project_array[project_id].title = title;
        localStorage.setItem('projects', JSON.stringify(projects.project_array));
    }

    function findProject(title){
        return project_array.findIndex(index => index.title === title);
    }

    function findTodo(title, project_id){
        return project_array[project_id].todos.findIndex(index => index.title === title);
    }

    return { project_array, create_project, addTodo, removeTodo, removeProject, editTodo, editProject, findProject, findTodo }
})();

export { projects };

