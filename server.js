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
