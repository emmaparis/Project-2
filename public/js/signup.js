// const subSignUp = document.querySelector('#makeAccount');
// const nameAcc = document.querySelector('#name').value.trim();
// const emailAcc = document.querySelector('#email').value.trim();
// const passwordAcc = document.querySelector('#password').value.trim();
// const passwordConfirmation = document.querySelecto('#passwordCon').value.trim();
const createAccount = async (event) => {
    // event.preventDefault();
    // console.log("pressed sign up");
    // // console.log(todoText);
    const nameAcc = document.querySelector('#name').value.trim();
    const emailAcc = document.querySelector('#email').value.trim();
    const passwordAcc = document.querySelector('#password').value.trim();
    const passwordConfirmation = document.querySelector('#passwordCon').value.trim();
    document.querySelector("#pwErr").textContent = ""//rest err messages
    document.querySelector("#inputErr").textContent = ""
    if (nameAcc && emailAcc && passwordAcc && passwordConfirmation) {
        console.log('all input')
        if (passwordAcc===passwordConfirmation ){
            console.log('all input')
            // const response = await fetch(`/add`, {
            //   method: 'POST',
            //   body: JSON.stringify({ todoText }),
            //   headers: { 'Content-Type': 'application/json' },
            // });
        
            // if (response.ok) {
            //   console.log("ok");
            //   document.location.reload();
            // } else {
            //   alert('Failed to add todo item');
            // }
          }else {
            document.querySelector("#pwErr").textContent = "Passwords do not match. Try again."
        }
    } else {
        document.querySelector("#inputErr").textContent = "All fields must be filled in to make an account."
    }
}
document.querySelector('#makeAccount').addEventListener('click', createAccount);