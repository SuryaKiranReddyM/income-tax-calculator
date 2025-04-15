// Function to move to the next section
function nextSection(sectionId) {
    // Get the current section (visible one)
    const currentSection = document.querySelector('div[id^="section"]:not([style*="display: none"])');
    const nextSection = document.getElementById(sectionId);

    // Hide the current section
    currentSection.style.display = 'none';

    // Show the next section
    nextSection.style.display = 'block';
}

// Function to go back to the previous section
function previousSection(sectionId) {
    // Get the current section (visible one)
    const currentSection = document.querySelector('div[id^="section"]:not([style*="display: none"])');
    const previousSection = document.getElementById(sectionId);

    // Hide the current section
    currentSection.style.display = 'none';

    // Show the previous section
    previousSection.style.display = 'block';
}

// Toggle PAN, Mobile, and Email visibility based on IT filing option
function toggleItFields() {
    const filingOption = document.getElementById("it_filing").value;
    const panEmailFields = document.getElementById("pan_mobile_email");
    if (filingOption === "yes") {
        panEmailFields.style.display = 'block';
        document.getElementById("pan").required = true;
        document.getElementById("mobile").required = true;
        document.getElementById("email").required = true;
    } else {
        panEmailFields.style.display = 'none';
        document.getElementById("pan").required = false;
        document.getElementById("mobile").required = false;
        document.getElementById("email").required = false;
    }
}

// Toggle Rent Paid field visibility based on Residential Status
function toggleRentField() {
    const residentialStatus = document.getElementById("residential_status").value;
    const rentField = document.getElementById("rent_field");
    if (residentialStatus === "rented") {
        rentField.style.display = 'block';
    } else {
        rentField.style.display = 'none';
    }
}

// Function to calculate and display tax details
function calculateTax() {
    const grossSalary = parseFloat(document.getElementById("gross_salary").value);
    const hraReceived = parseFloat(document.getElementById("hra").value || 0);
    const rentPaid = parseFloat(document.getElementById("rent_paid").value || 0);
    const deductions80C = parseFloat(document.getElementById("deductions_80c").value || 0);
    const deductions80D = parseFloat(document.getElementById("deductions_80d").value || 0);
    const otherDeductions = parseFloat(document.getElementById("other_deductions").value || 0);
    const otherIncome = parseFloat(document.getElementById("other_income").value || 0);

    // Calculating tax under both regimes
    let oldTax = 0;
    let newTax = 0;

    // Old Regime Calculation
    const totalDeductionsOld = deductions80C + deductions80D + otherDeductions;
    const taxableIncomeOld = grossSalary - totalDeductionsOld;

    if (taxableIncomeOld <= 250000) {
        oldTax = 0;
    } else if (taxableIncomeOld <= 500000) {
        oldTax = (taxableIncomeOld - 250000) * 0.05;
    } else if (taxableIncomeOld <= 1000000) {
        oldTax = 250000 * 0.05 + (taxableIncomeOld - 500000) * 0.2;
    } else {
        oldTax = 250000 * 0.05 + 500000 * 0.2 + (taxableIncomeOld - 1000000) * 0.3;
    }

    // New Regime Calculation
    const taxableIncomeNew = grossSalary; // No deductions in New Regime
    if (taxableIncomeNew <= 250000) {
        newTax = 0;
    } else if (taxableIncomeNew <= 500000) {
        newTax = (taxableIncomeNew - 250000) * 0.05;
    } else if (taxableIncomeNew <= 1000000) {
        newTax = 250000 * 0.05 + (taxableIncomeNew - 500000) * 0.1;
    } else {
        newTax = 250000 * 0.05 + 500000 * 0.1 + (taxableIncomeNew - 1000000) * 0.15;
    }

    // Displaying the tax results
    document.getElementById("old_tax").textContent = oldTax.toFixed(2);
    document.getElementById("new_tax").textContent = newTax.toFixed(2);

    // Suggest the best regime
    const recommendedRegime = oldTax < newTax ? 'Old Regime' : 'New Regime';
    document.getElementById("recommended_regime").textContent = recommendedRegime;

    // Show the recommendation after tax calculation
    nextSection("section3");
}

// Function to redirect to WhatsApp with pre-filled message
function redirectToWhatsApp() {
    const name = document.getElementById("name").value;
    const grossSalary = document.getElementById("gross_salary").value;
    const oldTax = document.getElementById("old_tax").textContent;
    const newTax = document.getElementById("new_tax").textContent;
    const recommendedRegime = document.getElementById("recommended_regime").textContent;

    const message = `Name: ${name}\nGross Salary: ₹${grossSalary}\nOld Tax Regime: ₹${oldTax}\nNew Tax Regime: ₹${newTax}\nRecommended Regime: ${recommendedRegime}\n\nPlease assist me further.`;

    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Function to trigger PDF download (currently a placeholder)
function downloadPDF() {
    alert("PDF Download functionality is yet to be implemented.");
}
