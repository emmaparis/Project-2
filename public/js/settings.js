// Save the todo item and selected days
async function saveEdits(event) {
    const sunday = document.querySelector('#sunday').checked;
    const monday = document.querySelector('#monday').checked;
    const tuesday = document.querySelector('#tuesday').checked;
    const wednesday = document.querySelector('#wednesday').checked;
    const thursday = document.querySelector('#thursday').checked;
    const friday = document.querySelector('#friday').checked;
    const saturday = document.querySelector('#saturday').checked;
  
    if ((sunday || monday || tuesday || wednesday || thursday || friday || saturday)) {
      const isRecurring = true;
      console.log(event.target);
      const response = await fetch(`/recurring/${event.target.getAttribute("data-id")}`, {
        method: 'PUT',
        body: JSON.stringify({
          sunday,
          monday,
          tuesday,
          wednesday,
          thursday,
          friday,
          saturday,
          isRecurring,
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
    try {
      console.log("Button clicked");
    const response = await fetch('/recurring', 
    {
      method: 'GET',
      // headers: {'Content-Type': 'application/json'},
    });
  
    if (response.ok) {
      const todos = await response.json();
      console.log('Fetched data:', todos); // Add this line to log the fetched data
      displayRecurringTodos(todos);
    } else {
      alert('Failed to fetch recurring todos.');
    }
  } catch (error) {
    console.error('Error:', error);
  }
  }
  
  function displayRecurringTodos(todos) {
    const recurringTodosContainer = document.getElementById('recurring-todos-container');
    recurringTodosContainer.innerHTML = '';
  
    todos.forEach((todo) => {
      const todoItem = document.createElement('div');
      todoItem.innerHTML = `
        <h3>${todo.todo_item}</h3>
        <button class="edit-todo" data-id="${todo.id}">Edit</button>
        <button class="delete-todo" data-id="${todo.id}">Delete</button>
      `;
      recurringTodosContainer.appendChild(todoItem);
    });
  
    document.querySelectorAll('.edit-todo').forEach((button) => {
      button.addEventListener('click', () => {
        const todoId = button.dataset.id;
        editTodo(todoId);
      });
    });
  
    document.querySelectorAll('.delete-todo').forEach((button) => {
      button.addEventListener('click', () => {
        const todoId = button.dataset.id;
        deleteTodo(todoId);
      });
    });
  }
  
  async function editTodo(todoId) {
    try {
      console.log("Button clicked");
    const response = await fetch(`/recurring/${todoId}`, 
    {
      method: 'GET',
      // headers: {'Content-Type': 'application/json'},
    });
  
    if (response.ok) {
      const todos = await response.json();
      console.log('Fetched data:', todos); // Add this line to log the fetched data
      if (todos.length > 0) {
        document.getElementById("day-container").setAttribute("style", "display: block;")
        document.getElementById("save-button").setAttribute("data-id", todos[0].id);
        if (todos[0].sunday) {
          document.getElementById("sunday").checked = true;
        }
        if (todos[0].monday) {
          document.getElementById("monday").checked = true;
        }
        if (todos[0].tuesday) {
          document.getElementById("tuesday").checked = true;
        }
        if (todos[0].wednesday) {
          document.getElementById("wednesday").checked = true;
        }
        if (todos[0].thursday) {
          document.getElementById("thursday").checked = true;
        }
        if (todos[0].friday) {
          document.getElementById("friday").checked = true;
        }
        if (todos[0].saturday) {
          document.getElementById("saturday").checked = true;
        }
      }
      
    } else {
      alert('Failed to fetch todo data.');
    }
  } catch (error) {
    console.error('Error:', error);
  }
  }

  async function updateTodo(todoId, updatedValues) {
    const response = await fetch(`/recurring/update/${todoId}`, {
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

  async function deleteTodo(todoId) {
    const response = await fetch(`/recurring/delete/${todoId}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      alert('Todo deleted successfully.');
      fetchRecurringTodos();
    } else {
      alert('Failed to delete todo.');
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {

  document
    .getElementById('manage-recurring-todos')
    .addEventListener('click', fetchRecurringTodos);

  document
    .getElementById('save-button')
    .addEventListener('click', saveEdits);
  });

