const createTodoHandler = async (event) => {
    event.preventDefault();
    console.log("pressed submit todo button");
    const todoText = document.querySelector('#new-todo-input').value.trim();
    console.log(todoText);
    if (todoText) {
      const response = await fetch(`/add`, {
        method: 'POST',
        body: JSON.stringify({ todoText }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        console.log("ok");
        document.location.replace(`/`);
      } else {
        alert('Failed to add todo item');
      }
    }
  };
  
  document.querySelector('#submit-todo-button').addEventListener('click', createTodoHandler);