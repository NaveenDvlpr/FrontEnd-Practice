const add = document.getElementById("addButton");
const task = document.getElementById("addField");
const list = document.getElementById("list");

const addNewTask = (taskObject) => {
    const newLi = document.createElement("li");
    const newTask = document.createTextNode(taskObject.task);
    newLi.appendChild(newTask);
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    newLi.appendChild(checkBox);
    list.appendChild(newLi);
    checkBox.addEventListener("click", () => {
        newLi.style.textDecoration = "line-through";
        newLi.style.textDecorationThickness = "2px";
        checkBox.remove();
        let tasks = JSON.parse(localStorage.getItem("tasks"));
        const updateObject = tasks.find((task) => task.task == taskObject.task);
        tasks = tasks.filter(task => task.task != taskObject.task);
        updateObject.status = true;
        tasks = [...tasks, updateObject];
        localStorage.setItem("tasks", JSON.stringify(tasks));
        const del = document.createElement("i");
        del.className="fa-solid fa-trash";
        newLi.appendChild(del);
        del.addEventListener("click", () => {
            tasks = tasks.filter(task => task.task != taskObject.task);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            newLi.remove();
        })
    })
}

addEventListener("load", () => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    const tempTasks = [];
    if(tasks) {
        tasks.map(taskObject => {
            if(!taskObject.status) {
                tempTasks.push(taskObject);
                addNewTask(taskObject);
            }
        });
    } 
    localStorage.setItem("tasks", JSON.stringify(tempTasks));
})

add.addEventListener("click", ()=> {
    if(task.value) {
        let tasks = JSON.parse(localStorage.getItem("tasks"));
        const newTask = {
            task: task.value,
            status: false
        };
        tasks = [...tasks, newTask];
        localStorage.setItem("tasks", JSON.stringify(tasks));
        addNewTask(newTask);
        task.value = "";
    }
})

