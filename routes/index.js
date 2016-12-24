var express = require('express');
var router = express.Router();
var request = require("request");
var async = require("async");

/* GET home page. */
router.get('/', function (req, res, next) {
    //{"date": 1479884781, "ticker": {"sell": 5288.0, "buy": 5284.0, "last": 5295.0, "vol": 1346.2185, "high": 5347.0, "low": 5151.0}}
    request.get("https://haobtc.com/exchange/api/v1/ticker")

    var coinbase = null;
    var haobtc = null;
    var shangyin = null;

    var urls = {
        coinbase: "https://www.btc123.com/api/getTicker?symbol=coinbasebtcusd",
        shangyin: "http://api.k780.com:88/?app=finance.rate&scur=USD&tcur=CNY&appkey=22302&sign=a325b52d888c31388ce6422ff61eff21",
        haobtc: 'http://haobtc.com/exchange/api/v1/ticker'
    };
    
    async.mapValues(
        urls,
        function (url, key, callback) {
            console.log("KEY: " + key + "GET " + url);
            askUrl(url, callback);
        },
        function (error, results) {
            if(error){
                console.log(error);
            }
            return res.render('index', {data: results});
        }
    );
});

function askUrl(url, callback) {
    var result = "";
    request.get(url)
        .on('response', function (response) {
            //console.log(response.statusCode) // 200
            //console.log(response.headers['content-type']) // 'image/png'

            response.on("data", function (chunk) {
                result += chunk;
            });

            response.on("end", function () {
                var ret = JSON.parse(result);
                return callback(null, ret);
            });


        })
        .on("error", callback);
};

module.exports = router;
