const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.get("/", (req, res) => {
  res.header("Content-Type", "application/json");
  res.sendFile(path.join(__dirname, "data/data.json"));
});

app.get("/android", (req, res) => {
  res.header("Content-Type", "application/json");
  res.sendFile(path.join(__dirname, "data/android.json"));
});

app.get("/windows", (req, res) => {
  res.header("Content-Type", "application/json");
  res.sendFile(path.join(__dirname, "data/windows.json"));
});

app.get("/macos", (req, res) => {
  res.header("Content-Type", "application/json");
  res.sendFile(path.join(__dirname, "data/macos.json"));
});

app.get("/chromeos", (req, res) => {
  res.header("Content-Type", "application/json");
  res.sendFile(path.join(__dirname, "data/chromeos.json"));
});

app.get("/linux", (req, res) => {
  res.header("Content-Type", "application/json");
  res.sendFile(path.join(__dirname, "data/linux.json"));
});

app.get("/ios", (req, res) => {
  res.header("Content-Type", "application/json");
  res.sendFile(path.join(__dirname, "data/ios.json"));
});

app.listen(port, () => {
  console.log(`API listening at http://localhost:8080`);
});

module.exports = app;
