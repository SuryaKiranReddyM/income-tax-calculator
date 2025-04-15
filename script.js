function nextSection(sectionId) {
    const sections = document.querySelectorAll('div[id^="section"]');
    sections.forEach(section => section.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
}

function previousSection(sectionId) {
    nextSection(sectionId);
}

function toggleItFields() {
    const filingOption = document.getElementById("it_filing").value;
    const required = filingOption === "yes";
    document.getElementById("pan").required = required;
    document.getElementById("mobile").required = required;
    document.getElementById("email").required = required;
}

function toggleRentField() {
    const residentialStatus = document.getElementById("residential_status").value;
    document.getElementById("rent_field").style.display = residentialStatus === "rented" ? 'block' : 'none';
}

function calculateTax() {
    const grossSalary = parseFloat(document.getElementById("gross_salary").value || 0);
    const deductions80C = parseFloat(document.getElementById("deductions_80c").value || 0);
    const deductions80D = parseFloat(document.getElementById("deductions_80d").value || 0);
    const otherDeductions = parseFloat(document.getElementById("other_deductions").value || 0);

    const totalDeductionsOld = deductions80C + deductions80D + otherDeductions;
    const taxableIncomeOld = grossSalary - totalDeductionsOld;

    let oldTax = 0;
    if (taxableIncomeOld > 1000000) {
        oldTax = 250000 * 0.05 + 500000 * 0.2 + (taxableIncomeOld - 1000000) * 0.3;
    } else if (taxableIncomeOld > 500000) {
        oldTax = 250000 * 0.05 + (taxableIncomeOld - 500000) * 0.2;
    } else if (taxableIncomeOld > 250000) {
        oldTax = (taxableIncomeOld - 250000) * 0.05;
    }

    const taxableIncomeNew = grossSalary;
    let newTax = 0;
    if (taxableIncomeNew > 1000000) {
        newTax = 250000 * 0.05 + 500000 * 0.1 + (taxableIncomeNew - 1000000) * 0.15;
    } else if (taxableIncomeNew > 500000) {
        newTax = 250000 * 0.05 + (taxableIncomeNew - 500000) * 0.1;
    } else if (taxableIncomeNew > 250000) {
        newTax = (taxableIncomeNew - 250000) * 0.05;
    }

    document.getElementById("old_tax").textContent = oldTax.toFixed(2);
    document.getElementById("new_tax").textContent = newTax.toFixed(2);
    document.getElementById("recommended_regime").textContent = oldTax < newTax ? "Old Regime" : "New Regime";
    nextSection("section3");
}

function redirectToWhatsApp() {
    const name = document.getElementById("name").value;
    const grossSalary = document.getElementById("gross_salary").value;
    const oldTax = document.getElementById("old_tax").textContent;
    const newTax = document.getElementById("new_tax").textContent;
    const regime = document.getElementById("recommended_regime").textContent;

    const msg = `Name: ${name}\nGross Salary: ₹${grossSalary}\nOld Tax: ₹${oldTax}\nNew Tax: ₹${newTax}\nRecommended: ${regime}`;
    const url = `https://wa.me/?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
}

function downloadPDF() {
    alert("PDF download functionality coming soon.");
}
