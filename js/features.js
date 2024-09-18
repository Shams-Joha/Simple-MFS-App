//cash out toggle
document.getElementById('toggle-cash-out').addEventListener('click',function(){
    document.getElementById('cashin-section').setAttribute('hidden',true);
    document.getElementById('cashout-section').removeAttribute('hidden');
})
//cash in toggle
document.getElementById('toggle-cash-in').addEventListener('click',function(){
    document.getElementById('cashout-section').setAttribute('hidden',true);
    document.getElementById('cashin-section').removeAttribute('hidden');
})