// Listen for submit button
document.getElementById('loan-form').addEventListener('submit', function(e) {
    //Hide Results
    document.getElementById('results').style.display = 'none';

    
    //Show Loader
    document.getElementById('loading').style.display = 'block';

    setTimeout(calculateResults, 2000);

    e.preventDefault();
});

// Calculate Results Function

function calculateResults() {
    // UI Vars
    const UIamount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;

    // Compute Monthly payments
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest)/(x -1);

    if(isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments - principal).toFixed(2));

        //Show results
        document.getElementById('results').style.display = 'block';

        //Hide Loader 
        document.getElementById('loading').style.display = 'none';
    } else {
        console.log('error');
        showError('Please check your numbers');

        //Hide Loader 
        document.getElementById('loading').style.display = 'none';
    }



}

// Show Error
function showError(error) {
    const errorDiv = document.createElement('div');

    //Get Elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    //Add Class
    errorDiv.className = 'alert alert-danger';

    //Create text node
    errorDiv.appendChild(document.createTextNode(error));

    // Insert error
    card.insertBefore(errorDiv, heading);

    // Clear Error
    setTimeout(clearError, 3000);


}

// Clear Error
function clearError() {
    document.querySelector('.alert').remove();
}


