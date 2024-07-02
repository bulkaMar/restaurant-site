const currencySelector = document.getElementById("currency");
currencySelector.addEventListener("change", changeCurrency);

let currencies;
async function fetchCurrencies() {
  const response = await fetch(
    "https://api.exchangerate-api.com/v4/latest/USD"
  );
  currencies = await response.json();
}
async function changeCurrency() {
  if (!currencies) {
    await fetchCurrencies();
  }
  const selectedCurrency = currencySelector.value;
  const rate = currencies.rates[selectedCurrency];
  updatePrices(rate, selectedCurrency);
}
function updatePrices(rate, currency) {
  const prices = document.querySelectorAll(".menu-meals-details__price");
  prices.forEach((price) => {
    const basePrice = parseFloat(price.getAttribute("data-price"));
    const newPrice = (basePrice * rate).toFixed(0);
    price.textContent = `${getCurrencySymbol(currency)} ${newPrice}`;
  });
}
function getCurrencySymbol(currency) {
  switch (currency) {
    case "USD":
      return "$";
    case "EUR":
      return "€";
    case "GBP":
      return "£";
    case "UAH":
      return "₴";
    default:
      return currency;
  }
}




