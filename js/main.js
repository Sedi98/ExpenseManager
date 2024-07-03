function addData(value, type) {
  if (type === "expense") {
    if (value > balance) {
      alert("Insufficient Balance");
      return;
    } else if (value <= 0) {
      alert("Enter valid amount");
      return;
    } else {
      expenseList.push(value);
      balance = balance - Number(value);
      totalExpense += Number(value);
      updateCash(balance, totalExpense, 0);
    }
  } else if (type === "earning") {
    earningList.push(value);
    balance = balance + Number(value);
    totalEarning += Number(value);
    updateCash(balance, 0, totalEarning);
  }
}

function addInputValue(value) {
  numberInput.value = Number(numberInput.value) + value;
}

function ListEarning() {
  earningsListDiv.innerHTML = "";
  earningList.forEach((element, index) => {
    earningsListDiv.innerHTML += `<div> ${
      index + 1
    }) ${element} &#x20BC;</div>`;
  });
}

function ListExpense() {
  expensesListDiv.innerHTML = "";
  expenseList.forEach((element, index) => {
    expensesListDiv.innerHTML += `<div> ${
      index + 1
    }) ${element} &#x20BC;</div>`;
  });
}

saveBtn.addEventListener("click", () => {
  let value = numberInput.value;

  if (value <= 0) {
    alert("Enter valid amount");
  } else {
    if (isexpense) {
      addData(value, "expense");
      ListExpense();
    } else {
      addData(value, "earning");
      ListEarning();
    }
    numberInput.value = "";
  }
});

addExpenseBtn.addEventListener("click", () => {
  isexpense = true;
  addExpenseBtn.classList.add("active");
  addEarningBtn.classList.remove("active");
  typeText.innerHTML = "Enter Expense";
  inputSection.style.display = "flex";
});

addEarningBtn.addEventListener("click", () => {
  isexpense = false;
  addEarningBtn.classList.add("active");
  addExpenseBtn.classList.remove("active");
  typeText.innerHTML = "Enter Earning";
  inputSection.style.display = "flex";
});

function updateCash(balance, expense, earning) {
  let balanceDiv = document.querySelector(".balance");
  let totalExpenseText = document.querySelector(".totalExpenseText");
  let totalEarningText = document.querySelector(".totalEarningText");
  balanceDiv.innerHTML = `Balance: ${balance} &#x20BC;`;
  totalExpenseText.innerHTML = `Total Expense: ${expense} &#x20BC;`;
  totalEarningText.innerHTML = `Total Earning: ${earning} &#x20BC;`;
}
