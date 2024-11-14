// i used chatgpt entirely for js
function allowDrop(event) {
    event.preventDefault();
}


function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}


function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const task = document.getElementById(data);
    

    const targetList = event.target.tagName === "UL" ? event.target : event.target.querySelector("ul");
    
    if (targetList) {
        targetList.appendChild(task); 
    }
}


function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();
    
    if (taskText) {
        const taskList = document.getElementById("to-complete-list"); 
        
        
        const newTask = document.createElement("li");
        newTask.textContent = taskText;
        newTask.id = "task-" + Date.now();
        newTask.setAttribute("draggable", true);
        newTask.addEventListener("dragstart", drag); 
        
        
        taskList.appendChild(newTask);
        
        
        taskInput.value = "";
    }
}
