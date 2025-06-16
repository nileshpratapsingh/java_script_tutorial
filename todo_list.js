// Simple Todo List in JavaScript (console-based)

let todos = [];

function addTodo(task) {
    todos.push({ task, done: false });
    console.log(`Added: "${task}"`);
}

function listTodos() {
    if (todos.length === 0) {
        console.log("No todos yet!");
        return;
    }
    console.log("Your Todos:");
    todos.forEach((todo, idx) => {
        console.log(`${idx + 1}. [${todo.done ? "x" : " "}] ${todo.task}`);
    });
}

function markDone(index) {
    if (index < 1 || index > todos.length) {
        console.log("Invalid todo number.");
        return;
    }
    todos[index - 1].done = true;
    console.log(`Marked as done: "${todos[index - 1].task}"`);
}

function removeTodo(index) {
    if (index < 1 || index > todos.length) {
        console.log("Invalid todo number.");
        return;
    }
    let removed = todos.splice(index - 1, 1);
    console.log(`Removed: "${removed[0].task}"`);
}

// Example usage:
addTodo("Learn JavaScript");
addTodo("Build a todo list");
listTodos();
markDone(1);
listTodos();