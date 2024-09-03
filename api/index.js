const express = require("express");
const app = express();
const PORT = 4000;

app.get("/", (req, res) => {});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
