const passwordConfirmIcon = document.getElementById("password-confirm-icon");
const passwordConfirm = document.getElementById("password-confirm");
const passwordIcon = document.getElementById("password-icon");
const password = document.getElementById("password");

passwordConfirmIcon.addEventListener("click", () => {
  if (passwordConfirm.type === "password") {
    passwordConfirm.type = "text";
  } else {
    passwordConfirm.type = "password";
  }
});

passwordIcon.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
});
