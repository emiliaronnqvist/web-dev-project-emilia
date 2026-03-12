const express = require("express");
const app = express();
const PORT = 3008;

const stores = require("./stores.json");

app.use("/", express.static("public"));

app.get("/api/stores", (req, res) => {
  res.json(stores);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
