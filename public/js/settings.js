// Save the todo item and selected days
async function saveTodo() {
    const todoItem = document.querySelector('#todo-item').value.trim();
    const sunday = document.querySelector('#sunday').checked;
    const monday = document.querySelector('#monday').checked;
    const tuesday = document.querySelector('#tuesday').checked;
    const wednesday = document.querySelector('#wednesday').checked;
    const thursday = document.querySelector('#thursday').checked;
    const friday = document.querySelector('#friday').checked;
    const saturday = document.querySelector('#saturday').checked;
  
    if (todoItem && (sunday || monday || tuesday || wednesday || thursday || friday || saturday)) {
      const response = await fetch('/api/todos', {
        method: 'POST',
        body: JSON.stringify({
          todo_item: todoItem,
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
  
