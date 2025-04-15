function calculateNewRegimeTax(income) {
  let tax = 0;

  // Apply tax for ₹0 - ₹3,00,000 (0%)
  if (income <= 300000) {
    tax = 0;
  } else {
    // Apply tax for ₹3,00,001 to ₹6,00,000 (5%)
    if (income <= 600000) {
      tax = (income - 300000) * 0.05;
    } 
    // Apply tax for ₹6,00,001 to ₹9,00,000 (10%)
    else if (income <= 900000) {
      tax = (income - 600000) * 0.10 + 15000;  // ₹15,000 tax from the previous range
    } 
    // Apply tax for ₹9,00,001 to ₹12,00,000 (15%)
    else if (income <= 1200000) {
      tax = (income - 900000) * 0.15 + 45000;  // ₹45,000 tax from the previous ranges
    }
    // Apply tax for ₹12,00,001 to ₹15,00,000 (20%)
    else if (income <= 1500000) {
      tax = (income - 1200000) * 0.20 + 75000;  // ₹75,000 tax from the previous ranges
    } 
    // Apply tax for ₹15,00,001 and above (30%)
    else {
      tax = (income - 1500000) * 0.30 + 135000;  // ₹1,35,000 tax from the previous ranges
    }
  }

  // Apply 4% Cess
  let cess = tax * 0.04;
  return tax + cess;
}
