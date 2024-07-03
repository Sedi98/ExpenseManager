let balance = 0;
let totalExpense = 0;
let totalEarning = 0;
let earningsListDiv = document.querySelector(".earningsList");
let expensesListDiv = document.querySelector(".expenseList");
let expenseList = JSON.parse(localStorage.getItem("expenseList")) || [];
let earningList = JSON.parse(localStorage.getItem("earningList")) || [];


let typeText = document.querySelector(".typeText");


let inputSection = document.querySelector(".inputSection");


let isexpense = true;

// buttons
const addExpenseBtn = document.querySelector(".addExpense");
const addEarningBtn = document.querySelector(".addEarning");
const saveBtn = document.querySelector(".addBtn");

// inputs
const numberInput = document.querySelector("#numberInput");
