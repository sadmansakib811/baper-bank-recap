

document.getElementById('btn-deposit').addEventListener('click', function(){
//     // 2. get deposit amount from the deposit input field
//     const depositField = document.getElementById('deposit-field');
   
//     const newDepositAmountString = depositField.value; 
//      // 3. we have to convert the string into a number type

//      const newDepositAmount = parseFloat(newDepositAmountString);
// // 4. clear the string from input field after getting the value
//      depositField.value='';

//     //  5. previous deposit value
//      const depositTotalElement = document.getElementById('deposit-total');
// const previousDepositTotalString = depositTotalElement.innerText;
// const previousDepositTotal = parseFloat(previousDepositTotalString);

// // 6.

// const newDepositTotal = previousDepositTotal+newDepositAmount;
// depositTotalElement.innerText= newDepositTotal;
// // 7. balance change after deposit
// const balanceTtoalElement = document.getElementById('balance-total');
// const previousBalanceTotalString = balanceTtoalElement.innerHTML;
// const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString);
// const newBalanceTotal = previousBalanceTotalAmount+ newDepositAmount;
// balanceTtoalElement.innerHTML = newBalanceTotal;

const newDepositAmount = getInputValueById('deposit-field');
const previousDepositTotal = getElementValueById('deposit-total')

const newDepositTotal = previousDepositTotal + newDepositAmount;
setTextElementValueByID('deposit-total', newDepositTotal);
const previousBalanceTotal = getElementValueById ('balance-total')
const newBalanceTotal = previousBalanceTotal + newDepositAmount;
setTextElementValueByID('balance-total', newBalanceTotal);
})