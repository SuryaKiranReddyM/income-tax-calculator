document.getElementById('taxForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form inputs
    let salary = parseFloat(document.getElementById('salary').value);
    let otherIncome = parseFloat(document.getElementById('otherIncome').value) || 0;
    let deductions = parseFloat(document.getElementById('deductions').value) || 0;
    let age = document.getElementById('age').value;
    let regime = document.getElementById('regime').value;

    // Basic Tax Calculation Logic
    let totalIncome = salary + otherIncome;
    let taxableIncome = totalIncome - deductions;

    // Tax slabs for Old Regime
    let oldTax = 0;
    if (taxableIncome <= 250000) {
        oldTax = 0;
    } else if (taxableIncome <= 500000) {
        oldTax = (taxableIncome - 250000) * 0.05;
    } else if (taxableIncome <= 1000000) {
        oldTax = 250000 * 0.05 + (taxableIncome - 500000) * 0.1;
    } else {
        oldTax = 250000 * 0.05 + 500000 * 0.1 + (taxableIncome - 1000000) * 0.3;
    }

    // Tax slabs for New Regime (No deductions allowed)
    let newTax = 0;
    if (taxableIncome <= 250000) {
        newTax = 0;
    } else if (taxableIncome <= 500000) {
        newTax = (taxableIncome - 250000) * 0.05;
    } else if (taxableIncome <= 750000) {
        newTax = 250000 * 0.05 + (taxableIncome - 500000) * 0.1;
    } else if (taxableIncome <= 1000000) {
        newTax = 250000 * 0.05 + 250000 * 0.1 + (taxableIncome - 750000) * 0.15;
    } else if (taxableIncome <= 1250000) {
        newTax = 250000 * 0.05 + 250000 * 0.1 + 250000 * 0.15 + (taxableIncome - 1000000) * 0.2;
    } else if (taxableIncome <= 1500000) {
        newTax = 250000 * 0.05 + 250000 * 0.1 + 250000 * 0.15 + 250000 * 0.2 + (taxableIncome - 1250000) * 0.25;
    } else {
        newTax = 250000 * 0.05 + 250000 * 0.1 + 250000 * 0.15 + 250000 * 0.2 + 250000 * 0.25 + (taxableIncome - 1500000) * 0.3;
    }

    // Display Results for Old and New Regime
    document.getElementById('oldTaxResult').innerText = `Old Regime Tax: ₹${oldTax.toFixed(2)}`;
    document.getElementById('newTaxResult').innerText = `New Regime Tax: ₹${newTax.toFixed(2)}`;

    // Show the result section
    document.getElementById('result').classList.remove('hidden');
    document.getElementById('oldRegimeResult').style.display = 'block';
    document.getElementById('newRegimeResult').style.display = 'block';
});
