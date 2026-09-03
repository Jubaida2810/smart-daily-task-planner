const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", function(){
    const task = document.getElementById("taskInput").value;
    const deadline = document.getElementById("deadlineInput").value;
    const priority = document.getElementById("priorityInput").value;
    const duration = document.getElementById("durationInput").value;
    const taskItem = document.createElement("div");
    taskItem.innerHTML = `
    <h3>${task}</h3>
    <p>Deadline: ${deadline}</p>
    <p>Priority: ${priority}</p>
    <p>Estimated time: ${duration} hours</p>
`;
    
taskList.appendChild(taskItem);

    console.log(task);
    console.log(deadline);
    console.log(priority);
    console.log(duration);

taskList.appendChild(taskItem);
    document.getElementById("taskInput").value = "";
document.getElementById("deadlineInput").value = "";
document.getElementById("priorityInput").value = "medium";
document.getElementById("durationInput").value = "";

});

