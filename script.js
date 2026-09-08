const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", function() {
    const task = document.getElementById("taskInput").value;
    const deadline = document.getElementById("deadlineInput").value;
    const priority = document.getElementById("priorityInput").value;
    const duration = document.getElementById("durationInput").value;

    if (task === "" || deadline === "" || duration === "") {
        alert("Please fill in all fields");
        return;
    }

    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item");

    taskItem.innerHTML = `
        <h3>${task}</h3>
        <p>Deadline: ${deadline}</p>
        <p>Priority: ${priority}</p>
        <p>Estimated time: ${duration} hours</p>
    `;

    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    taskItem.appendChild(completeButton);

    completeButton.addEventListener("click", function() {
    taskItem.classList.toggle("completed");
});

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    taskItem.appendChild(deleteButton);

    deleteButton.addEventListener("click", function() {
        taskItem.remove();
    });

    taskList.appendChild(taskItem);

    document.getElementById("taskInput").value = "";
    document.getElementById("deadlineInput").value = "";
    document.getElementById("priorityInput").value = "medium";
    document.getElementById("durationInput").value = "";
});