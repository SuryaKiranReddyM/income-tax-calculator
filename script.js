<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Income Tax Calculator</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-100">
    <div class="container mx-auto p-4">
        <h1 class="text-3xl font-semibold text-center mb-6">Income Tax Calculator</h1>
        
        <!-- Form -->
        <form id="taxForm" class="bg-white p-6 rounded shadow-lg">
            <!-- Salary Input -->
            <div class="mb-4">
                <label for="salary" class="block font-medium">Annual Salary (₹)</label>
                <input type="number" id="salary" class="mt-2 p-2 w-full border rounded" required>
            </div>
            
            <!-- Other Income Input -->
            <div class="mb-4">
                <label for="otherIncome" class="block font-medium">Other Income (₹)</label>
                <input type="number" id="otherIncome" class="mt-2 p-2 w-full border rounded">
            </div>
            
            <!-- Deductions Input -->
            <div class="mb-4">
                <label for="deductions" class="block font-medium">Deductions (₹)</label>
                <input type="number" id="deductions" class="mt-2 p-2 w-full border rounded">
            </div>
            
            <!-- Age Group Selection -->
            <div class="mb-4">
                <label for="age" class="block font-medium">Age Group</label>
                <select id="age" class="mt-2 p-2 w-full border rounded">
                    <option value="below60">Below 60</option>
                    <option value="60to80">60-80</option>
                    <option value="above80">Above 80</option>
                </select>
            </div>
            
            <!-- Tax Regime Selection -->
            <div class="mb-4">
                <label for="regime" class="block font-medium">Tax Regime</label>
                <select id="regime" class="mt-2 p-2 w-full border rounded">
                    <option value="old">Old Regime</option>
                    <option value="new">New Regime</option>
                </select>
            </div>
            
            <button type="submit" class="bg-blue-500 text-white p-2 rounded w-full">Calculate Tax</button>
        </form>

        <!-- Results Section -->
        <div id="result" class="mt-6 hidden">
            <h2 class="text-xl font-semibold mb-4">Tax Calculation Comparison</h2>

            <!-- Old Regime Result -->
            <div id="oldRegimeResult" class="mb-4">
                <h3 class="text-lg font-medium">Old Regime Tax Calculation</h3>
                <p id="oldTaxResult" class="text-sm text-gray-700"></p>
            </div>

            <!-- New Regime Result -->
            <div id="newRegimeResult" class="mb-4">
                <h3 class="text-lg font-medium">New Regime Tax Calculation</h3>
                <p id="newTaxResult" class="text-sm text-gray-700"></p>
            </div>
        </div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jsPDF/2.5.1/jspdf.umd.min.js"></script>
    <script src="script.js"></script>
</body>
</html>
