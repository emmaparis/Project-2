document.getElementById('settings-form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const todoItem = document.getElementById('todo-item').value;
    const frequency = document.getElementById('frequency').value;
  
    // Save settings to localStorage
const savedTodos = JSON.parse(localStorage.getItem('savedTodos')) || [];
savedTodos.push({ item: todoItem, frequency: frequency });
localStorage.setItem('savedTodos', JSON.stringify(savedTodos));

  });

//   invoke post route by making new to do 
  