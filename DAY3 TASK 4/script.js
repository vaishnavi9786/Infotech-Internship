const storageKey = "todoTasks";

function getTasks() {
    let tasks = JSON.parse(localStorage.getItem(storageKey)) || [];

    return tasks.map(function (task, index) {
        if (typeof task === "string") {
            return {
                id: index.toString(),
                text: task
            };
        }

        return task;
    });
}

function saveTasks(tasks) {
    localStorage.setItem(storageKey, JSON.stringify(tasks));
}

function renderTasks() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    getTasks().forEach(function (task) {
        let li = document.createElement("li");
        li.dataset.id = task.id;

        li.innerHTML =
            task.text +
            `<button class="deleteBtn" onclick="deleteTask(this)">Delete</button>`;

        taskList.appendChild(li);
    });
}

function addTask() {

    let taskInput = document.getElementById("taskInput");
    let task = taskInput.value.trim();

    if (task === "") {
        alert("Please Enter Task");
        return;
    }

    let tasks = getTasks();
    tasks.push({
        id: Date.now().toString(),
        text: task
    });
    saveTasks(tasks);

    renderTasks();

    taskInput.value = "";
}

function deleteTask(button) {

    let taskId = button.parentElement.dataset.id;
    let tasks = getTasks();
    let updatedTasks = tasks.filter(function (task) {
        return String(task.id) !== String(taskId);
    });

    saveTasks(updatedTasks);
    renderTasks();
}

renderTasks();