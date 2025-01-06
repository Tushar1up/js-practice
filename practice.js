let todos = [];

// Function to add a new to-do
function addTodo(todo) {
    todos.push(todo);
    console.log(`Added: ${todo}`);
}

// Function to display all to-dos
function displayTodos() {
    console.log("To-Do List:");
    todos.forEach((todo, index) => {
        console.log(`${index + 1}. ${todo}`);
    });
}

// Function to remove a to-do by index
function removeTodo(index) {
    if (index >= 0 && index < todos.length) {
        const removed = todos.splice(index, 1);
        console.log(`Removed: ${removed[0]}`);
    } else {
        console.log("Invalid index");
    }
}

// Example usage
addTodo("Learn JavaScript");
addTodo("Build a to-do app");
displayTodos();
removeTodo(0);
displayTodos();