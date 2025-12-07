const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("CI/CD Pipeline Working ✅");
});

app.listen(3000, () => console.log("Running on 3000"));
