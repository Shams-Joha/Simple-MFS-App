

document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();

    let balance = parseInt(document.getElementById('c-balance').innerText);

    const amount = parseInt(document.getElementById('in-amount').value);

    const pass = document.getElementById('in-pass').value;

    if (amount !== "" && pass === '17100') {
        balance = balance + amount;
        // Update the current balance
        document.getElementById('c-balance').innerText = balance;
        document.getElementById('in-amount').value = "";
        document.getElementById('in-pass').value = "";
    } else {
        alert('Invalid Amount or Pin');
    }


})
