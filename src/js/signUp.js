export function signUp() {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  let toast = document.getElementById("toast");

  document.addEventListener("DOMContentLoaded", async () => {
    document.title = "CyberSafe | Sign Up";

    await fetch("./snippets/signUp.html")
      .then((response) => response.text())
      .then((data) => {
        let content = document.getElementById("content");
        content.innerHTML = data;
      });

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirm-password");

    let signUpForm = document.getElementById("signUpForm");
    signUpForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // check if email already exists
      let user = users.find((user) => user.email === email.value);
      if (user) {
        toast.style.display = "block";
        toast.style.backgroundColor = "red";
        toast.textContent = "Email already exists";
        setTimeout(function () {
          toast.style.display = "none";
        }, 3000);
        return;
      }

      if (password.value.length < 8) {
        toast.style.display = "block";
        toast.style.backgroundColor = "red";
        toast.textContent = "Password must be at least 8 characters";
        setTimeout(function () {
          toast.style.display = "none";
        }, 3000);
        return;
      }

      if (password.value !== confirmPassword.value) {
        toast.style.display = "block";
        toast.style.backgroundColor = "red";
        toast.textContent = "Password does not match";
        setTimeout(function () {
          toast.style.display = "none";
        }, 3000);
        return;
      }

       user = {
        name: name.value,
        email: email.value,
        password: password.value,
      };

      users.push(user);

      localStorage.setItem("users", JSON.stringify(users));
      toast.style.display = "block";
      toast.style.backgroundColor = "green";
      toast.textContent = "User registered successfully";
      setTimeout(function () {
        toast.style.display = "none";
      }, 3000);
      signUpForm.reset(); // clear form after submission
    });
  });
}
