let log_out = document.getElementById("log_out");

// Prevent access if not logged in
if (localStorage.getItem("isLoggedIn") !== "true") {
    window.location.href = "./index.html";
}

// Logout logic
log_out.addEventListener("click", () => {
    localStorage.removeItem("isLoggedIn"); // <-- Important
    window.location.href = "./index.html";
});


document.querySelectorAll('input[type="number"]').forEach(function(input) {
  input.addEventListener('keydown', function(e) {
    if (['e', 'E', '+', '-', '.'].includes(e.key)) {
      e.preventDefault();
    }
  });
});

let selectBank = document.getElementById("selectBank")

selectBank.addEventListener("change", () => {
  if (selectBank.value === '') {
    selectBank.classList.remove("text-[#080808]");
    selectBank.classList.add("text-[#08080869]");
  } else {
    selectBank.classList.remove("text-[#08080869]");
    selectBank.classList.add("text-[#080808]");
  }
});
let selectBankPay = document.getElementById("selectBankPay")

selectBankPay.addEventListener("change", () => {
  if (selectBankPay.value === '') {
    selectBankPay.classList.remove("text-[#080808]");
    selectBankPay.classList.add("text-[#08080869]");
  } else {
    selectBankPay.classList.remove("text-[#08080869]");
    selectBankPay.classList.add("text-[#080808]");
  }
});





let latestPayment = document.getElementById("latestPayment")
let add_money = document.getElementById("add_money")
let addMoney = document.getElementById("addMoney")

add_money.addEventListener("click", () => {
    latestPayment.style.display = "none"
    cashOut.style.display = "none"
    transferMoney.style.display = "none"
    getBonus.style.display = "none"
    payBill.style.display = "none"
    transactionHistory.style.display = "none"
    addMoney.style.display = "block"
    add_money.classList.add('text-blue', 'bg-[rgba(8,117,242,0.06)]', 'border-blue')
    cash_out.classList.remove('text-blue', 'bg-[rgba(8,117,242,0.06)]', 'border-blue')
    transfer_money.classList.remove('text-blue', 'bg-[rgba(8,117,242,0.06)]', 'border-blue')
    get_bonus.classList.remove('text-blue', 'bg-[rgba(8,117,242,0.06)]', 'border-blue')
    pay_bill.classList.remove('text-blue', 'bg-[rgba(8,117,242,0.06)]', 'border-blue')
    transactions_btn.classList.remove('text-blue', 'bg-[rgba(8,117,242,0.06)]', 'border-blue')
})

let cash_out = document.getElementById("cash_out")
let cashOut = document.getElementById("cashOut")

cash_out.addEventListener("click", () => {
    latestPayment.style.display = "none"
    addMoney.style.display = "none"
    transferMoney.style.display = "none"
    getBonus.style.display = "none"
    payBill.style.display = "none"
    transactionHistory.style.display = "none"
    cashOut.style.display = "block"
    add_money.classList.remove('text-blue', 'bg-[rgba(8,117,242,0.06)]', 'border-blue')
    transfer_money.classList.remove('text-blue', 'bg-[rgba(8,117,242,0.06)]', 'border-blue')
    get_bonus.classList.remove('text-blue', 'bg-[rgba(8,117,242,0.06)]', 'border-blue')
    pay_bill.classList.remove('text-blue', 'bg-[rgba(8,117,242,0.06)]', 'border-blue')
    transactions_btn.classList.remove('text-blue', 'bg-[rgba(8,117,242,0.06)]', 'border-blue')
    cash_out.classList.add('text-blue', 'bg-[rgba(8,117,242,0.06)]', 'border-blue')
})

let transfer_money = document.getElementById("transfer_money")
let transferMoney = document.getElementById("transferMoney")

