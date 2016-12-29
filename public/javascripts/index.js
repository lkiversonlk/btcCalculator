/**
 * Created by liukan on 05/11/2016.
 */

var btnCal1 = document.getElementById("calculate1");
var btnCal2 = document.getElementById("calculate2");
var btnCal3 = document.getElementById("calculate3");

var inputs = {};

[
    "initial_rmb",
    "shangyin_rate",
    "shangyin_fee",
    "coinbase_sell",
    "coinbase_buy",
    "haobtc_sell",
    "haobtc_buy",
    "bank_profit",
    "debit_profit",
    "transfer_ratio",
    "transfer_back_ratio"
]
    .forEach(function(name){
        var input = document.getElementById(name);
        //assert.ifError(input);
        inputs[name] = input;
    });

//上银手续费50
inputs.shangyin_fee.value = 50;
inputs.initial_rmb.value = 29990;
inputs.shangyin_rate.value = data.shangyin.result.rate * 1.002;

inputs.haobtc_sell.value = data.haobtc.ticker.sell;
inputs.haobtc_buy.value = data.haobtc.ticker.buy;

inputs.coinbase_sell.value = parseFloat(data.coinbase.datas.ticker.selldollar) + 4;
inputs.coinbase_buy.value = parseFloat(data.coinbase.datas.ticker.buydollar) - 4;

function calculate() {
    var startRMB = inputs.initial_rmb.value;
    var shangyinRate = inputs.shangyin_rate.value;
    var shangyinFee = inputs.shangyin_fee.value;

    var coinbaseSell = inputs.coinbase_sell.value;
    var coinbaseBuy = inputs.coinbase_buy.value;

    var haobtcSell = inputs.haobtc_sell.value;
    var haobtcBuy = inputs.haobtc_buy.value;
        //
    var bank_gain = (startRMB - shangyinFee - 8 * shangyinRate) * 0.997 * 0.998 * 0.9851 * haobtcSell / (shangyinRate * coinbaseSell);
    inputs.bank_profit.value = (bank_gain)/startRMB;

    var debit_gain = (startRMB - shangyinFee - 8 * shangyinRate) * 0.997 * 0.998 * 0.9601 * haobtcSell / (shangyinRate * coinbaseSell);
    inputs.debit_profit.value = (debit_gain)/startRMB;

    var usd_transfered = (startRMB * 0.997 / haobtcBuy - 0.0005) * 0.9851 * coinbaseSell;
    inputs.transfer_ratio.value = startRMB / usd_transfered;
    //var revert = (startRMB / )

    var usd_back = 0.9851 / coinbaseSell * 0.997 * haobtcSell;
    inputs.transfer_back_ratio.value = usd_back;
}

btnCal3.onclick = calculate;

calculate();