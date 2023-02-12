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

function displayError(response, currency) {
  if (response == "Error: 404 undefined") {
    document.getElementById("error").innerText = `${currency} is not valid, please select another currency.`
  }
  else {
  document.getElementById(
    "error"
  ).innerText = `There was an error: ${response}.`;
  }
}

window.addEventListener("load", function () {
  document
    .getElementById("currencyForm")
    .addEventListener("submit", displayResult);
});
