const app = require("express")();
const data = require("./data.json");
const port = 8080;

// returns [data, statusCode]
function getData(os, browser, androidVer) {
  if (androidVer != null) {
    if (data.android[androidVer] == null) return [null, 404];
    else {
      if (browser != null)
        if (data.android[androidVer][browser] == null) return [null, 404];
        else return [data.android[androidVer][browser], 200];
      else return [data.android[androidVer], 200];
    }
  }

  if (data[os] == null) return [null, 404];

  if (browser != null) {
    if (data[os][browser] == null) return [null, 404];
    else {
      return [data[os][browser], 200];
    }
  }

  return [data[os], 200];
}

function send(res, dataArray) {
  if (dataArray[1] == 404) res.sendStatus(404);
  else {
    res.header("Content-Type", "application/json");
    res.send(JSON.stringify(dataArray[0], null, 4));
  }
}

app.get("/", (req, res) => {
  res.header("Content-Type", "application/json");
  res.send(JSON.stringify(data, null, 4));
});

app.get("/android", (req, res) => {
  let dataArray = getData("android", null, null);
  send(res, dataArray);
});

app.get("/android/:androidVersion", (req, res) => {
  let dataArray = getData("android", null, req.params.androidVersion);
  send(res, dataArray);
});

app.get("/android/:androidVersion/:browser", (req, res) => {
  let dataArray = getData(
    "android",
    req.params.browser,
    req.params.androidVersion
  );
  send(res, dataArray);
});

app.get("/:os", (req, res) => {
  let dataArray = getData(req.params.os, null, null);
  send(res, dataArray);
});

app.get("/:os/:browser", (req, res) => {
  let dataArray = getData(req.params.os, req.params.browser, null);
  send(res, dataArray);
});

app.listen(port, () => {
  console.log(`API listening at http://localhost:8080`);
});

module.exports = app;
