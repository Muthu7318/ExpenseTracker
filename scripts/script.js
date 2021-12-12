const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const acc1 = {
  fname: "Muthu Kumaran",
  monthInfo: {
    month: "December",
    salary: "50000",
    categories: ["food", "Petrol", "EMI", "others"],
    expenses: [
      {
        category: "Food",
        date: "12/12/2021",
        amount: "500",
      },
      {
        category: "Petrol",
        date: "12/12/2021",
        amount: "100",
      },
      {
        category: "EMI",
        date: "12/12/2021",
        amount: "2000",
      },
    ],
  },
};
const expSum = document.querySelector(".main-1-current-month");
const addAmountLabel = document.querySelector(".amt");
const addbtn = document.querySelector(".main-1-add");
const netIncome = document.querySelector(".main-1-net-income");
const containerExpense = document.querySelector(".main-2-content");
const greet = document.querySelector(".greet");

greet.textContent += `${acc1.fname}`;
expSum.textContent = `Expense summary of ${
  monthNames[new Date().getMonth()]
} Month`;

addAmountLabel.textContent = `Add your ${
  monthNames[new Date().getMonth()]
} month Net Amount`;

if (acc1.monthInfo.month === "" && acc1.monthInfo.salary === "") {
  document.querySelector(".main-1-net-income").classList.add("hide");
} else {
  document.querySelector(".main-1-form-amount").classList.add("hide");
  netIncome.textContent = `${
    monthNames[new Date().getMonth()]
  } Month Net Amount is ${acc1.monthInfo.salary}`;
}

addbtn.addEventListener("click", function () {
  acc1.monthInfo.month = monthNames[new Date().getMonth()];
  acc1.monthInfo.salary = document.getElementById("amount").value;
  document.querySelector(".main-1-form-amount").classList.add("hide");
  document.querySelector(".main-1-net-income").classList.remove("hide");
  netIncome.textContent = `${
    monthNames[new Date().getMonth()]
  } Month Net Income is ${acc1.monthInfo.salary}`;
});

const displayExpense = function () {
  acc1.monthInfo.expenses.forEach(function (mov, i) {
    const expenserow = `
    <div class="main-2-contentRow">
      <p class="main-2-category">${acc1.monthInfo.expenses[i].category}</p>
      <p class="main-2-date">${acc1.monthInfo.expenses[i].date}</p>
      <p class="main-2-amount">${acc1.monthInfo.expenses[i].amount}</p>
      <p class="main-2-options">
<svg xmlns="http://www.w3.org/2000/svg" class="main-2-options-edit" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" class="main-2-options-delete" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
</svg>
      </p>
    </div>
    `;
    containerExpense.insertAdjacentHTML("afterbegin", expenserow);
  });
};
displayExpense();
