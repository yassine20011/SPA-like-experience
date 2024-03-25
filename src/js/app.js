import { generatePassword } from "./generatePassword.js";
import { passwordStrength } from "./PasswordStrengthChecker.js";
import { pwnedPasswords } from "./leakedPassword.js";

if (window.location.pathname === "/generate-strong-password") {
  document.addEventListener("DOMContentLoaded", async () => {
    document.title = "cyb3rPunk | Generate Strong Password";
    await fetch("./snippets/generatePassword.html")
      .then((response) => response.text())
      .then((data) => {
        let content = document.getElementById("content");
        content.innerHTML = data;
      });

    var select = document.getElementById("length");
    var input = document.getElementById("password");

    input.placeholder = "Password";

    for (let i = 8; i < 65; i++) {
      let element = document.createElement("option");
      element.value = i;
      element.textContent = i;
      select.appendChild(element);
    }

    document.getElementById("generate").addEventListener("click", () => {
      let toast = document.getElementById("toast");

      let uppercase = document.getElementById("uppercase");
      let lowercase = document.getElementById("lowercase");
      let numbers = document.getElementById("numbers");
      let symbols = document.getElementById("symbols");
      let ambiguous = document.getElementById("ambiguous");

      let generatedPassword = generatePassword(
        select.value,
        uppercase.checked,
        numbers.checked,
        symbols.checked,
        lowercase.checked,
        ambiguous.checked
      );

      input.placeholder = generatedPassword;

      // toast message
      toast.style.display = "block";
      if (generatedPassword === "Please select at least one character set") {
        toast.textContent = generatedPassword;
      } else {
        navigator.clipboard.writeText(generatedPassword);
        toast.textContent = "Password copied to clipboard";
      }
      setTimeout(function () {
        toast.style.display = "none";
      }, 3000);
    });
  });
} else if (window.location.pathname === "/password-strength-checker") {
  passwordStrength();
} else if (window.location.pathname === "/leaked-password") {
  pwnedPasswords();
} else {
  document.addEventListener("DOMContentLoaded", () => {
    // back to initial state
    document.getElementById("content").innerHTML = "";
  });
}
