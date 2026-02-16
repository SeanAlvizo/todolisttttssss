document.getElementById('add-task-btn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        // Create a new list item
        const taskItem = document.createElement('li');
        
        // Create the checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('task-checkbox');
        checkbox.addEventListener('change', toggleComplete); // Listen for changes on checkbox

        // Add the task text to the item
        const taskLabel = document.createElement('span');
        taskLabel.textContent = taskText;
        taskLabel.classList.add('task-text');

        // Create a delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', deleteTask);

        // Append elements to the list item
        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskLabel);
        taskItem.appendChild(deleteBtn);

        // Add the task item to the list
        document.getElementById('task-list').appendChild(taskItem);

        // Clear input field after adding the task
        taskInput.value = "";
    }
}

function toggleComplete(event) {
    const taskItem = event.target.closest('li'); // Get the li element that contains the checkbox
    const taskLabel = taskItem.querySelector('.task-text');
    
    // Toggle 'completed' class to mark as complete/incomplete
    taskLabel.classList.toggle('completed');
}

function deleteTask(event) {
    const taskItem = event.target.parentElement;
    
    // Remove the task from the list
    taskItem.remove();
}
