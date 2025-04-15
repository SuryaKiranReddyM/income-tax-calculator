// Show/Hide conditional fields based on IT Filing Assistance (Yes/No)
function toggleFields() {
  const filingAssistance = document.getElementById("filing_assistance").value;
  const panDiv = document.getElementById("pan_div");
  const mobileDiv = document.getElementById("mobile_div");
  const emailDiv = document.getElementById("email_div");

  if (filingAssistance === "Yes") {
    panDiv.style.display = "block";
    mobileDiv.style.display = "block";
    emailDiv.style.display = "block";
    document.getElementById("pan").setAttribute("required", "true");
    document.getElementById("mobile").setAttribute("required", "true");
    document.getElementById("email").setAttribute("required", "true");
  } else {
    panDiv.style.display = "block";
    mobileDiv.style.display = "block";
    emailDiv.style.display = "block";
    document.getElementById("pan").removeAttribute("required");
    document.getElementById("mobile").removeAttribute("required");
    document.getElementById("email").removeAttribute("required");
  }
}

// Show/Hide Rent Paid field based on Residential Status
function toggleRentField() {
  const residentialStatus = document.getElementById("residential_status").value;
  const rentPaidDiv = document.getElementById("rent_paid_div");

  if (residentialStatus === "Rented") {
    rentPaidDiv.style.display = "block";
  } else {
    rentPaidDiv.style.display = "none";
  }
}

// Go to next section (Section 2)
function goToSection2() {
  if (validateForm()) {
    document.getElementById("section1").style.display = "none";
    document.getElementById("section2").style.display = "block";
  }
}

// Go to next section (Section 3)
function goToSection3() {
  document.getElementById("section2").style.display = "none";
  document.getElementById("section3").style.display = "block";
  calculateTax(); // Trigger auto-calculation
}

// Basic Form Validation
function validateForm() {
  const requiredFields = document.querySelectorAll('input[required], select[required]');
  let valid = true;

  requiredFields.forEach(field => {
    if (!field.value) {
      field.style.borderColor = "red";
      valid = false;
    } else {
      field.style.borderColor = "";
    }
  });

  return valid;
}

// Tax calculation (basic example)
function calculateTax() {
  const grossSalary = parseFloat(document.getElementById("gross_salary").value) || 0;
  const standardDeduction = 50000;
  const totalTaxableIncome = grossSalary - standardDeduction;

  const oldRegimeTax = totalTaxableIncome * 0.1;  // Example tax rate
  const newRegimeTax = totalTaxableIncome * 0.05; // Example tax rate

  document.getElementById("old_regime_tax").textContent = `₹${oldRegimeTax.toFixed(2)}`;
  document.getElementById("new_regime_tax").textContent = `₹${newRegimeTax.toFixed(2)}`;

  // Recommended Regime
  const recommendedRegime = oldRegimeTax < newRegimeTax ? "Old Regime" : "New Regime";
  document.getElementById("recommended_regime").textContent = `We recommend the ${recommendedRegime}`;
}

// Redirect to WhatsApp (example)
function whatsappRedirect() {
  const name = document.getElementById("name").value;
  const grossSalary = document.getElementById("gross_salary").value;
  const taxOld = document.getElementById("old_regime_tax").textContent;
  const taxNew = document.getElementById("new_regime_tax").textContent;

  const message = `Hi, I am ${name}. My gross salary is ₹${grossSalary}, Tax under Old Regime: ${taxOld}, Tax under New Regime: ${taxNew}. Please assist me further.`;
  window.location.href = `https://wa.me/?text=${encodeURIComponent(message)}`;
}

// Download PDF (basic)
function downloadPDF() {
  // Create the PDF download logic here
  alert("PDF Download functionality is not implemented yet.");
}

// Give Feedback
function giveFeedback(response) {
  alert(`Feedback: ${response}`);
}
