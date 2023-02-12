import CurrencyService from "./js/currency.js";

//Business logic

async function getCurrency(amount, currency) {
  const response = await CurrencyService.getMoney(amount, currency);
  if (response.conversion_result) {
    displayAnswer(response, currency);
  } else {
    displayError(response, currency);
  }
}

//UI logic

function displayResult(event) {
  event.preventDefault();
  const amount = document.getElementById("dollarInput").value;
  const currency = document.getElementById("currencySelect").value;
  getCurrency(amount, currency);
}

function displayAnswer(response, currency) {
  const output = response.conversion_result;
  document.getElementById(
    "money"
  ).innerText = `You have ${output} in ${currency}`;
}

function displayError(error, currency) {
  document.getElementById(
    "error"
  ).innerText = `There was an error getting the currency from ${currency}: ${error}.`;
}

window.addEventListener("load", function () {
  document
    .getElementById("currencyForm")
    .addEventListener("submit", displayResult);
});
