const passwordIcon = document.getElementById("password-icon");
const password = document.getElementById("password");

passwordIcon.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
});
