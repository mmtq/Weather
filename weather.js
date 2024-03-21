const express = require("express");
const https = require("node:https");
const bodyParser = require("body-parser");
// const geoip = require('geoip-lite');
const path = require("path");

const app = express();
app.use(express.static(path.join(__dirname, "/")));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/data", function (req, res) {
  const query = req.headers.cityname;
  const apiKey = "739e0bae73dd35447089356bf29cabd8";
  const unit = "metric";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?appid=" +
    apiKey +
    "&q=" +
    query +
    "&units=" +
    unit;
  https.get(url, function (response) {
    response.on("data", function (data) {
      res.send(data);
    });
  });
});

app.listen(3000, function () {
  console.log("listening on port 3000...");
});
