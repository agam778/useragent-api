const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.get('/', (req, res) => {
    res.header("Content-Type",'application/json');
    res.sendFile(path.join(__dirname, 'data.json'));
})

app.get('/android', (req, res) => {
  res.header("Content-Type",'application/json');
  res.sendFile(path.join(__dirname, 'android.json'));
})

app.listen(port, () => {
  console.log(`API listening at http://localhost:8080`);
});

module.exports = app