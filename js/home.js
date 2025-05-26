let log_out = document.getElementById("log_out");

// Logout logic
log_out.addEventListener("click", () => {
  localStorage.removeItem("isLoggedIn"); // <-- Important
  window.location.href = "./index.html";
});


document.querySelectorAll('input[type="number"]').forEach(function (input) {
  input.addEventListener("keydown", function (e) {
    if (["e", "E", "+", "-"].includes(e.key)) {
      e.preventDefault();
    }
  });
});



let numberInputs = document.querySelectorAll('input[type="number"]');

numberInputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.value.length > 11) {
      input.value = input.value.slice(0, 11);
    }
  });
});


let pinNumbers = document.querySelectorAll('input[type="password"]');

pinNumbers.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.value.length > 4) {
      input.value = input.value.slice(0, 4);
    }
  });
});



let selectBank = document.getElementById("selectBank");

selectBank.addEventListener("change", () => {
  if (selectBank.value === "") {
    selectBank.classList.remove("text-[#080808]");
    selectBank.classList.add("text-[#08080869]");
  } else {
    selectBank.classList.remove("text-[#08080869]");
    selectBank.classList.add("text-[#080808]");
  }
});


let selectBankPay = document.getElementById("selectBankPay");

selectBankPay.addEventListener("change", () => {
  if (selectBankPay.value === "") {
    selectBankPay.classList.remove("text-[#080808]");
    selectBankPay.classList.add("text-[#08080869]");
  } else {
    selectBankPay.classList.remove("text-[#08080869]");
    selectBankPay.classList.add("text-[#080808]");
  }
});



let latestPayment = document.getElementById("latestPayment");
let add_money = document.getElementById("add_money");
let addMoney = document.getElementById("addMoney");

add_money.addEventListener("click", () => {
  latestPayment.style.display = "none";
  cashOut.style.display = "none";
  transferMoney.style.display = "none";
  getBonus.style.display = "none";
  payBill.style.display = "none";
  transactionHistory.style.display = "none";
  addMoney.style.display = "block";
  add_money.classList.add(
    "text-blue",
    "bg-[rgba(8,117,242,0.06)]",
    "border-blue"
  );
  cash_out.classList.remove(
    "text-blue",
    "bg-[rgba(8,117,242,0.06)]",
    "border-blue"
  );
  transfer_money.classList.remove(
    "text-blue",
    "bg-[rgba(8,117,242,0.06)]",
    "border-blue"
  );
  get_bonus.classList.remove(
    "text-blue",
    "bg-[rgba(8,117,242,0.06)]",
    "border-blue"
  );
  pay_bill.classList.remove(
    "text-blue",
    "bg-[rgba(8,117,242,0.06)]",
    "border-blue"
  );
  transactions_btn.classList.remove(
    "text-blue",
    "bg-[rgba(8,117,242,0.06)]",
    "border-blue"
  );
});



let cash_out = document.getElementById("cash_out");
let cashOut = document.getElementById("cashOut");

cash_out.addEventListener("click", () => {
  latestPayment.style.display = "none";
  addMoney.style.display = "none";
  transferMoney.style.display = "none";
  getBonus.style.display = "none";
  payBill.style.display = "none";
  transactionHistory.style.display = "none";
  cashOut.style.display = "block";
  add_money.classList.remove(
    "text-blue",
    "bg-[rgba(8,117,242,0.06)]",
    "border-blue"
  );
  transfer_money.classList.remove(
    "text-blue",
    "bg-[rgba(8,117,242,0.06)]",
    "border-blue"
  );
  get_bonus.classList.remove(
    "text-blue",
    "bg-[rgba(8,117,242,0.06)]",
    "border-blue"
  );
  pay_bill.classList.remove(
    "text-blue",
    "bg-[rgba(8,117,242,0.06)]",
    "border-blue"
  );
  transactions_btn.classList.remove(
    "text-blue",
    "bg-[rgba(8,117,242,0.06)]",
    "border-blue"
  );
  cash_out.classList.add(
    "text-blue",
    "bg-[rgba(8,117,242,0.06)]",
    "border-blue"
  );
});



let transfer_money = document.getElementById("transfer_money");
let transferMoney = document.getElementById("transferMoney");

