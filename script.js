


// ==================================
// SpendWise Budget Tracker
// JavaScript Foundation - Week 5
// ==================================

// 1. Store Application Data

let budgetExpenses = Number(prompt("Enter your budget expenses: "));
let expenses = Number(prompt("Enter your expenses: "));


// 2. Calculate Remaining Budget
let remainingBudget = budgetExpenses - expenses;


// 3. Display Budget Information

console.log("Total Budget: $ " + budgetExpenses);
console.log("Total Expenses: $ " + expenses);
console.log("Remaining Budget: $ " + remainingBudget);


// 4. Connect HTML Form to JavaScript

let expenseName = document.getElementById("expense-name");
let expenseAmount = document.getElementById("amount");
let expenseCategory = document.getElementById("category");
let addButton = document.querySelector("#expense-form button");


// 5. Create a Function

function addNewExpense() {

    let addExpenses = expenseName.value;
    let addAmount = Number(expenseAmount.value);
    let chooseCategory = expenseCategory.value;

// 6. Calculate Updated Budget

remainingBudget = remainingBudget - addAmount;


// 7. Display Expense Information
console.log("Expenses Name: " + addExpenses);
console.log("Expenses Amount: $ " + addAmount);
console.log("Expenses Category: " + chooseCategory); 
console.log("Updated Remaining Budget: $ " + remainingBudget);

}


// 8. Add Button Event

addButton.addEventListener("click", addNewExpense);

             