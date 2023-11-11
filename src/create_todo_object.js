//takes in the users todo data and generates an object containing the data 
function create_todo_object(title, dueDate, priority, description){
    return {
        title: title,
        dueDate: dueDate,
        priority: priority,
        description: description
    }
}

export { create_todo_object }