//let testTasks = [];

function addTask(tasks, task) {
    tasks.push(task);
    console.log(`${task} has been added to your task list!`)
}

//addTask(testTasks, "dishes");

function listTasks(tasks) {
    tasks.forEach((task, index) => console.log(`Task ${index + 1}. ${task}`))
};

module.exports = { addTask, listTasks };