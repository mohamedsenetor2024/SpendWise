
// ==================================
// SpendWise Budget Tracker
// JavaScript Foundation - Week 5
// ==================================

// 1. Store Application Data

let budgetExpenses = 0;
let totalExpenses = 0;

let remainingBudget = 0;

let expenses = [];

// 2. Connect HTML Elements

let expenseName = document.getElementById("expense-name");
let expenseAmount = document.getElementById("amount");
let expenseCategory = document.getElementById("category");
let expenseDate = document.getElementById("date");

let addButton = document.getElementById("add-expense-btn");
let expenseTable = document.getElementById("expense-list");

// New budget elements
let budgetInput = document.getElementById("budget-amount");
let setBudgetButton = document.getElementById("set-budget-btn");

// 3. Update Budget Function

function updateBudget() {

    console.log("Total Budget: $ " + budgetExpenses);
    console.log("Total Expenses: $ " + totalExpenses);
    console.log("Remaining Budget: $ " + remainingBudget);

    document.getElementById("total-budget").textContent =
    "$ " + budgetExpenses;

    document.getElementById("total-expenses").textContent =
        "$ " + totalExpenses;

    document.getElementById("remaining-budget").textContent =
        "$ " + remainingBudget;

    document.getElementById("total-savings").textContent = "$ 0";
}

// 4. Process Expenses Using a Loop

function calculateTotalExpenses() {

    let total = 0;

    for (let i = 0; i < expenses.length; i++) {

        total += expenses[i].amount;

    }

    console.log("Total Expenses Using Loop: $ " + total);

    return total;
}

// 5. Budget Decision Making

function checkBudget() {
    let feedback = document.getElementById("budget-feedback");

    if (remainingBudget > 0) {
        feedback.textContent = "Good job! You are within your budget.";
    } 
    else if (remainingBudget === 0 && budgetExpenses > 0) {
        feedback.textContent = "Good job! You set a budget.";
    } 
    else if (remainingBudget < 0) {
        feedback.textContent = "Warning! You have exceeded your budget.";
    } 
    else {
        feedback.textContent = "Please set your budget first.";
    }
}

// 6. Create Add Expense Function

function addNewExpense() {

    let addExpenses = expenseName.value.trim();
    let addAmount = Number(expenseAmount.value);
    let chooseCategory = expenseCategory.value;
    let addDate = expenseDate.value;

        if (budgetExpenses <= 0) {
        alert("Please set your budget first.");
        return;
    }



// 7. Validate Inputs

    if (addExpenses === "") {
        alert("Please enter an expense name.");
        return;
    }
   
    if (expenseAmount.value === "" || !Number.isFinite(addAmount) || addAmount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    if (chooseCategory === "") {
        alert("Please select an expense category.");
        return;
    }

    if (addDate === "") {
        alert("Please select an expense date.");
        return;
    }

// 8. Store Expense Information

    let newExpense = {
        name: addExpenses,
        amount: addAmount,
        category: chooseCategory,
        date: addDate
    };

    expenses.push(newExpense);
   
   

// 9. Add Expense to Table

    let row = expenseTable.insertRow();

    row.insertCell(0).textContent = addExpenses;
    row.insertCell(1).textContent = "$ " + addAmount;
    row.insertCell(2).textContent = chooseCategory;
    row.insertCell(3).textContent = addDate;

// 10. Create Delete Button

    let deleteCell = row.insertCell(4);
    let deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function () {

        totalExpenses -= addAmount;
        remainingBudget = budgetExpenses - totalExpenses;

        expenses = expenses.filter(function(item) {
            return item !== newExpense;
        });

        row.remove();

        updateBudget();
        checkBudget();

        console.log("Expense deleted successfully!");
    });

    deleteCell.appendChild(deleteButton);

// 11. Update Calculations

    totalExpenses = calculateTotalExpenses();
    remainingBudget = budgetExpenses - totalExpenses;

     updateBudget();
     checkBudget();

// 12. Display Expense Information

    console.log("Expenses Name: " + addExpenses);
    console.log("Expenses Amount: $ " + addAmount);
    console.log("Expenses Category: " + chooseCategory);
    console.log("Expenses Date: " + addDate);

    console.log("Add Expense button clicked successfully!");

// 13. Clear Input Fields

    expenseName.value = "";
    expenseAmount.value = "";
    expenseCategory.value = "";
    expenseDate.value = "";
}
// 14. Set Budget Event

setBudgetButton.addEventListener("click", function() {

    let enteredBudget = Number(budgetInput.value);

    if (budgetInput.value === "" || !Number.isFinite(enteredBudget) || enteredBudget <= 0) {
        alert("Please enter a valid budget.");
        return;
    }

      budgetExpenses = enteredBudget;

// Keep remaining budget at zero until an expense is added
     remainingBudget = 0;

     updateBudget();
     checkBudget();

    budgetInput.value = "";
});




// 15. Display Initial Dashboard Information

updateBudget();

// 16. Add Expense Form Submission Event

let expenseForm = document.getElementById("expense-entry-form");

expenseForm.addEventListener("submit", function(event) {

    event.preventDefault();

    addNewExpense();

});