transfer_money.addEventListener("click", () => {
    latestPayment.style.display = "none"
    addMoney.style.display = "none"
    cashOut.style.display = "none"
    getBonus.style.display = "none"
    payBill.style.display = "none"
    transactionHistory.style.display = "none"
    transferMoney.style.display = "block"
    add_money.classList.remove('text-blue', 'bg-[rgba(8,117,242,0.06)]', 'border-blue')
    cash_out.classList.remove('text-blue', 'bg-[rgba(8,117,242,0.06)]', 'border-blue')
    get_bonus.classList.remove('text-blue', 'bg-[rgba(8,117,242,0.06)]', 'border-blue')
    pay_bill.classList.remove('text-blue', 'bg-[rgba(8,117,242,0.06)]', 'border-blue')
    transactions_btn.classList.remove('text-blue', 'bg-[rgba(8,117,242,0.06)]', 'border-blue')
    transfer_money.classList.add('text-blue', 'bg-[rgba(8,117,242,0.06)]', 'border-blue')
})



let get_bonus = document.getElementById("get_bonus")
let getBonus = document.getElementById("getBonus")

get_bonus.addEventListener("click", () => {
    latestPayment.style.display = "none"
    addMoney.style.display = "none"
    cashOut.style.display = "none"
    payBill.style.display = "none"
    transferMoney.style.display = "none"
    transactionHistory.style.display = "none"
    getBonus.style.display = "block"
    transfer_money.classList.remove('text-blue', 'bg-[rgba(8,117,242,0.06)]', 'border-blue')
    add_money.classList.remove('text-blue', 'bg-[rgba(8,117,242,0.06)]', 'border-blue')
    cash_out.classList.remove('text-blue', 'bg-[rgba(8,117,242,0.06)]', 'border-blue')
    pay_bill.classList.remove('text-blue', 'bg-[rgba(8,117,242,0.06)]', 'border-blue')
    transactions_btn.classList.remove('text-blue', 'bg-[rgba(8,117,242,0.06)]', 'border-blue')
    get_bonus.classList.add('text-blue', 'bg-[rgba(8,117,242,0.06)]', 'border-blue')
})

let pay_bill = document.getElementById("pay_bill")
let payBill = document.getElementById("payBill")

pay_bill.addEventListener("click", () => {
    latestPayment.style.display = "none"
    addMoney.style.display = "none"
    cashOut.style.display = "none"
    transferMoney.style.display = "none"
    getBonus.style.display = "none"
    transactionHistory.style.display = "none"
    payBill.style.display = "block"
    transfer_money.classList.remove('text-blue', 'bg-[rgba(8,117,242,0.06)]', 'border-blue')
    add_money.classList.remove('text-blue', 'bg-[rgba(8,117,242,0.06)]', 'border-blue')
    cash_out.classList.remove('text-blue', 'bg-[rgba(8,117,242,0.06)]', 'border-blue')
    get_bonus.classList.remove('text-blue', 'bg-[rgba(8,117,242,0.06)]', 'border-blue')
    transactions_btn.classList.remove('text-blue', 'bg-[rgba(8,117,242,0.06)]', 'border-blue')
    pay_bill.classList.add('text-blue', 'bg-[rgba(8,117,242,0.06)]', 'border-blue')
})


let transactions_btn = document.getElementById("transactions_btn")
let transactionHistory = document.getElementById("transactionHistory")

transactions_btn.addEventListener("click", () => {
    latestPayment.style.display = "none"
    addMoney.style.display = "none"
    cashOut.style.display = "none"
    transferMoney.style.display = "none"
    getBonus.style.display = "none"
    payBill.style.display = "none"
    transactionHistory.style.display = "block"
    transfer_money.classList.remove('text-blue', 'bg-[rgba(8,117,242,0.06)]', 'border-blue')
    add_money.classList.remove('text-blue', 'bg-[rgba(8,117,242,0.06)]', 'border-blue')
    cash_out.classList.remove('text-blue', 'bg-[rgba(8,117,242,0.06)]', 'border-blue')
    get_bonus.classList.remove('text-blue', 'bg-[rgba(8,117,242,0.06)]', 'border-blue')
    pay_bill.classList.remove('text-blue', 'bg-[rgba(8,117,242,0.06)]', 'border-blue')
    transactions_btn.classList.add('text-blue', 'bg-[rgba(8,117,242,0.06)]', 'border-blue')
})

