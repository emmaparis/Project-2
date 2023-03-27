// const subSignUp = document.querySelector('#makeAccount');
// const nameAcc = document.querySelector('#name').value.trim();
// const emailAcc = document.querySelector('#email').value.trim();
// const passwordAcc = document.querySelector('#password').value.trim();
// const passwordConfirmation = document.querySelecto('#passwordCon').value.trim();
const createAccount = async (event) => {
    // event.preventDefault();
    // console.log("pressed sign up");
    // // console.log(todoText);
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
    const passwordConfirmation = document.querySelector('#passwordCon').value.trim();
    document.querySelector("#pwErr").textContent = ""//rest err messages
    document.querySelector("#inputErr").textContent = ""
    if (name && email && password && passwordConfirmation) {
        console.log('all input')
        if (password===passwordConfirmation ){
            console.log('all input')
            const response = await fetch(`/adduser`, {
              method: 'POST',
              body: JSON.stringify({ name, email, password }),
              headers: { 'Content-Type': 'application/json' },
            });
        
            if (response.ok) {
              console.log("ok");
              document.location.replace('/')
            } else {
              alert('Failed to add user.');
          }}else{
            document.querySelector("#pwErr").textContent = "Passwords do not match. Try again."
        }
    } else {
        document.querySelector("#inputErr").textContent = "All fields must be filled in to make an account."
    }
}

document.querySelector('#makeAccount').addEventListener('click', createAccount);