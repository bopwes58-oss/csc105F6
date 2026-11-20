const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskTextValue = taskInput.value.trim();

  if (taskTextValue === "") {
    return;
  }

  const listItem = document.createElement("li");

  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskTextValue;
  taskSpan.classList.add("task-text");

  const buttonGroup = document.createElement("div");
  buttonGroup.classList.add("button-group");

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Complete";
  completeBtn.classList.add("complete-btn");

  completeBtn.addEventListener("click", function () {
    listItem.classList.toggle("completed");
  });

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.classList.add("remove-btn");

  removeBtn.addEventListener("click", function () {
    listItem.remove();
  });

  buttonGroup.appendChild(completeBtn);
  buttonGroup.appendChild(removeBtn);
  listItem.appendChild(taskSpan);
  listItem.appendChild(buttonGroup);

  taskList.appendChild(listItem);

  taskInput.value = "";
  taskInput.focus();
}

addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});