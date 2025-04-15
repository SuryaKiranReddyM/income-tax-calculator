function nextSection(sectionId) {
    const currentSection = document.querySelector("div:not([style*='display: none'])");
    const nextSection = document.getElementById(sectionId);
    currentSection.style.display = 'none';
    nextSection.style.display = 'block';
}

function previousSection(sectionId) {
    const currentSection = document.querySelector("div:not([style*='display: none'])");
    const previousSection = document.getElementById(sectionId);
    currentSection.style.display = 'none';
    previousSection.style.display = 'block';
}

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

function toggleRentField() {
    const residentialStatus = document.getElementById("residential_status").value;
    const rentField = document.getElementById("rent_field");
    if (residentialStatus === "rented") {
        rentField.style.display = 'block';
    } else {
        rentField.style.display = 'none';
    }
}

function downloadPDF() {
    alert("PDF Download functionality is yet to be implemented.");
}

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
