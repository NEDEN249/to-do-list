import { projects } from "./create_project";
import { middle } from "./index";
import { createHTMLelement } from "./html_element_creator";
import { project_edit_form } from "./forms";
import { displayTodos } from "./display";
import { current_project } from "./index";

function createProjectDiv(name){
    const project_div = document.getElementById('project-div');
    project_div.addEventListener('click', (e) => {
        let project_title = e.target.innerText;
        projects.project_array.forEach((project) => {
            if (project.title === project_title){
                current_project = project;
                displayTodos(project);
            }
        })
    })
    const individual_project_div = createHTMLelement('div', 'project-element-div', null);
    individual_project_div.appendChild(createHTMLelement('p', 'project-title', name));

    const del = individual_project_div.appendChild(createHTMLelement('a', 'project-delete', '🗑️'));
        del.addEventListener('click', (e) => {
            let index = projects.findProject(e.target.previousSibling.textContent);
            //here
            projects.removeProject(index);
            e.target.parentNode.remove();
            current_project = projects.project_array[0];
            displayTodos(current_project);
        });
        const project_edit = createHTMLelement('a', 'project-edit', '✏️');
        individual_project_div.appendChild(project_edit);
        project_div.appendChild(individual_project_div);
        project_edit.setAttribute('href', '#edit-project')    
        project_edit.addEventListener('click', (e) => {
                projects.project_array.forEach((project) => {
                    if (project.title === e.target.parentNode.firstChild.textContent){
                        //alert(e.target.parentNode.firstChild.textContent);
                        const project_editor = project_edit_form();
                        middle.appendChild(project_editor);
                        let title = document.getElementById('edit-project-title');
                        project_editor.addEventListener("submit", (f) => {
                            f.preventDefault();
                            let index = projects.findProject(project.title);
                            projects.editProject(index, title.value);
                            e.target.parentNode.firstChild.textContent = title.value;
                            project_editor.remove();
                        })
                    }
                })
            });
            document.getElementById('project-form').reset();
}

export { createProjectDiv }