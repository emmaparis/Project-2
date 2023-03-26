const confirm = document.querySelector('#makeAccount');

const createAccount = async (event) => {
    event.preventDefault();
    console.log("pressed sign up");
    const nameAcc = document.querySelector('#name').value.trim();
    const emailAcc = document.querySelector('#email').value.trim();
    const passwordAcc = document.querySelector('#password').value.trim();
    const passwordConfirmation = document.querySelector('#password2').value.trim();
    console.log(todoText);
    if (todoText) {
      const response = await fetch(`/add`, {
        method: 'POST',
        body: JSON.stringify({ todoText }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        console.log("ok");
        document.location.reload();
      } else {
        alert('Failed to add todo item');
      }
    }
  };
  
  document.querySelector('#submit-todo-button').addEventListener('click', createTodoHandler);








// confirm.addEventListener('click', )