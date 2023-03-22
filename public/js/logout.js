const logout = async () => {
    console.log("button clicked");
    const response = await fetch('/login/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
        document.location.replace('/login');
    } else {
        alert('Failed to log out.');
    }
  };
  
  document.querySelector('#logout-button').addEventListener('click', logout);
  