const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');
// const geoip = require('geoip-lite');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, '/')));

var userCity = "";

app.use(bodyParser.urlencoded({ extended: true }));
// app.use((req, res, next) => {
//     const ip = req.headers['x-forwarded-for'] || req.remoteAddress;
//     req.clientIp = ip;
//     next();
// });

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');

    // const ip = req.clientIp;
    // const geo = geoip.lookup(ip);
    // const city = geo ? geo.city : 'Chitagong';
    // userCity=(`Your city: ${city}`);
});
let weatherData;
app.post('/data', function (req, res) {
    const query = req.body.cityName;
    const apiKey = "739e0bae73dd35447089356bf29cabd8";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?appid=" + apiKey + "&q=" + query + "&units=" + unit;

    // https.get(url, function (response) {
    //     response.on('data', function (data) {

    //         res.send(data);
    //     });
    // });
    var data= {
        name: "weather"
    }
    
    res.send(JSON.stringify(data));
});
app.get('/data', (req, res) => {
    res.json({ data: weatherData })
});


app.listen(3000, function () {
    console.log('listening on port 3000...');
});