// Save the todo item and selected days
async function saveTodo(event) {
    const sunday = document.querySelector('#sunday-checkbox').checked;
    const monday = document.querySelector('#monday-checkbox').checked;
    const tuesday = document.querySelector('#tuesday-checkbox').checked;
    const wednesday = document.querySelector('#wednesday-checkbox').checked;
    const thursday = document.querySelector('#thursday-checkbox').checked;
    const friday = document.querySelector('#friday-checkbox').checked;
    const saturday = document.querySelector('#saturday-checkbox').checked;
  
    if ((sunday || monday || tuesday || wednesday || thursday || friday || saturday)) {
      const response = await fetch(`/update/${event.target.classList[4]}`, {
        method: 'PUT',
        body: JSON.stringify({
          sunday,
          monday,
          tuesday,
          wednesday,
          thursday,
          friday,
          saturday,
        }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to save todo item.');
      }
    }
  }
  async function fetchRecurringTodos() {
    const response = await fetch('/api/todos/recurring', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      const todos = await response.json();
      displayRecurringTodos(todos);
    } else {
      alert('Failed to fetch recurring todos.');
    }
  }
  
  function displayRecurringTodos(todos) {
    const recurringTodosContainer = document.getElementById('recurring-todos-container');
    recurringTodosContainer.innerHTML = '';
  
    todos.forEach((todo) => {
      const todoItem = document.createElement('div');
      todoItem.innerHTML = `
        <h3>${todo.title}</h3>
        <button class="edit-todo" data-id="${todo.id}">Edit</button>
        <button class="delete-todo" data-id="${todo.id}">Delete</button>
      `;
      recurringTodosContainer.appendChild(todoItem);
    });
  
    document.querySelectorAll('.edit-todo').forEach((button) => {
      button.addEventListener('click', () => {
        const todoId = button.dataset.id;
        // ... populate form with todo details
        // ... display the form for editing
      });
    });
  
    document.querySelectorAll('.delete-todo').forEach((button) => {
      button.addEventListener('click', () => {
        const todoId = button.dataset.id;
        deleteTodo(todoId);
      });
    });
  }
  
  async function updateTodo(todoId, updatedValues) {
    const response = await fetch(`/api/todos/${todoId}`, {
      method: 'PUT',
      body: JSON.stringify(updatedValues),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      alert('Todo updated successfully.');
      fetchRecurringTodos();
    } else {
      alert('Failed to update todo.');
    }
  }