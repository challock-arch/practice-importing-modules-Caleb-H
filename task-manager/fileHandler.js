const fs = require('fs');

function saveTasks(filePath, tasks) {
    fs.writeFileSync(filePath, JSON.stringify(tasks))
}

function loadTasks(filePath) {
    if (fs.existsSync(filePath)) {
        const tasks = fs.readFileSync(filePath, 'utf-8')
        return JSON.parse(tasks);
    } else {
        return [];
    }
}

// console.log(loadTasks("tasks.json"));

module.exports = { saveTasks, loadTasks };