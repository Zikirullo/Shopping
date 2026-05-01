// console.log("web server start");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.get("/restj", (req, res) => {
  // console.log("/rest/get");
  res.json({ name: "Marco", age: 21, group: "MIT" });
});

app.listen(3000, () => {
  console.log(`Backend server is running on port 3000`);
});
