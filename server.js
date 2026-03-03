const express = require("express");
const app = express();
const PORT = 3008;

app.get("/", (req, res) => {
  res.send("Welcome to the REST API!");
});

// server.js
app.use("/", express.static("public"));

app.get("/api/stores", (req, res) => {
  res.json(stores);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
