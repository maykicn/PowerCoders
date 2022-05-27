var billAmount;
var tipRate;
var tip;
var totalAmount;
var excludeVAT;
var billAmountExVAT;

const billAmountInput = document.getElementById("billAmonut");
const tipRateInput = document.getElementById("tipRate");
const excludeVATInput = document.getElementById("excludeVAT");
const calculate = document.getElementById("calculate");
const totalAmountInput = document.getElementById("totalAmount");
const currencyJsonUrl = "https://openexchangerates.org/api/currencies.json";
const currenciesFrom = document.getElementById('currenciesFrom');
const selectElement = document.getElementById('currenciesto');
const converted = document.getElementById('convert');
const convertBttn = document.getElementById('convertBttn');
let allCurrencies =  {}
window.onload = async () => {
    allCurrencies = await (await fetch(currencyJsonUrl)).json()

    // inserts the currecies into the dom

    for(const curr in allCurrencies){
        let currency = allCurrencies[curr];
        // console.log(currency)
        const option = document.createElement('option')
        option.value = curr;
        option.innerText = currency;
        currenciesFrom.appendChild(option)
    }
    convert();
}
calculate.addEventListener("click", () => {
  billAmount = billAmountInput.value;
  billAmount = parseInt(billAmount);
  totalAmount = parseInt(totalAmount);
  tipRate = tipRateInput.value;
  excludeVAT = excludeVATInput.value;
  if (excludeVAT > 0) {
    billAmountExVAT = billAmount - (billAmount * excludeVAT) / 100;
    tip = (billAmountExVAT * tipRate) / 100;
    totalAmount = billAmountExVAT+tip
  } else {
    tip = (billAmount * tipRate) / 100;
    totalAmount = billAmount + tip;
  }
  
  

  
 
  
  totalAmountInput.innerText = `Your bill amount is CHF ${billAmount}, Your tip rate is ${tipRate}, Your total amount is CHF ${totalAmount}`
 
  

});


async function convertCurrencyy(fromCurrency, toCurrency, amount) {
    var myHeaders = new Headers();
    myHeaders.append("apikey", "5Pmqtgww2JbjMHCqnlKlYkSDRO0MYugm");

    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };

    const httpData = await fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${toCurrency}&from=${fromCurrency}&amount=${amount}`, requestOptions);
    console.log(httpData)
    return await httpData.json();

}

async function convert() {
    let fromCurrency = currenciesFrom.options[currenciesFrom.selectedIndex].value;
    let toCurrency = 'EUR';
    let amount = 1000;
    let result = await convertCurrencyy(fromCurrency, toCurrency, amount);
    console.log(result.result)
    converted.value= result.result;
    

}










