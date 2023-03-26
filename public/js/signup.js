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
    if (passwordAcc===passwordConfirmation){
    //     if (todoText) {
    //         const response = await fetch(`/add`, {
    //           method: 'POST',
    //           body: JSON.stringify({ todoText }),
    //           headers: { 'Content-Type': 'application/json' },
    //         });
        
    //         if (response.ok) {
    //           console.log("ok");
    //           document.location.reload();
    //         } else {
    //           alert('Failed to add todo item');
    //         }
    //       }
    }else{
        console.log("pwds dont match")
        document.querySelector("#pwErr").append("Passwords do not match. Try again.")
    }
}
    
//   };
  
document.querySelector('#makeAccount').addEventListener('click', createAccount);