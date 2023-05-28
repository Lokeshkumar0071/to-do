// Add Task
document.getElementById('addTaskBtn').addEventListener('click', function() {
  var taskInput = document.getElementById('taskInput');
  var taskList = document.getElementById('taskList');

  if (taskInput.value !== '') {
    var newTask = document.createElement('li');
    newTask.innerHTML = '<input type="checkbox"> ' + taskInput.value + '<button class="deleteTaskBtn">Delete</button>';
    taskList.appendChild(newTask);
    taskInput.value = '';
  }
});

// Delete Task
document.addEventListener('click', function(e) {
  if (e.target && e.target.className == 'deleteTaskBtn') {
    e.target.parentNode.remove();
  }
});

// Mark Task as Completed
document.addEventListener('change', function(e) {
  if (e.target && e.target.type == 'checkbox') {
    var task = e.target.parentNode;
    if (e.target.checked) {
      task.classList.add('completed');
    } else {
      task.classList.remove('completed');
    }
  }
});
