

document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();

    let balance = parseFloat(document.getElementById('c-balance').innerText);

    const amount = parseFloat(document.getElementById('in-amount').value);

    const pass = document.getElementById('in-pass').value;

    if (amount !== "" && pass === '17100' && !isNaN(amount)) {
        balance = balance + amount;
        // Update the current balance
        document.getElementById('c-balance').innerText = balance;
        resetValues('in-amount','in-pass');
    } else {
        alert('Invalid Amount or Pin');
        resetValues('in-amount','in-pass');
    }


})

document.getElementById('btn-cashout').addEventListener('click', function (event) {
    event.preventDefault();

    let balance = parseFloat(document.getElementById('c-balance').innerText);

    const amount = parseFloat(document.getElementById('in-cashout-amount').value);

    const pass = document.getElementById('in-cashout-pass').value;

    if (amount !== "" && pass === '17100' && !isNaN(amount)) {
        balance = balance - amount;
        // Update the current balance
        document.getElementById('c-balance').innerText = balance;
        resetValues('in-cashout-amount', 'in-cashout-pass');
    } else {
        alert('Invalid Amount or Pin');
        resetValues('in-cashout-amount', 'in-cashout-pass');
    }


})

function resetValues(num1, num2){
    document.getElementById(num1).value = "";
    document.getElementById(num2).value = "";
    
}
