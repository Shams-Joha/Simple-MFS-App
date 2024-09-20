function getInputValueById(id){
    const value = document.getElementById(id).value;
    const inputNum = parseFloat(value);
    return inputNum;
}

function showSectionById(id){
  document.getElementById('cashin-section').classList.add('hidden');
  document.getElementById('cashout-section').classList.add('hidden');
  document.getElementById('transaction-history').classList.add('hidden');
  // Show the section with the provided id
  document.getElementById(id).classList.remove('hidden');
}