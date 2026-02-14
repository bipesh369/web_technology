const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");

// Add task
function addTask() {
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");

  // Task text
  const span = document.createElement("span");
  span.innerText = taskText;

  // Mark complete
  span.onclick = function () {
    span.classList.toggle("completed");
  };

  // Delete button
  const delBtn = document.createElement("button");
  delBtn.innerText = "Delete";
  delBtn.classList.add("delete-btn");

  delBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(span);
  li.appendChild(delBtn);
  list.appendChild(li);

  input.value = "";
}
