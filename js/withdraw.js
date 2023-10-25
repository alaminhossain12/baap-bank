document.getElementById("withdraw-btn").addEventListener("click", function () {
  // console.log("Withdraw Button Clicked");
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawFieldAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawFieldAmountString);
  // console.log(newWithdrawAmount);
  const withdrawTotalAmountElement = document.getElementById("withdraw-total");
  const withdrawTotalAmountElementString = withdrawTotalAmountElement.innerText;
  const previousWithdrawAmount = parseFloat(withdrawTotalAmountElementString);
  const currentWithdrawAmount = previousWithdrawAmount + newWithdrawAmount;
  withdrawTotalAmountElement.innerText = currentWithdrawAmount;
  const balanceTotalAmountElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalAmountElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);
  const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  balanceTotalAmountElement.innerText = currentBalanceTotal;
  withdrawField.value = "";
});
