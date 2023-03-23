console.log("Hello World");

function populateTodos() {
    const savedTodos = JSON.parse(localStorage.getItem('savedTodos')) || [];
    const todoList = document.querySelector('.card-content'); 
    // Select the container where you want to insert the to-do items
  
    savedTodos.forEach((todo) => {
      if (shouldDisplayTodo(todo.frequency)) {
        const todoElement = createTodoElement(todo.item);
        todoList.appendChild(todoElement);
      }
    });
  }
  
  function shouldDisplayTodo(frequency) {
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
  
    switch (frequency) {
      case 'daily':
        return true;
      case 'weekly':
        return currentDay === 1; // Display weekly items on Monday
      case 'monthly':
        return currentDate.getDate() === 1; // Display monthly items on the 1st day of the month
      default:
        return false;
    }
  }
  
  function createTodoElement(todoText) {
    const todoElement = document.createElement('div');
    todoElement.classList.add('field', 'is-flex-direction-row', 'has-addons', 'has-addons-centered');
  
    todoElement.innerHTML = `
      <p class="control">
        <label class="checkbox">
          <input class="is-primary" type="checkbox" style='width: 40px; height: 40px; background-color:#edda84'>
        </label>
      </p>
      <p class="control">
        <input class="input is-flex-wrap-wrap m-0" style='max-width:100%;max-height: 40px;' type="text" value="${todoText}">
      </p>
      <p class="control">
        <a class="button has-background-danger remove" style='width: 70px'>
          <img src="public/images/remove.png" style="width:25px;height:25px;" />
        </a>
      </p>
    `;
  
    return todoElement;
  }
  
  // Call the populateTodos function when the page loads
  populateTodos();
  