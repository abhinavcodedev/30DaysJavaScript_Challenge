const taskFrom = document.getElementById('taskForm'); 
// const addTaskbtn = document.getElementById('addTaskbtn');
const taskList = document.getElementById('taskList');
let tasks = [];

function taskFormSubmitHandler(e){
    e.preventDefault();
    const title = document.getElementById('taskTitle').value;
    const description = document.getElementById('taskDesc').value;
    const dueDate = document.getElementById('taskDate').value;
    const newTask = {
        title,
        description,
        dueDate
    };
    tasks.push(newTask);
    displayTasks();
    taskFrom.reset();
}

taskFrom.addEventListener('submit', taskFormSubmitHandler);

function displayTasks(){
    taskList.innerHTML= '';
    tasks.forEach((task, index)=>{
        const li = document.createElement('li');

        li.innerHTML=`<div class= "taskDetails">
            <strong>${task.title}</strong><br>
            ${task.description}<br>
            Due: ${task.dueDate}
        </div>
        <button class="editBtn" onclick="editTask(${index})">Edit</button><br>
        <button class="deleteBtn" onclick="deleteTask(${index})">Delete</button>`;
        taskList.appendChild(li);
    });
}

function editTask(index){
    const task = tasks[index];
    document.getElementById('taskTitle').value = task.title;
    document.getElementById('taskDesc').value = task.description;
    document.getElementById('taskDate').value = task.dueDate;

    taskFrom.onsubmit = function(e){
        e.preventDefault();

        task.title = document.getElementById('taskTitle').value;
        task.description = document.getElementById('taskDesc').value;
        task.dueDate = document.getElementById('taskDate').value;
        displayTasks();
        taskFrom.onsubmit = taskFormSubmitHandler;  //Revert to normal submission
        taskFrom.reset()
    };
}

function deleteTask(index){
    const confirmDelete = confirm('Are you sure you want to delete this task?');
    if(confirmDelete){
        tasks.splice(index,1);
        displayTasks();
    }
}