
document.getElementById("taxForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const salary = parseFloat(document.getElementById("salary").value);
    const otherIncome = parseFloat(document.getElementById("otherIncome").value || 0);
    const deductions = parseFloat(document.getElementById("deductions").value || 0);
    const ageGroup = document.getElementById("age").value;
    const taxRegime = document.getElementById("regime").value;

    let totalIncome = salary + otherIncome - deductions;
    let tax = 0;

    // Tax slab logic (for simplicity, basic implementation)
    if (taxRegime === "old") {
        if (totalIncome <= 250000) {
            tax = 0;
        } else if (totalIncome <= 500000) {
            tax = (totalIncome - 250000) * 0.05;
        } else if (totalIncome <= 1000000) {
            tax = (250000 * 0.05) + (totalIncome - 500000) * 0.2;
        } else {
            tax = (250000 * 0.05) + (500000 * 0.2) + (totalIncome - 1000000) * 0.3;
        }
    } else {
        if (totalIncome <= 250000) {
            tax = 0;
        } else if (totalIncome <= 500000) {
            tax = (totalIncome - 250000) * 0.05;
        } else if (totalIncome <= 750000) {
            tax = (250000 * 0.05) + (totalIncome - 500000) * 0.1;
        } else if (totalIncome <= 1000000) {
            tax = (250000 * 0.05) + (250000 * 0.1) + (totalIncome - 750000) * 0.15;
        } else {
            tax = (250000 * 0.05) + (250000 * 0.1) + (250000 * 0.15) + (totalIncome - 1000000) * 0.2;
        }
    }

    // Display tax result
    const result = document.getElementById("result");
    const taxResult = document.getElementById("taxResult");
    taxResult.textContent = "Total Tax Payable: ₹" + tax.toFixed(2);

    result.classList.remove("hidden");

    // Generate PDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.text("Income Tax Calculation Result", 20, 20);
    doc.text("Total Income: ₹" + totalIncome, 20, 30);
    doc.text("Total Tax Payable: ₹" + tax.toFixed(2), 20, 40);
    doc.save("Tax_Calculation_Result.pdf");
});
