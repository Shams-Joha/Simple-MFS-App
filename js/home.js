

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

    if (pass === 17100 && !isNaN(amount)) {

        if (type === 1) {
            balance += amount * type;
            document.getElementById(balanceId).innerText = balance;
            resetValues(amountId, passId);
            let entry = document.createElement('p');
            entry.innerText = `Account Credited by: ${amount} tk. Current Balance: ${balance}`;
            document.getElementById('transaction-container').appendChild(entry);

        }
        else if (type === -1) {
            if (amount > balance) {
                alert('You do not have enough balance');
                resetValues(amountId, passId);
                return;
            }
            balance += amount * type;
            document.getElementById(balanceId).innerText = balance;
            resetValues(amountId, passId);
            const div = document.createElement('div');
            div.classList.add('bg-yellow-300');
            div.innerHTML = `
              <h4 class = "text-2xl font-bold">Cash Out </h4>
              <p> ${amount} Withdraw. New Balance ${balance} </p>
            
            `
            document.getElementById('transaction-container').appendChild(div);
        }
    }
    else {
        alert('Invalid Amount or Pin Number');
        resetValues(amountId, passId);
        return;
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
