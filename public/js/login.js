const loginFormHandler = async (event) => {
    event.preventDefault();
    console.log("pressed login button");
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
    if (email && password) {
      const response = await fetch('/login/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        console.log("ok");
        document.location.replace('/');
      } else {
        alert('Failed to log in.');
      }
    }
  };
  
  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
  