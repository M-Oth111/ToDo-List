var data = [];
var counter = 0;

function addTask() {
  var taskInput = document.getElementById("taskInput");
  var task = taskInput.value.trim(); 
  if (task !== "") {
    data[counter] = {
      id: counter,
      name: task,
      done: false
    };
    counter++;
    taskInput.value = "";
    displayItems();
  }
}

function displayItems() {
  var ul = document.getElementById("taskList");
  ul.innerHTML = "";

  for (let j = 0; j < data.length; j++) {
    var item = data[j];
    if (item) {
      var li = document.createElement("li");
      li.className = "d-flex justify-content-between align-items-center border p-3 mb-2 rounded shadow-sm bg-light";

      var span = document.createElement("span");
      span.textContent = item.name;
      if (item.done) {
        span.style.textDecoration = "line-through";
      }

      var toggleBtn = document.createElement("button");
      toggleBtn.className = "bg-success p-2 rounded-2 text-white fs-6 mx-2 text-decoration-none";
      toggleBtn.textContent = "Toggle";
      toggleBtn.onclick = () => toggle(j);

      var deleteBtn = document.createElement("button");
      deleteBtn.className = "bg-danger p-2 rounded-2 text-white fs-6 mx-2 text-decoration-none";
      deleteBtn.textContent = "Delete";
      deleteBtn.onclick = () => deleteTask(j);

      var btnGroup = document.createElement("div");
      btnGroup.appendChild(toggleBtn);
      btnGroup.appendChild(deleteBtn);

      li.appendChild(span);
      li.appendChild(btnGroup);

      ul.appendChild(li);
    }
  }
}

function toggle(index) {
  data[index].done = !data[index].done;
  displayItems();
}

function deleteTask(i) {
  data.splice(i, 1);  
  displayItems();
}

let alertShown = false; 

setInterval(() => {
  var allDone = data.length > 0 && data.every(task => task.done);

  if (allDone && !alertShown) {
    window.alert("All tasks done!");
    alertShown = true;
  }

  if (!allDone) {
    alertShown = false;
  }
}, 1000);