transfer_money.addEventListener("click", () => {
  latestPayment.style.display = "none";
  addMoney.style.display = "none";
  cashOut.style.display = "none";
  getBonus.style.display = "none";
  payBill.style.display = "none";
  transactionHistory.style.display = "none";
  transferMoney.style.display = "block";
  add_money.classList.remove(
    "text-blue",
    "bg-[rgba(8,117,242,0.06)]",
    "border-blue"
  );
  cash_out.classList.remove(
    "text-blue",
    "bg-[rgba(8,117,242,0.06)]",
    "border-blue"
  );
  get_bonus.classList.remove(
    "text-blue",
    "bg-[rgba(8,117,242,0.06)]",
    "border-blue"
  );
  pay_bill.classList.remove(
    "text-blue",
    "bg-[rgba(8,117,242,0.06)]",
    "border-blue"
  );
  transactions_btn.classList.remove(
    "text-blue",
    "bg-[rgba(8,117,242,0.06)]",
    "border-blue"
  );
  transfer_money.classList.add(
    "text-blue",
    "bg-[rgba(8,117,242,0.06)]",
    "border-blue"
  );
});



let get_bonus = document.getElementById("get_bonus");
let getBonus = document.getElementById("getBonus");

get_bonus.addEventListener("click", () => {
  latestPayment.style.display = "none";
  addMoney.style.display = "none";
  cashOut.style.display = "none";
  payBill.style.display = "none";
  transferMoney.style.display = "none";
  transactionHistory.style.display = "none";
  getBonus.style.display = "block";
  transfer_money.classList.remove(
    "text-blue",
    "bg-[rgba(8,117,242,0.06)]",
    "border-blue"
  );
  add_money.classList.remove(
    "text-blue",
    "bg-[rgba(8,117,242,0.06)]",
    "border-blue"
  );
  cash_out.classList.remove(
    "text-blue",
    "bg-[rgba(8,117,242,0.06)]",
    "border-blue"
  );
  pay_bill.classList.remove(
    "text-blue",
    "bg-[rgba(8,117,242,0.06)]",
    "border-blue"
  );
  transactions_btn.classList.remove(
    "text-blue",
    "bg-[rgba(8,117,242,0.06)]",
    "border-blue"
  );
  get_bonus.classList.add(
    "text-blue",
    "bg-[rgba(8,117,242,0.06)]",
    "border-blue"
  );
});



let pay_bill = document.getElementById("pay_bill");
let payBill = document.getElementById("payBill");

pay_bill.addEventListener("click", () => {
  latestPayment.style.display = "none";
  addMoney.style.display = "none";
  cashOut.style.display = "none";
  transferMoney.style.display = "none";
  getBonus.style.display = "none";
  transactionHistory.style.display = "none";
  payBill.style.display = "block";
  transfer_money.classList.remove(
    "text-blue",
    "bg-[rgba(8,117,242,0.06)]",
    "border-blue"
  );
  add_money.classList.remove(
    "text-blue",
    "bg-[rgba(8,117,242,0.06)]",
    "border-blue"
  );
  cash_out.classList.remove(
    "text-blue",
    "bg-[rgba(8,117,242,0.06)]",
    "border-blue"
  );
  get_bonus.classList.remove(
    "text-blue",
    "bg-[rgba(8,117,242,0.06)]",
    "border-blue"
  );
  transactions_btn.classList.remove(
    "text-blue",
    "bg-[rgba(8,117,242,0.06)]",
    "border-blue"
  );
  pay_bill.classList.add(
    "text-blue",
    "bg-[rgba(8,117,242,0.06)]",
    "border-blue"
  );
});



let transactions_btn = document.getElementById("transactions_btn");
let transactionHistory = document.getElementById("transactionHistory");

transactions_btn.addEventListener("click", () => {
  latestPayment.style.display = "none";
  addMoney.style.display = "none";
  cashOut.style.display = "none";
  transferMoney.style.display = "none";
  getBonus.style.display = "none";
  payBill.style.display = "none";
  transactionHistory.style.display = "block";
  transfer_money.classList.remove(
    "text-blue",
    "bg-[rgba(8,117,242,0.06)]",
    "border-blue"
  );
  add_money.classList.remove(
    "text-blue",
    "bg-[rgba(8,117,242,0.06)]",
    "border-blue"
  );
  cash_out.classList.remove(
    "text-blue",
    "bg-[rgba(8,117,242,0.06)]",
    "border-blue"
  );
  get_bonus.classList.remove(
    "text-blue",
    "bg-[rgba(8,117,242,0.06)]",
    "border-blue"
  );
  pay_bill.classList.remove(
    "text-blue",
    "bg-[rgba(8,117,242,0.06)]",
    "border-blue"
  );
  transactions_btn.classList.add(
    "text-blue",
    "bg-[rgba(8,117,242,0.06)]",
    "border-blue"
  );
});



