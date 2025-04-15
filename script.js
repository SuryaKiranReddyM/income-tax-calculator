function calculateNewRegimeTax(income) {
    let tax = 0;

    // Tax slabs (New Regime)
    if (income <= 300000) {
        tax = 0;
    } else if (income <= 600000) {
        tax = (income - 300000) * 0.05;
    } else if (income <= 900000) {
        tax = (income - 600000) * 0.10 + 15000;
    } else if (income <= 1200000) {
        tax = (income - 900000) * 0.15 + 45000;
    } else if (income <= 1500000) {
        tax = (income - 1200000) * 0.20 + 75000;
    } else {
        tax = (income - 1500000) * 0.30 + 135000;
    }

    // Apply 4% Cess
    let cess = tax * 0.04;
    return tax + cess;
}

// Function to handle form submission
function calculateTax() {
    let income = parseFloat(document.getElementById("income").value);
    let tax = calculateNewRegimeTax(income);
    document.getElementById("result").innerHTML = `Tax Payable: ₹${tax.toFixed(2)}`;
}
