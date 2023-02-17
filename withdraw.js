document.getElementById('btn-withdraw').addEventListener('click', function(){

const newWithdrawAmount = getInputValueById('withdraw-field');
const previousWithdrawTotal = getElementValueById('withdraw-total');
const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount ;
setTextElementValueByID('withdraw-total', newWithdrawTotal);
const previousBalanceTotal = getElementValueById ('balance-total')
const newBalanceTotal = previousBalanceTotal - newWithdrawTotal;
setTextElementValueByID('balance-total', newBalanceTotal);

   /* const withdrawTtotalElement = document.getElementById('withdraw-field');
    const withdrawtotalString = withdrawTtotalElement.value;
    const prevWithdrawTotal = parseFloat(withdrawtotalString);
    const currentWithdrawElement = document.getElementById('withdraw-total');
    const currentWithdrawString = currentWithdrawElement.innerHTML;
    const currentWithdraw = parseFloat (currentWithdrawString);
    const newWithdrawTotal = currentWithdraw+prevWithdrawTotal;
    currentWithdrawElement.innerHTML = newWithdrawTotal;
    withdrawTtotalElement.value = '';

    // substract from balance total
    const currentBalanceTotalElement = document.getElementById('balance-total');
    const currentBalanceTotalString = currentBalanceTotalElement.innerHTML;
    const currentBalanceTotal = parseFloat(currentBalanceTotalString);
    const newBalanceTotal =currentBalanceTotal - prevWithdrawTotal;
    currentBalanceTotalElement.innerHTML = newBalanceTotal;  */

})