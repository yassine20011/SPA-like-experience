# MPA with SPA-like Experience

## App Philosophy

The philosophy of the app is to mimic a single-page application (SPA) although it operates as a multi-page application (MPA). It achieves this by using Express.js to serve `index.html` for all routes.

```javascript
const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "src")));

const PORT = 3000;

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

This setup allows the app to appear as a single-page application, regardless of the route accessed.

If you visit http://localhost:3000/ or http://localhost:3000/any-route, you will see the same page.

However, if you open `index.html` file directly in the browser, the app will not function as expected because it relies on the routing provided by Express.js.

In `index.html` , the app is initialized with a Navbar, main content, and footer, and toast for displaying messages, The main content is dynamically loaded with JavaScript, providing a seamless single-page experience.

The app dynamically loads content based on the route accessed.

## Project Structure

```bash
.
├── README.md
├── src
│   ├── css
│   │   └── style.css
│   ├── index.html
│   ├── input.css
│   ├── js
│   │   ├── app.js
│   │   ├── generatePassword.js
│   │   ├── HomeContent.js
│   │   ├── leakedPassword.js
│   │   ├── PasswordStrengthChecker.js
│   │   ├── productDetails.js
│   │   ├── shoppingCart.js
│   │   ├── signIn.js
│   │   ├── signUp.js
│   │   └── store.js
│   ├── output.css
│   └── snippets
│       ├── 404.html
│       ├── generatePassword.html
│       ├── home.html
│       ├── leakedPassword.html
│       ├── PasswordStrengthChecker.html
│       ├── productDetails.html
│       ├── shoppingCart.html
│       ├── signIn.html
│       ├── signUp.html
│       ├── sponsor.html
│       └── store.html
└── tailwind.config.js

6 directories, 36 files
```

## Getting Started

To get started with the project, follow these steps:

### Pre-requisites

- Node.js
- npm or bun

### Installation

1. Clone the repository

```bash
git clone <repo-url>
```

2. Install the dependencies

```bash
npm install
```

3. Start the server

```bash
bun server.js
```

and 

```bash
bun api.js
```

4. Open the browser and go to `http://localhost:3000/`

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.
