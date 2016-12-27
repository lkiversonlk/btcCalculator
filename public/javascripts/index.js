/**
 * Created by liukan on 05/11/2016.
 */

var btnCal1 = document.getElementById("calculate1");
var btnCal2 = document.getElementById("calculate2");
var btnCal3 = document.getElementById("calculate3");

var inputs = {};

[
    "buyRMB",
    "haobtcBuy",
    "coinbaseSell",
    "USDget",
    "rate",
    "buyUSD",
    "coinbaseBuy",
    "haobtcSell",
    "RMBget",
    "rate2",
    "initial_rmb",
    "shangyin_rate",
    "shangyin_fee",
    "coinbase_rate",
    "haobtc_sell",
    "get3",
    "get4"
]
    .forEach(function(name){
        var input = document.getElementById(name);
        //assert.ifError(input);
        inputs[name] = input;
    });

//上银手续费50
inputs.shangyin_fee.value = 50;
inputs.haobtc_sell.value = data.haobtc.ticker.sell;
inputs.shangyin_rate.value = data.shangyin.result.rate * 1.002;
inputs.coinbase_rate.value = parseFloat(data.coinbase.datas.ticker.selldollar) + 4;
inputs.initial_rmb.value = 29990;

function To() {
    
}

function calculate() {
    var startRMB = inputs.initial_rmb.value;
    var shangyinRate = inputs.shangyin_rate.value;
    var shangyinFee = inputs.shangyin_fee.value;
    var coinbaseRate = inputs.coinbase_rate.value;
    var haobtcSell = inputs.haobtc_sell.value;

        //
    var gain = (startRMB - shangyinFee - 8 * shangyinRate) * 0.997 * 0.998 * 0.9851 * haobtcSell / (shangyinRate * coinbaseRate);
    inputs.get3.value = gain;
    inputs.get4.value = (gain - startRMB)/startRMB;
}

btnCal3.onclick = calculate;

calculate();