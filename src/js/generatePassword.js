let alphabet = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let symbols = "!@#$%^&*()_+";

export function generatePassword(length, isUppercase, isNumbers, isSymbols, isLowercase, exludeAmbiguous) {

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


