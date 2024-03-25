async function timesFound(url, hash) {
  const response = await fetch(url);
  const data = await response.text();

  for (let line of data.split("\n")) {
    let [key, count] = line.split(":");
    if (key === hash.substring(5).toUpperCase()) {
      return count;
    }
  }

  return 0;
}

export function pwnedPasswords() {
  document.addEventListener("DOMContentLoaded", async () => {
    document.title = "cyb3rPunk | Pwning Passwords";
    await fetch("./snippets/leakedPassword.html")
      .then((response) => response.text())
      .then((data) => {
        let content = document.getElementById("content");
        content.innerHTML = data;
      });

    let checkbtn = document.getElementById("check");
    let toast = document.getElementById("toast");

    checkbtn.addEventListener("click", async () => {
      let input = document.getElementById("password");
      // reject input if it's empty
      if (input.value === "") {
        toast.style.display = "block";
        toast.textContent = "Please enter a password";
        setTimeout(function () {
          toast.style.display = "none";
        }
        , 3000);
        return;
      }


      let message = document.getElementById("message");
      let hashedPassword = sha1(input.value);
      let url = `https://api.pwnedpasswords.com/range/${hashedPassword.substring(0,5)}`;

      let count = await timesFound(url, hashedPassword);
      if (count > 0) {
        message.textContent = `This password has been seen ${count} times before\nThis password has previously appeared in a data breach and should never be used. If you've ever used it anywhere before, change it!`;
        message.style.color = "red";
      } else {
        message.textContent = "This password has not been seen before!";
        message.style.color = "green";
      }
    });

    // show password
    showPassword.addEventListener("click", () => {
      let password = document.getElementById("password");
      if (password.type === "password") {
        password.type = "text";
        labelshowPassword.textContent = "Hide Password";
      } else {
        password.type = "password";
        labelshowPassword.textContent = "Show Password";
      }
    });
  });
}
