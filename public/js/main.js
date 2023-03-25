const dateTimeEl = document.querySelector('#date-time')
dateTimeEl.textContent = `Today,  ${dayjs().format("dddd, MMMM D, YYYY")}`;
const logOut = document.querySelector('#logout-buttonMain')
console.log(logOut)
const logoutFunc = async () => {
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
  

logOut.addEventListener('click', logoutFunc);
  
