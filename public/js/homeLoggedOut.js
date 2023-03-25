const logInButtonEl = document.querySelector("#logInButton")
const signUpButtonEl = document.querySelector("#signUpButton")


logInButtonEl.addEventListener('click', (event) => {
    document.location.replace('/login');})

signUpButtonEl.addEventListener('click', (event) => {
   document.location.replace('/signup');})