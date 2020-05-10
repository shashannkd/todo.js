let taskList = [];

class Task {
  constructor(taskName, dueDate, isDone) {
    this.taskId = Date.now();
    this.taskName = taskName;
    this.dueDate = dueDate;
    this.isDone = isDone;
  }

  toString() {
    let htmlText = '<li class="task" ><div>';
    htmlText += this.taskName + " " + this.dueDate;
    htmlText += '<input type="checkbox" name="isDone" id="isDone">';
    htmlText += '<button onclick="deleteTask(';
    htmlText += this.taskId;
    htmlText += ')">Delete</button>';
    htmlText += "</div></li>";
    return htmlText;
  }
}

function render() {
  const listUI = document.getElementById("todolist");
  listUI.innerHTML = "";
  // Get taskList from an API call

  if (taskList.length === 0) listUI.innerHTML = "No tasks todo :)";
  taskList.forEach((task) => {
    listUI.innerHTML += task.toString();
  });
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

function createTask() {
  let taskName = document.getElementById("taskName").value;
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
  taskList.push(t);
  // Call a web api to update the database on the server
  render();
  console.log(taskList);
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
