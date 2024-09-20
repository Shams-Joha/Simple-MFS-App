

document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();
    handleTransaction('c-balance', 'in-amount', 'in-pass', 1);
})

document.getElementById('btn-cashout').addEventListener('click', function (event) {
    event.preventDefault();
    handleTransaction('c-balance', 'in-cashout-amount', 'in-cashout-pass', -1);
})


// DRY method Utilized.

function handleTransaction(balanceId, amountId, passId, type) {

    let balance = parseFloat(document.getElementById(balanceId).innerText);
    const amount = getInputValueById(amountId);
    const pass = getInputValueById(passId);

    if(pass === 17100 && !isNaN(amount)){
        balance += amount * type;
        document.getElementById(balanceId).innerText = balance;
        resetValues(amountId, passId);
    }
    else{
        alert ('Invalid Amount or Pin Number');
        resetValues(amountId, passId);
    }

}

function resetValues(...ids) {
    for (let id of ids) {
        document.getElementById(id).value = "";
    }

}

// Alternative approach:
// function resetValues(...ids) {
//     ids.forEach(id => document.getElementById(id).value = "");
// }
