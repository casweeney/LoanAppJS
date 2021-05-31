//Listen for submit
document.querySelector('#loan-form').addEventListener('submit', calculateResults);

function calculateResults(e){
    console.log('Calculating ...');

    //UI Vars
    const amount = document.querySelector('#amount');
    const interest = document.querySelector('#interest');
    const years = document.querySelector('#years');
    const monthlyPayment = document.querySelector('#monthly-payment');
    const totalPayment = document.querySelector('#total-payment');
    const totalInterest = document.querySelector('#total-interest');

    const principal = parseFloat(amount.value);

    e.preventDefault();
}