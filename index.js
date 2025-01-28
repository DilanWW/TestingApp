// index.js

let tasks = [];

function showTasks() {
    if (tasks.length === 0) {
        console.log("No tasks available.");
    } else {
        console.log("Tasks:");
        tasks.forEach((task, index) => {
            console.log(`${index + 1}. ${task}`);
        });
    }
}

function addTask(task) {
    tasks.push(task);
    console.log(`Task added: ${task}`);
}

function removeTask(index) {
    if (index < 0 || index >= tasks.length) {
        console.log("Invalid task index.");
    } else {
        const removed = tasks.splice(index, 1);
        console.log(`Task removed: ${removed[0]}`);
    }
}

// Test functions by adding and removing tasks
addTask("Learn JavaScript");
addTask("Build a project");
addTask("Debug in VSCode");

showTasks();

removeTask(1);  // Removing the second task
showTasks();

removeTask(5);  // Trying to remove an invalid task
