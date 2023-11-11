import { render_header } from "./header.js";
import { create_todo_container } from "./generate_todo_div.js"
import { render_middle_div } from "./middle.js";
import { form, project_form } from "./forms.js";
import { render_sidebar_div } from "./sidebar.js";
import { projects } from "./create_project.js";
import { createProjectDiv } from "./generate_project_div.js";
import { displayProjects, displayTodos } from "./display.js";
import './style.css';

//this is the main module through which the application runs from 

const container = document.getElementById("container");
//current_project is equal to the projects who is currently selected by the user
let current_project = projects.project_array[0];
const todo_form = form();
const project_creator = project_form();
render_header();
const middle = render_middle_div();
middle.appendChild(todo_form);
middle.appendChild(project_creator);
const todo_container = create_todo_container(middle);
const projects_container = render_sidebar_div();
middle.appendChild(projects_container);
middle.appendChild(todo_container);
displayProjects();
displayTodos(current_project);

//create a default project if no project exists
if (projects.project_array.length === 0){ //if there are no projects in the array then create a default project, else a default project must already exist
    projects.create_project('General');
    let current_project = projects.project_array[0];
    createProjectDiv(projects.project_array[0].title);
}

//save the projects array to local storage
localStorage.setItem('projects', JSON.stringify(projects.project_array));

export { container, middle, todo_container, current_project }