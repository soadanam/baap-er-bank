//handle deposit button event

document.getElementById('deposit-button').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmount = depositInput.value;
    
    //Update Deposit total
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmount = depositTotal.innerText;

    const newDepositTotal = parseFloat(previousDepositAmount) + parseFloat(newDepositAmount);
    depositTotal.innerText = newDepositTotal;

    //Update Account total
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceAmount = balanceTotal.innerText;

    const newBalanceTotal = parseFloat(previousBalanceAmount) + parseFloat(newDepositAmount);
    balanceTotal.innerText = newBalanceTotal;

    depositInput.value = '';
});


/////handle withdraw button event
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmount = withdrawInput.value;
    
    //Update Withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawAmount = withdrawTotal.innerText;

    const newWithdrawTotal = parseFloat(previousWithdrawAmount) + parseFloat(newWithdrawAmount);
    withdrawTotal.innerText = newWithdrawTotal;

    //Update Account total
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceAmount = balanceTotal.innerText;

    const newBalanceTotal = parseFloat(previousBalanceAmount) - parseFloat(newWithdrawAmount);
    balanceTotal.innerText = newBalanceTotal;

    withdrawInput.value = '';
});