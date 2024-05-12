let alphabet = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let symbols = "!@#$%^&*()_+";

export function generatePassword() {

document.addEventListener("DOMContentLoaded", async () => {
  document.title = "CyberSafe | Generate Strong Password";
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

    let generatedPassword = getPassword(
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
}

function getPassword(length, isUppercase, isNumbers, isSymbols, isLowercase, exludeAmbiguous) {

  let password = "";
  let characterSet = "";

  isUppercase ? (characterSet += alphabet.toUpperCase()) : "";
  isNumbers ? (characterSet += numbers) : "";
  isSymbols ? (characterSet += symbols) : "";
  isLowercase ? (characterSet += alphabet) : "";

  if (characterSet === "") {
   return "Please select at least one character set";
  }

  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * characterSet.length);
    password += characterSet[randomIndex];
  }

  if (exludeAmbiguous) {
    password = password.replace(/[oO0lI1]/g, "");
  }

  return password;
}


