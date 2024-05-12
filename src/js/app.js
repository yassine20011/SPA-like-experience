import { generatePassword } from "./generatePassword.js";
import { passwordStrength } from "./PasswordStrengthChecker.js";
import { pwnedPasswords } from "./leakedPassword.js";
import { HomeContent } from "./HomeContent.js";
import { signIn } from "./signIn.js";
import { signUp } from "./signUp.js";
import { store } from "./store.js";
import { productDetails } from "./productDetails.js";


let user = JSON.parse(localStorage.getItem("currentUser"));

let SignUpBtn = document.getElementById("SignUpBtn");
let SignInBtn = document.getElementById("SignInBtn");
let SignOutBtn = document.getElementById("SignOutBtn");
let phoneSignUpBtn = document.getElementById("phoneSignInBtn");
let phoneSignInBtn = document.getElementById("phoneSignUpBtn");
let phoneSignOutBtn = document.getElementById("phoneSignOutBtn");

SignUpBtn.addEventListener("click", () => {
  localStorage.removeItem("currentUser");
  window.location.href = "/sign-in";
});

SignOutBtn.addEventListener("click", () => {
  localStorage.removeItem("currentUser");
  window.location.href = "/sign-in";
});

if (user) {
  // desktop
  SignInBtn.classList.add("hidden");
  SignUpBtn.classList.add("hidden");
  SignOutBtn.classList.remove("hidden");
  // mobile
  phoneSignInBtn.classList.add("hidden");
  phoneSignUpBtn.classList.add("hidden");
  phoneSignOutBtn.classList.remove("hidden");
} else {
  // desktop
  SignInBtn.classList.remove("hidden");
  SignUpBtn.classList.remove("hidden");
  SignOutBtn.classList.add("hidden");
  // mobile
  phoneSignInBtn.classList.remove("hidden");
  phoneSignUpBtn.classList.remove("hidden");
  phoneSignOutBtn.classList.add("hidden");
}

if (window.location.pathname === "/generate-strong-password") {
  generatePassword();
} else if (window.location.pathname === "/password-strength-checker") {
  passwordStrength();
} else if (window.location.pathname === "/leaked-password") {
  pwnedPasswords();
} else if (window.location.pathname === "/") {
  HomeContent();
} else if (window.location.pathname === "/sign-in") {
  if (user) {
    window.location.href = "/";
  }
  signIn();
} else if (window.location.pathname === "/sign-up") {
  if (user) {
    window.location.href = "/";
  }
  signUp();
} else if (window.location.pathname === "/store") {
  store();
} else if  (window.location.pathname === "/product-details") {
  productDetails();

}
else {
  document.addEventListener("DOMContentLoaded", async () => {
    document.title = "CyberSafe | Page Not Found";
    await fetch("./snippets/404.html")
      .then((response) => response.text())
      .then((data) => {
        let content = document.getElementById("content");
        content.innerHTML = data;
      });
  });
}
