const form = document.getElementById('conversion');
const result = document.getElementById('result');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const amount = Number(document.getElementById('amount').value);
  const currencyField = document.getElementById('currency');
  const rate = Number(currencyField.value);
  const currencyName = currencyField.options[currencyField.selectedIndex].text;

  if (Number.isNaN(amount) || amount < 0) {
    result.textContent = 'Saisissez un montant positif.';
    return;
  }

  const converted = (amount * rate).toFixed(2);
  result.textContent = amount.toFixed(2) + ' EUR = ' + converted + ' ' + currencyName;
});
