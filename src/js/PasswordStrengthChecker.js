let checkSvg =
  '<svg style="width: 20px; height:20px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#00ff00" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>';

let crossSvg =
  '<svg  style="width: 20px; height:20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#ff0000" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>';

let criteria = {
  length: false,
  uppercase: false,
  lowercase: false,
  number: false,
  specialChar: false,
};

export function passwordStrength() {
  document.addEventListener("DOMContentLoaded", async () => {
    document.title = "cyb3rPunk | Password Strength Checker";

    let response = await fetch("./snippets/PasswordStrengthChecker.html");
    let data = await response.text();
    let content = document.getElementById("content");
    content.innerHTML = data;

    let passwordInput = document.getElementById("password");

    passwordInput.addEventListener("input", () => {

		
      let length = document.getElementById("length");
      length.textContent = passwordInput.value.length;
      // check if password has 8 characters
      criteria.length = passwordInput.value.length >= 8;
      criteria.length
        ? (length.style.color = "green")
        : (length.style.color = "red");

      let hasUpperCase = document.getElementById("hasUppercase");
      let hasLowerCase = document.getElementById("hasLowercase");
      let hasNumbers = document.getElementById("hasNumbers");
      let hasSymbols = document.getElementById("hasSymbols");

      // check if password has uppercase letter
      criteria.uppercase = /[A-Z]/g.test(passwordInput.value);
      criteria.uppercase
        ? (hasUpperCase.innerHTML = checkSvg)
        : (hasUpperCase.innerHTML = crossSvg);

      // check if password has lowercase letter
      criteria.lowercase = /[a-z]/g.test(passwordInput.value);
      criteria.lowercase
        ? (hasLowerCase.innerHTML = checkSvg)
        : (hasLowerCase.innerHTML = crossSvg);

      // check if password has numbers
      criteria.number = /[0-9]/g.test(passwordInput.value);
      criteria.number
        ? (hasNumbers.innerHTML = checkSvg)
        : (hasNumbers.innerHTML = crossSvg);

      // check if password has symbols
      criteria.specialChar = /[^A-Za-z0-9]/g.test(passwordInput.value);
      criteria.specialChar
        ? (hasSymbols.innerHTML = checkSvg)
        : (hasSymbols.innerHTML = crossSvg);

      let passwordStrength = document.getElementById("passwordStrength");
      const numCriteriaMet = Object.values(criteria).filter(Boolean).length;

      if (0 <= numCriteriaMet && numCriteriaMet <= 2) {
        passwordStrength.textContent = "Weak";
        passwordStrength.style.color = "red";
      }
      if (3 <= numCriteriaMet && numCriteriaMet <= 4) {
        passwordStrength.textContent = "Medium";
        passwordStrength.style.color = "orange";
      }
      if (numCriteriaMet === 5) {
        passwordStrength.textContent = "Strong";
        passwordStrength.style.color = "green";
      }
    });

    let showPassword = document.getElementById("showPassword");
    let labelshowPassword = document.getElementById("labelshowPassword");

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
