document.getElementById("deposit-btn").addEventListener("click", function () {
  // console.log("Deposit Button Clicked");
  const depositField = document.getElementById("deposit-field");
  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);
  // console.log(newDepositAmount);
  const depositTotalElement = document.getElementById("deposit-total");
  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);
  const currentDepositTotal = previousDepositTotal + newDepositAmount;
  depositTotalElement.innerText = currentDepositTotal;
  const balanceTotalAmountElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalAmountElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);
  const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
  balanceTotalAmountElement.innerText = currentBalanceTotal;
  depositField.value = "";
});
