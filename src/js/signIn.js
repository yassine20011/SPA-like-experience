export function signIn() {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  let toast = document.getElementById("toast");

  document.addEventListener("DOMContentLoaded", async () => {
    document.title = "CyberSafe | Sign In";
    await fetch("./snippets/signIn.html")
      .then((response) => response.text())
      .then((data) => {
        let content = document.getElementById("content");
        content.innerHTML = data;
      });

    let email = document.getElementById("email");
    let password = document.getElementById("password");

    let signInForm = document.getElementById("signInForm");
    signInForm.addEventListener("submit", (e) => {
      e.preventDefault();

      let user = users.find(
        (user) => user.email === email.value && user.password === password.value
      );

  
      if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        toast.style.display = "block";
        toast.style.backgroundColor = "green";
        toast.textContent = "User signed in successfully";
        setTimeout(function () {
          toast.style.display = "none";
        }, 3000);
        signInForm.reset(); // clear form after submission
        window.location.href = "/";
      } else {
        toast.style.display = "block";
        toast.style.backgroundColor = "red";
        toast.textContent = "Invalid email or password";
        setTimeout(function () {
          toast.style.display = "none";
        }, 3000);
      }
    });
  });
}
