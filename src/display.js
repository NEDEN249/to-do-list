import { projects } from './create_project';
import { createProjectDiv } from './generate_project_div';
import { create_todo } from './generate_todo_div';
import { todo_container } from './index';

function displayProjects(){
    projects.project_array.forEach((project) => {
        createProjectDiv(project.title);
    });
}

function displayTodos(project){
    removePreviousSelection();
    project.todos.forEach((todo) => {
        todo_container.appendChild(create_todo(todo));
    })
}

//removes child nodes when refreshing/reloading the display
function removePreviousSelection(){
    let todos = document.getElementById("todo-container");
    let child = todos.lastElementChild;
    while (child){
        todos.removeChild(child);
        child = todos.lastElementChild;
    }
}

export { displayProjects, displayTodos, removePreviousSelection }
