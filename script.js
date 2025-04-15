document.getElementById('taxForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let salary = parseFloat(document.getElementById('salary').value) || 0;
    let otherIncome = parseFloat(document.getElementById('otherIncome').value) || 0;
    let deductions = parseFloat(document.getElementById('deductions').value) || 0;

    let totalIncome = salary + otherIncome;
    let taxableOld = totalIncome - deductions;
    let taxableNew = totalIncome; // No deductions in new regime

    // Old Regime Tax Calculation
    let oldTax = 0;
    if (taxableOld > 250000 && taxableOld <= 500000) {
        oldTax = (taxableOld - 250000) * 0.05;
    } else if (taxableOld <= 1000000) {
        oldTax = (250000 * 0.05) + (taxableOld - 500000) * 0.1;
    } else if (taxableOld > 1000000) {
        oldTax = (250000 * 0.05) + (500000 * 0.1) + (taxableOld - 1000000) * 0.3;
    }

    // New Regime Tax Calculation
    let newTax = 0;
    if (taxableNew > 250000 && taxableNew <= 500000) {
        newTax = (taxableNew - 250000) * 0.05;
    } else if (taxableNew <= 750000) {
        newTax = (250000 * 0.05) + (taxableNew - 500000) * 0.1;
    } else if (taxableNew <= 1000000) {
        newTax = (250000 * 0.05) + (250000 * 0.1) + (taxableNew - 750000) * 0.15;
    } else if (taxableNew <= 1250000) {
        newTax = (250000 * 0.05) + (250000 * 0.1) + (250000 * 0.15) + (taxableNew - 1000000) * 0.2;
    } else if (taxableNew <= 1500000) {
        newTax = (250000 * 0.05) + (250000 * 0.1) + (250000 * 0.15) + (250000 * 0.2) + (taxableNew - 1250000) * 0.25;
    } else if (taxableNew > 1500000) {
        newTax = (250000 * 0.05) + (250000 * 0.1) + (250000 * 0.15) + (250000 * 0.2) + (250000 * 0.25) + (taxableNew - 1500000) * 0.3;
    }

    // Display results
    document.getElementById('oldTaxResult').innerText = `Old Regime Tax: ₹${oldTax.toFixed(2)}`;
    document.getElementById('newTaxResult').innerText = `New Regime Tax: ₹${newTax.toFixed(2)}`;
    document.getElementById('result').classList.remove('hidden');
});
