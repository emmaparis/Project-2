document.getElementById('settings-form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const todoItem = document.getElementById('todo-item').value;
    const frequency = document.getElementById('frequency').value;
  
    // Save settings and perform necessary operations
    console.log('To Do Item:', todoItem);
    console.log('Frequency:', frequency);
  });
  