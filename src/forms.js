import { createHTMLelement } from "./html_element_creator";
import { current_project, todo_container } from "./index";
import { create_todo } from "./generate_todo_div";
import { create_todo_object } from "./create_todo_object";
import { projects } from "./create_project";
import { createProjectDiv } from "./generate_project_div";

function form(){
    const overlay = createHTMLelement('div', 'new-form', null);
    overlay.classList.add('overlay')
    const wrapper = createHTMLelement('div', 'wrapper', null);
    wrapper.classList.add('wrapper');
    const title = createHTMLelement('h1', 'title', 'Fill in To-Do Details');
    const close = createHTMLelement('a', 'close', 'X');
    close.setAttribute('href', '#');
    const content = createHTMLelement('div', 'form-content', null);
    content.classList.add('form-content');
    const container = createHTMLelement('div', 'form-container', null);
    container.classList.add('form-container');
    const form = createHTMLelement('form', 'todo-form', null);
    form.setAttribute('action', '');
    const title_label = createHTMLelement('label', 'title-label', 'Title');
    title_label.setAttribute('for', 'todo-title');
    const todo_title = createHTMLelement('input', 'todo-title', null);
    todo_title.setAttribute('type', 'text');
    todo_title.setAttribute('name', 'todo-title');
    todo_title.setAttribute('maxlength', '25');
    const description_label = createHTMLelement('label', 'description-label', 'Description');
    description_label.setAttribute('for', 'todo-description');
    const todo_description = createHTMLelement('input', 'todo-description', null);
    todo_description.setAttribute('type', 'text');
    todo_description.setAttribute('name', 'todo-description');
    const dueDate_label = createHTMLelement('label', 'dueDate-label', 'Due Date');
    dueDate_label.setAttribute('for', 'todo-dueDate');
    const todo_dueDate = createHTMLelement('input', 'todo-dueDate', null);
    todo_dueDate.setAttribute('type', 'date');
    todo_dueDate.setAttribute('name', 'todo-dueDate');
    const priority_label = createHTMLelement('label', 'priority-label', 'Priority');
    priority_label.setAttribute('for', 'todo-priority');
    const todo_priority = createHTMLelement('select', 'todo-priority', null);
    todo_priority.setAttribute('name', 'todo-priority');
    const option1 = createHTMLelement('option', 'high', 'High');
    option1.setAttribute('value', 'high');
    const option2 = createHTMLelement('option', 'medium', 'Medium');
    option2.setAttribute('value', 'medium');
    const option3 = createHTMLelement('option', 'low', 'Low');
    option3.setAttribute('value', 'low');
    const submit = createHTMLelement('button', 'submit', 'Submit');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('value', 'Submit');
    form.appendChild(title_label);
    form.appendChild(todo_title);
    form.appendChild(description_label);
    form.appendChild(todo_description);
    form.appendChild(dueDate_label);
    form.appendChild(todo_dueDate);
    form.appendChild(priority_label);
    form.appendChild(todo_priority);
    todo_priority.appendChild(option1);
    todo_priority.appendChild(option2);
    todo_priority.appendChild(option3);
    form.appendChild(submit);
    container.appendChild(form);
    content.appendChild(container);
    wrapper.appendChild(title);
    wrapper.appendChild(close);
    wrapper.appendChild(content);
    overlay.appendChild(wrapper);

    overlay.addEventListener("submit", (e) => {
        e.preventDefault();
        let title = document.getElementById('todo-title').value;
        let description = document.getElementById('todo-description').value;
        let dueDate = document.getElementById('todo-dueDate').value;
        let priority = document.getElementById('todo-priority').value;
        if (title == '' || description == '' || dueDate == '' || priority == ''){
            alert('Please fill in all the fields');
        }
        else{
            const index = projects.findProject(current_project.title);
            //alert(current_project.title + ' ' + current_project.id)
            projects.addTodo(index, create_todo_object(title, dueDate, priority, description));
            current_project = projects.project_array[index];
            todo_container.appendChild(create_todo(create_todo_object(title, dueDate, priority, description)));
            document.getElementById('todo-form').reset();
        }
    })

    return overlay;
}