let addMoneyBtn = document.getElementById("addMoneyBtn");
let accountNumber = document.getElementById("accountNumber");
let addAmout = document.getElementById("addAmout");
let pinNumber = document.getElementById("pinNumber");
let availableBalance = document.getElementById("availableBalance");


addMoneyBtn.addEventListener("click", () => {
  let add_amount = Number(addAmout.value)
  let balance = Number(availableBalance.innerHTML.replace("$", ""))
  let newBalance = balance + add_amount
 
  if (selectBank.value == "" || accountNumber.value == "" || addAmout.value == "" || pinNumber.value == "") {
    alert("Please Complete The Input Fields.");
    return;
  }
  else {
    availableBalance.innerHTML = `$${newBalance}`
    selectBank.value = ""
    selectBank.classList.add("text-[#08080869]");
    addAmout.value = ""
    pinNumber.value = ""
    accountNumber.value = ""
  }
})



let withdrawBtn = document.getElementById("withdrawBtn");
let agentNumber = document.getElementById("agentNumber");
let withdrawAmout = document.getElementById("withdrawAmout");
let withdrawPinNumber = document.getElementById("withdrawPinNumber");


withdrawBtn.addEventListener("click", () => {
  let withdraw_amount = Number(withdrawAmout.value)
  let balance = Number(availableBalance.innerHTML.replace("$", ""))
  let newBalance = balance - withdraw_amount
 
  if (agentNumber.value == "" || withdrawAmout.value == "" || withdrawPinNumber.value == "") {
    alert("Please Complete The Input Fields.");
    return;
  }
  else if (withdrawAmout.value > balance) {
      alert("Unsufficient Balance.");
      return;
  }
  else {
    availableBalance.innerHTML = `$${newBalance}`
    withdrawAmout.value = ""
    withdrawPinNumber.value = ""
    agentNumber.value = ""
  }
})




let sendBtn = document.getElementById("sendBtn");
let userAccountNumber = document.getElementById("userAccountNumber");
let transferAmout = document.getElementById("transferAmout");
let transferPinNumber = document.getElementById("transferPinNumber");


sendBtn.addEventListener("click", () => {
  let transfer_amount = Number(transferAmout.value)
  let balance = Number(availableBalance.innerHTML.replace("$", ""))
  let newBalance = balance - transfer_amount
 
  if (userAccountNumber.value == "" || transferAmout.value == "" || transferPinNumber.value == "") {
    alert("Please Complete The Input Fields.");
    return;
  }
  else if (transferAmout.value > balance) {
      alert("Unsufficient Balance");
      return;
  }
  else {
    availableBalance.innerHTML = `$${newBalance}`
    transferAmout.value = ""
    transferPinNumber.value = ""
    userAccountNumber.value = ""
  }
})




let getBonusBtn = document.getElementById("getBonusBtn")
let couponCode = document.getElementById("couponCode")

getBonusBtn.addEventListener("click", () => {
  let newBalance = Number(availableBalance.innerHTML.replace("$", "")) + 5000

  if (couponCode.value == "") {
    alert("Please Enter Your Coupon Code to Get Bonus.");
    return;
  }
  else if (couponCode.value == "BONUS5000") {
    couponCode.value = ""
    availableBalance.innerHTML = `$${newBalance}`
  }
  else {
    alert("Wrong Coupon Code.");
    return;
  }
})




let payNowBtn = document.getElementById("payNowBtn");
let billerAccountNumber = document.getElementById("billerAccountNumber");
let addAmoutPay = document.getElementById("addAmoutPay");
let payPinNumber = document.getElementById("payPinNumber");


payNowBtn.addEventListener("click", () => {
  let pay_amount = Number(addAmoutPay.value)
  let balance = Number(availableBalance.innerHTML.replace("$", ""))
  let newBalance = balance - pay_amount
 
  if (selectBankPay.value == "" || billerAccountNumber.value == "" || addAmoutPay.value == "" || payPinNumber.value == "") {
    alert("Please Complete The Input Fields.");
    return;
  }
  else if (addAmoutPay.value > balance) {
    alert("Unsufficient Balance.");
    return;
  }
  else {
    availableBalance.innerHTML = `$${newBalance}`
    selectBankPay.value = ""
    selectBankPay.classList.add("text-[#08080869]");
    addAmoutPay.value = ""
    payPinNumber.value = ""
    billerAccountNumber.value = ""
  }
})


