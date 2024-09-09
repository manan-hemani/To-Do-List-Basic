const toDoList = document.getElementById("to-do-list");
const addTask = document.getElementById("add-button");
const input = document.getElementById("task-input");

addTask.addEventListener("click", function () {
  addItem();
});

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addItem();
  }
});

function addItem() {
  if (input.value === "") {
    return alert("Input Task! Please😅");
  }

  var parentDiv = document.createElement("div");
  var childDiv = document.createElement("div");
  var buttonDiv = document.createElement("div");
  var ul = document.createElement("ul");
  var edit = document.createElement("button");
  var trash = document.createElement("button");

  parentDiv.className = "content";
  childDiv.className = "item";
  ul.className = "ul";
  ul.innerHTML = "<li>" + input.value + "</li>";

  edit.className = "button";
  edit.style.color = "#cad2c5";
  edit.textContent = "CHECK";

  edit.addEventListener("click", function () {
    ul.style.textDecoration = "line-through";
    ul.style.color = "white";
  });

  buttonDiv.appendChild(edit);
  ul.appendChild(buttonDiv);

  trash.className = "button";
  trash.style.color = "#cad2c5";
  trash.textContent = "DELETE";
  trash.addEventListener("click", function () {
    childDiv.remove();
  });
  buttonDiv.appendChild(trash);
  ul.appendChild(buttonDiv);

  childDiv.appendChild(ul);
  toDoList.appendChild(childDiv);
  input.value = ""; // resetting the input field as empty
}
