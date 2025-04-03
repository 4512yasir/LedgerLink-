document.addEventListener('DOMContentLoaded', function() {

    // Income Statement Calculation
    document.getElementById('income-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const revenue = parseFloat(document.getElementById('revenue').value);
        const expenses = parseFloat(document.getElementById('expenses').value);

        if (isNaN(revenue) || isNaN(expenses)) {
            alert('Please enter valid numbers for both Revenue and Expenses.');
            return;
        }

        const profitOrLoss = revenue - expenses;
        const result = document.getElementById('income-result');
        result.innerHTML = `<h3>Result:</h3><p>Profit/Loss: ${profitOrLoss.toFixed(2)}</p>`;

        // Update the chart with new data
        createFinancialChart(revenue, expenses);
    });

    // Balance Sheet Calculation
    document.getElementById('balance-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const assets = parseFloat(document.getElementById('assets').value);
        const liabilities = parseFloat(document.getElementById('liabilities').value);

        if (isNaN(assets) || isNaN(liabilities)) {
            alert('Please enter valid numbers for both Assets and Liabilities.');
            return;
        }

        const equity = assets - liabilities;
        const result = document.getElementById('balance-result');
        result.innerHTML = `<h3>Result:</h3><p>Equity: ${equity.toFixed(2)}</p>`;
    });

    // Cash Flow Statement Calculation
    document.getElementById('cash-flow-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const cashInflows = parseFloat(document.getElementById('cash-inflows').value);
        const cashOutflows = parseFloat(document.getElementById('cash-outflows').value);

        if (isNaN(cashInflows) || isNaN(cashOutflows)) {
            alert('Please enter valid numbers for both Cash Inflows and Cash Outflows.');
            return;
        }

        const netCashFlow = cashInflows - cashOutflows;
        const result = document.getElementById('cash-flow-result');
        result.innerHTML = `<h3>Result:</h3><p>Net Cash Flow: ${netCashFlow.toFixed(2)}</p>`;
    });

    // Financial Chart Functionality
    let financialChart;
    function createFinancialChart(revenue, expenses) {
        const ctx = document.getElementById('financial-chart-canvas').getContext('2d');

        // Destroy the previous chart if it exists
        if (financialChart) {
            financialChart.destroy();
        }

        // Create a new chart with the updated data
        financialChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Income', 'Expenses'],
                datasets: [{
                    label: 'Financial Overview',
                    data: [revenue, expenses],
                    backgroundColor: ['#4caf50', '#f44336'],
                    borderColor: ['#388e3c', '#d32f2f'],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    tooltip: {
                        enabled: true
                    }
                }
            }
        });
    }
});
