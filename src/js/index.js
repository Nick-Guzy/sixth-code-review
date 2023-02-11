import CurrencyService from './js/currency.js';

//Business logic

async function getCurrency(currency, amount) {
  const response = await CurrencyService.getMoney(currency, amount);
  if (response.conversion_result) {
    displayResult(currency, amount);
  } else {
      displayError(currency, amount);
    }
}



  //UI logic

function displayResult(currency, ) {
  document.getElementById('currency').innertext = `You have ${} in ${currency}`
}



function displayError(error, currency);
  document.getElementById('error').innerText = `There was an error getting the currency from ${currency}: ${error}.`;

