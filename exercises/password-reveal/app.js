// 🤖: create 2 constants with references to the password input and the reveal button from the DOM
const passwordInput = document.querySelector("#password");
const revealButton = document.querySelector("#reveal-button");

// 🤖: Create an Event Listener on the password reveal button
// 🤖: The event listener should toggle the password field attribute between `password` and `text` to change the visibility of the password field content.
revealButton.addEventListener('click', function () {
  // Toggle the type attribute of the password input between 'password' and 'text'
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }
});

// Provided for you - prevent form submit
const form = document.querySelector("form");
form.addEventListener('submit', function (e) {
  e.preventDefault();
});
