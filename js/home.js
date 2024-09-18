

document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();

    let balance = parseFloat(document.getElementById('c-balance').innerText);

    const amount = parseFloat(document.getElementById('in-amount').value);

    const pass = document.getElementById('in-pass').value;

    if (amount !== "" && pass === '17100' && !isNaN(amount)) {
        balance = balance + amount;
        // Update the current balance
        document.getElementById('c-balance').innerText = balance;
        resetValues();
    } else {
        alert('Invalid Amount or Pin');
        resetValues();
    }


})

function resetValues(){
    document.getElementById('in-amount').value = "";
    document.getElementById('in-pass').value = "";
}
