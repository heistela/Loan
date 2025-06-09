document.getElementById('loan-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // UI elements
  const amountUI = document.getElementById('amount');
  const interestUI = document.getElementById('interest');
  const yearsUI = document.getElementById('years');
  const resultsDiv = document.getElementById('results');
  const mpEl = document.getElementById('monthly-payment');
  const tpEl = document.getElementById('total-payment');
  const tiEl = document.getElementById('total-interest');

  // Parse input values
  const principal   = parseFloat(amountUI.value);
  const annualRate  = parseFloat(interestUI.value) / 100 / 12;
  const payments    = parseFloat(yearsUI.value) * 12;

  // Compute monthly payment
  const x = Math.pow(1 + annualRate, payments);
  const monthly = (principal * x * annualRate) / (x - 1);

  if (isFinite(monthly)) {
    mpEl.textContent = monthly.toFixed(2);
    tpEl.textContent = (monthly * payments).toFixed(2);
    tiEl.textContent = ((monthly * payments) - principal).toFixed(2);
    resultsDiv.classList.remove('hidden');
  } else {
    alert('Please check your numbers');
  }
});