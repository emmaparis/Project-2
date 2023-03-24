const logInButtonEl = document.querySelector(".logInButton")
const signUpButtonEl = document.querySelector(".signUpButton")

(document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);

    $trigger.addEventListener('click', () => {
      openModal($target);
    });
  });
//logInButtonEl.addEventListener()
//send to log in page
//signUpButtonEl.addEventListener()
//create sign in page