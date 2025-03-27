function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        let li = document.createElement("li");
        li.innerHTML = taskInput.value + ' <button class="delete-btn" onclick="removeTask(this)">X</button>';
        taskList.appendChild(li);
        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}

function removeTask(button) {
    button.parentElement.remove();
}
