const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  next();
});

app.use("/users", (req, res, next) => {
  res.send("<p>hello/users</p>");
});

app.use("/", (req, res, next) => {
  res.send("<p>HI </p>");
});

app.listen(3001);
// http://localhost:3001/
