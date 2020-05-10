let taskList = [];

class Task {
  constructor(taskName, dueDate, isDone) {
    this.taskId = Date.now();
    this.taskName = taskName;
    this.dueDate = dueDate;
    this.isDone = isDone;
  }
  toString() {
    let htmlText = '<li class="task"><div>';
    htmlText += "<h2>" + this.taskName + "</h2>" + "is due on " + this.dueDate;
    htmlText += '<input type="checkbox" name="isDone" id = "';
    htmlText += this.taskId + '"';
    htmlText += 'onclick = "checkboxChange(';
    htmlText += this.taskId;
    htmlText += ')" id="isDone">';
    htmlText += '<button onclick="deleteTask(';
    htmlText += this.taskId;
    htmlText += ')">Delete</button>';
    htmlText += "</div></li>";
    return htmlText;
  }
}

function createTask() {
  let taskName = document.getElementById("taskName").value.trim();
  let dueDate = document.getElementById("dueDate").value;

  if (validateDueDate(dueDate)) {
    addTask(new Task(taskName, dueDate, false));
  } else {
    if (!document.body.contains(document.getElementById("errorMessage"))) {
      let ele = document.createElement("h3");

      ele.setAttribute("id", "errorMessage");
      ele.innerHTML = "";
      ele.innerHTML = "Please enter a valid due date.";
      ele.style.color = "red";

      document.getElementById("todolist").appendChild(ele);
    }
  }
}

function addTask(t) {
  document.getElementById("taskName").value = "";
  document.getElementById("dueDate").value = "";
  taskList.push(t);
  // Call a web api to update the database on the server
  render();
  console.log(taskList);
}

function deleteTask(taskId) {
  taskList = taskList.filter((t) => {
    if (t.taskId != taskId) return t;
  });
  // call a web api to update the database on the server

  // update the DOM
  render();
  console.log(taskList);
}

function render() {
  const listUI = document.getElementById("todolist");
  listUI.innerHTML = "";
  // Get taskList from an API call

  if (taskList.length === 0) listUI.innerHTML = "<h3>No tasks todo :)</h3>";
  taskList.forEach((task) => {
    listUI.innerHTML += task.toString();
  });
}

function validateDueDate(dueDate) {
  today = new Date();
  parsedDueDate = new Date(
    dueDate.split("-")[0],
    dueDate.split("-")[1] - 1,
    dueDate.split("-")[2]
  );
  if (parsedDueDate >= today) return true;
  return false;
}
function checkboxChange(taskId) {
  let changedTask = document.getElementById(String(taskId));
  let thisTask = taskList.find((t) => t.taskId === taskId);
  if (changedTask.checked) {
    changedTask.parentElement.setAttribute("id", "completed");
    thisTask.isDone = true;
  } else {
    changedTask.parentElement.setAttribute("id", "");
    thisTask.isDone = false;
  }
}

function init() {
  console.log("init called");

  // call a web api to retrieve the task list
  // write a function to send a api request
  // get the JSON
  // assign it to taskList
  // render

  render();
  console.log(taskList);
}

init();
