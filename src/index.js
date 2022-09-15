const express = require("express");
const action = require("./action");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));

data = [];

app.get("/", async (req, res) => {
  await action();

  res.send(data);
});

app.listen(8000, () => {
  console.log("Port on listen 8000");
});