function edit_form(){
    const overlay = createHTMLelement('div', 'edit-form', null);
    overlay.classList.add('overlay')
    const wrapper = createHTMLelement('div', 'wrapper', null);
    wrapper.classList.add('wrapper');
    const title = createHTMLelement('h1', 'title', 'Fill in To-Do Details');
    const close = createHTMLelement('a', 'close', 'X');
    close.setAttribute('href', '#');
    const content = createHTMLelement('div', 'edit-form-content', null);
    content.classList.add('edit-form-content');
    const container = createHTMLelement('div', 'edit-form-container', null);
    container.classList.add('edit-form-container');
    const form = createHTMLelement('form', 'todo-edit-form', null);
    form.setAttribute('action', '');
    const title_label = createHTMLelement('label', 'title-label', 'Title');
    title_label.setAttribute('for', 'todo-title');
    const todo_title = createHTMLelement('input', 'edit-title', null);
    todo_title.setAttribute('type', 'text');
    todo_title.setAttribute('name', 'edit-title');
    todo_title.setAttribute('maxlength', '25');
    const description_label = createHTMLelement('label', 'description-label', 'Description');
    description_label.setAttribute('for', 'edit-description');
    const todo_description = createHTMLelement('input', 'edit-description', null);
    todo_description.setAttribute('type', 'text');
    todo_description.setAttribute('name', 'edit-description');
    const dueDate_label = createHTMLelement('label', 'dueDate-label', 'Due Date');
    dueDate_label.setAttribute('for', 'edit-dueDate');
    const todo_dueDate = createHTMLelement('input', 'edit-dueDate', null);
    todo_dueDate.setAttribute('type', 'date');
    todo_dueDate.setAttribute('name', 'edit-dueDate');
    const priority_label = createHTMLelement('label', 'priority-label', 'Priority');
    priority_label.setAttribute('for', 'todo-priority');
    const todo_priority = createHTMLelement('select', 'edit-priority', null);
    todo_priority.setAttribute('name', 'edit-priority');
    const option1 = createHTMLelement('option', 'high', 'High');
    option1.setAttribute('value', 'high');
    const option2 = createHTMLelement('option', 'medium', 'Medium');
    option2.setAttribute('value', 'medium');
    const option3 = createHTMLelement('option', 'low', 'Low');
    option3.setAttribute('value', 'low');
    const submit = createHTMLelement('button', 'submit', 'Submit');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('value', 'Submit');
    form.appendChild(title_label);
    form.appendChild(todo_title);
    form.appendChild(description_label);
    form.appendChild(todo_description);
    form.appendChild(dueDate_label);
    form.appendChild(todo_dueDate);
    form.appendChild(priority_label);
    form.appendChild(todo_priority);
    todo_priority.appendChild(option1);
    todo_priority.appendChild(option2);
    todo_priority.appendChild(option3);
    form.appendChild(submit);
    container.appendChild(form);
    content.appendChild(container);
    wrapper.appendChild(title);
    wrapper.appendChild(close);
    wrapper.appendChild(content);
    overlay.appendChild(wrapper);
    return overlay;
}

function project_form(){
    const overlay_project = createHTMLelement('div', 'new-project', null);
    overlay_project.classList.add('overlay-project')
    const wrapper = createHTMLelement('div', 'wrapper', null);
    wrapper.classList.add('wrapper');
    const title = createHTMLelement('h1', 'title', 'Fill in Project Details');
    const close = createHTMLelement('a', 'close', 'X');
    close.setAttribute('href', '#');
    const content = createHTMLelement('div', 'form-content', null);
    content.classList.add('form-content');
    const container = createHTMLelement('div', 'form-container', null);
    container.classList.add('form-container');
    const form = createHTMLelement('form', 'project-form', null);
    form.setAttribute('action', '');
    const title_label = createHTMLelement('label', 'title-label', 'Title');
    title_label.setAttribute('for', 'todo-title');
    const project_title = createHTMLelement('input', 'project-title', null);
    project_title.setAttribute('type', 'text');
    project_title.setAttribute('name', 'todo-title');
    project_title.setAttribute('maxlength', '10');
    const submit = createHTMLelement('button', 'submit', 'Submit');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('value', 'Submit');
    form.appendChild(title_label);
    form.appendChild(project_title);
    form.appendChild(submit);
    container.appendChild(form);
    content.appendChild(container);
    wrapper.appendChild(title);
    wrapper.appendChild(close);
    wrapper.appendChild(content);
    overlay_project.appendChild(wrapper);

    overlay_project.addEventListener("submit", (e) => {
        e.preventDefault();
        let title = document.getElementById('project-title').value;
        if (title == ''){
            alert('Please fill in all the fields');
        }
        else{
            projects.create_project(title);
            let index = projects.findProject(title);
            current_project = projects.project_array[index];
            createProjectDiv(title);
        }
    });

    return overlay_project;
}

function project_edit_form(){
    const overlay_project = createHTMLelement('div', 'edit-project', null);
    overlay_project.classList.add('overlay-project')
    const wrapper = createHTMLelement('div', 'wrapper', null);
    wrapper.classList.add('wrapper');
    const title = createHTMLelement('h1', 'title', 'Fill in Project Details');
    const close = createHTMLelement('a', 'close', 'X');
    close.setAttribute('href', '#');
    const content = createHTMLelement('div', 'form-content', null);
    content.classList.add('form-content');
    const container = createHTMLelement('div', 'form-container', null);
    container.classList.add('form-container');
    const form = createHTMLelement('form', 'edit-project-form', null);
    form.setAttribute('action', '');
    const title_label = createHTMLelement('label', 'title-label', 'Title');
    title_label.setAttribute('for', 'todo-title');
    const project_title = createHTMLelement('input', 'edit-project-title', null);
    project_title.setAttribute('type', 'text');
    project_title.setAttribute('name', 'todo-title');
    project_title.setAttribute('maxlength', '10');
    const submit = createHTMLelement('button', 'submit', 'Submit');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('value', 'Submit');
    form.appendChild(title_label);
    form.appendChild(project_title);
    form.appendChild(submit);
    container.appendChild(form);
    content.appendChild(container);
    wrapper.appendChild(title);
    wrapper.appendChild(close);
    wrapper.appendChild(content);
    overlay_project.appendChild(wrapper);
    return overlay_project;
}

export { form, edit_form, project_form, project_edit_form }