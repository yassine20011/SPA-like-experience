# Cyb3rPunk

This an app that allows users to generate a random password based on the criteria they've selected. also helps users to test their password strength.

The app use HTML, CSS, and Vanilla JavaScript, also most of the css is done with the help of Tailwind CSS.

With the help of exress.js, the app is able to serve the static files, so the app can looks like (SPA) but it's not.

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

As you can see that the express.js is serving the static files to all the routes, so the app can looks like a single page application.

e.g. if you go to `http://localhost:3000/` or `http://localhost:3000/any-route` you will see the same page.


If you opened the `index.html` file directly in the browser, you will see the same page, but the app will not work as expected, because the app is using the express.js to serve the static files.


on the `index.html` file, you will see that the app is initialized with Navbar, main, and footer, and the main content is loaded with the help of JavaScript. so the app can looks like a single page application.

## Features

- Users can generate a random password
- Users can test the strength of their password

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
node server.js
```

4. Open the browser and go to `http://localhost:3000/`

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.