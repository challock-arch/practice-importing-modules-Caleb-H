const taskManager = require("./taskManager.js");
const fileHandler = require("./fileHandler.js");
const path = require('path');

const filePath = path.join(__dirname, 'tasks.json');
// console.log(filePath);

let tasks = fileHandler.loadTasks(filePath);
//console.log(tasks);
taskManager.addTask(tasks, 'Dishes');
taskManager.addTask(tasks,"Dishes")

taskManager.listTasks(tasks);

fileHandler.saveTasks(filePath,tasks);