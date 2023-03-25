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
/*
  // Fetch and display the user's recurring to-do items
async function fetchTodos() {
  const response = await fetch('/api/todos');
  const todos = await response.json();

  const todoManagement = document.querySelector('#todo-management');
  todoManagement.innerHTML = '';
  todos.forEach((todo) => {
    const div = document.createElement('div');
    div.className = 'todo-item';
    div.innerHTML = `
      <h3>${todo.todo_item}</h3>
      <p>${todo.note}</p>
      <button class="button is-danger" onclick="deleteTodo(${todo.id})">Delete</button>
      <button class="button is-warning" onclick="updateTodo(${todo.id})">Update</button>
    `;
    todoManagement.appendChild(div);
  });
}
  
  // Delete a todo item
  async function deleteTodo(id) {
    const response = await fetch(`/api/todos/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to delete todo item.');
    }
  }
  */
  document.querySelector('#save-todo').addEventListener('click', saveTodo);
  /*
// Add event listeners for delete buttons
document.querySelectorAll('.delete-btn').forEach((btn) => {
    btn.addEventListener('click', (event) => {
      const id = event.target.getAttribute('data-id');
      deleteTodo(id);
    });
  });
  
  // Add event listener for the "Manage Recurring To-Do Items" button
document.querySelector('#manage-todos').addEventListener('click', () => {
  fetchTodos();
});

*/