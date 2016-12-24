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
inputs.shangyin_rate.value = data.shangyin.result.rate * 1.0025;
inputs.coinbase_rate.value = data.coinbase.datas.ticker.selldollar;
//initial
//inputs.shangyin_fee = 50;

function ToUSA(RMB, buyRate, sellRate){
    return (RMB/buyRate - 0.0005) * sellRate * 0.9851
}

function To() {
    
}

btnCal3.onclick = function () {
    var startRMB = inputs.initial_rmb.value;
    var shangyinRate = inputs.shangyin_rate.value;
    var shangyinFee = inputs.shangyin_fee.value;
    var coinbaseRate = inputs.coinbase_rate.value;
    var haobtcSell = inputs.haobtc_sell.value;

    var gain = (startRMB - shangyinFee - 8 * shangyinRate) * 0.98116354 * haobtcSell / (shangyinRate * coinbaseRate);
    inputs.get3.value = gain;
    inputs.get4.value = (gain - startRMB)/startRMB;
};