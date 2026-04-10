const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/hello", (req, res) => {
  res.json({ message: "hello from tmpo" });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
