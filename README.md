# SpendWise Budget Tracker

## Week 2 Assignment

SpendWise is a simple Budget Tracker webpage built using **HTML and CSS**. This project continues the Budget Tracker created in Week 1.

## What I Built

### 1. Expense Table

I replaced the "No expenses yet" placeholder with an HTML expense table.

The table includes:

* Name
* Amount
* Category
* Date

The table uses:

* `<table>`
* `<thead>`
* `<tbody>`
* `<tr>`
* `<th>`
* `<td>`

I also added five sample expense records and styled the table with borders, padding, a colored header, and alternating row colors.

### 2. Add Expense Form

I upgraded the Add Expense section by adding a proper `<form>` element.

The form includes:

* Expense Name
* Expense Amount
* Expense Category
* Expense Date
* Add Expense button

The category is a dropdown containing:

* Food
* Transport
* Rent
* Entertainment
* Other

The form inputs have clear IDs:

* `expense-name`
* `expense-amount`
* `expense-category`
* `expense-date`

The button uses:

```html
<button type="button">Add Expense</button>
```

### 3. Multimedia Content

I added multimedia content to the webpage.

This includes:

* A logo/icon using the `<img>` element.
* A YouTube video using the `<iframe>` element.

The image includes `src`, `alt`, and `width` attributes.

The iframe includes `width`, `height`, `title`, and `frameborder` attributes.

### 4. Interactive Elements

I added a collapsible **"How to use this tracker"** section using:

```html
<details>
    <summary>How to use this tracker</summary>
</details>
```

I also added:

* A hover effect to the expense table rows.
* `cursor: pointer` to the Add Expense button.

### 5. Advanced CSS Selectors

I applied advanced CSS selectors from the More CSS Selectors lesson.

The selectors used include:

* Descendant selector
* Direct child selector
* Position selector
* Negation pseudo-class
* Focus pseudo-class
* Hover pseudo-class

Examples include:

```css
#expenses td
```

```css
#expense-form > form
```

```css
tbody tr:nth-child(even)
```

```css
input:not([type="date"])
```

```css
input:focus
```

```css
tbody tr:hover
```

## Technologies Used

* HTML5
* CSS3

## Project Files

```text
SpendWise/
├── index.html
├── style.css
└── README.md
```

## Author

**Mohamed Muhumed Rage**

PLP Software Engineering
Week 2 Assignment


# SpendWise Budget Tracker

## Week 3 Assignment – Visual Design Challenge (CSS)

### Project Description

SpendWise Budget Tracker is a simple web application created using **HTML** and **CSS**. The project helps users organize and track their daily expenses by entering an expense name, amount, category, and date. This Week 3 assignment focuses on improving the visual appearance of the application using CSS without adding new functionality.

---

## Features

- Expense input form for adding expenses.
- Expense table displaying sample expense records.
- Budgeting illustration image.
- Embedded budgeting video from YouTube.
- "How to Use" instructions section.
- Responsive design for smaller screens.

---

## Week 3 Visual Design Improvements

### 1. Intentional Color Palette

A consistent green-themed color palette was used throughout the application.

- Light gray page background.
- White content cards.
- Green headings and buttons.
- Green table header.
- Light green form background.
- Soft green alternating table rows.

### 2. Typography

Google Fonts were used to improve readability and visual hierarchy.

- **Poppins** is used for headings, buttons, and table headers.
- **Inter** is used for body text, labels, form inputs, and table content.

### 3. Expense Table and Form Styling

The Add Expense form and Expense Table were styled with:

- Padding inside inputs and table cells.
- Rounded corners.
- Borders for structure.
- Styled table header.
- Alternating row colors.
- Button hover effect.
- Focus effect for form fields.

### 4. CSS Box Model

The CSS Box Model was applied to create a clean layout.

- **Margin** separates sections.
- **Padding** creates space inside cards.
- **Borders** define sections.
- **Border-radius** gives sections a modern appearance.

The following sections appear as separate visual cards:

- Page Heading
- Add Expense Form
- Your Expenses Section
- Expense Table
- Budgeting Video
- Instructions Section

---

## Technologies Used

- HTML5
- CSS3
- Google Fonts (Poppins and Inter)

---

## Project Files

```
SpendWise/
│── index.html
│── style.css
│── README.md
│── istockphoto-2202419565-612x612.jpg
```

### File Description

| File | Purpose |
|------|---------|
| **index.html** | Contains the structure of the Budget Tracker webpage. |
| **style.css** | Contains all visual styling including colors, typography, table styling, form styling, and CSS Box Model. |
| **README.md** | Explains the project, its features, and the Week 3 visual design improvements. |
| **istockphoto-2202419565-612x612.jpg** | Budget Tracker illustration displayed on the page. |

---

## How to Run the Project

1. Download or clone the repository.
2. Open the **SpendWise** project folder.
3. Open **index.html** in any web browser.
4. View the styled Budget Tracker interface.

---

# SpendWise Dashboard Shell

A modern, responsive financial dashboard layout built using **CSS Grid** and **Flexbox** as the foundation for the SpendWise capstone project.

## 🚀 Overview

SpendWise is designed to give users a clean, organized view of their financial categories and information at a glance. This week's milestone focuses entirely on the visual layout, structural integrity, and responsive design using modern CSS techniques without heavy reliance on JavaScript or frameworks.

---

## ✨ Features & What Each Part Does

### 1. Overall Page Layout (CSS Grid)
* **What it does:** Organizes the main dashboard container into a structured grid layout (typically dividing space into a fixed/flexible sidebar and a main content area).
* **Implementation:** Uses CSS Grid (`display: grid`) to handle the macro-layout of the page cleanly, avoiding outdated float or absolute positioning techniques.

### 2. Component Structures (Flexbox)
* **What it does:** Aligns and spaces internal elements within smaller components.
* **Implementation:** Flexbox (`display: flex`) is used inside the **Header**, **Sidebar Navigation items**, and **Category Cards** to distribute items, handle vertical centering, and manage gaps dynamically.

### 3. Financial Category Cards
* **What it does:** Displays realistic static financial information across at least six core categories:
  * Food
  * Transport
  * Rent
  * Entertainment
  * Savings
  * Utilities

### 4. Design System & Theming (CSS Custom Properties)
* **What it does:** Centralizes colors and styling tokens on the `:root` selector for maintainability and consistency.
* **Variables included:**
  * `--brand-color`: Primary brand identity color.
  * `--accent-color`: Highlight and action color.
  * `--surface-color`: Card and container background backgrounds.
  * `--text-primary`: Main headings and body text color.
  * `--text-secondary`: Subtitles and muted text color.

### 5. Responsive Design
* **What it does:** Adapts the user interface smoothly across different device sizes.
* **Implementation:** A media query at the `768px` breakpoint collapses the multi-column desktop layout into a clean, readable single-column view optimized for mobile devices and DevTools Device Toolbar simulation.

### 6. Card Micro-Interactions
* **What it does:** Enhances user experience by providing visual feedback when interacting with dashboard cards.
* **Implementation:** Smooth transitions (`transition: transform 250ms ease, box-shadow 250ms ease`) apply subtle lifting effects and shadow changes on both `:hover` and keyboard `:focus` states.

### 7. Stretch Goal: Dark Theme
* **What it does:** Automatically switches color variables based on system preferences.
* **Implementation:** Uses `@media (prefers-color-scheme: dark)` to override `:root` variables, providing an native dark mode experience.

---

## 📂 File Structure

```text
spendwise-dashboard/
│
├── index.html       # Main HTML markup containing the semantic dashboard structure
├── style.css        # Stylesheet containing Grid, Flexbox, variables, and responsive queries
└── README.md        # Project documentation




## Author

**Mohamed Muhumed Rage**

PLP Software Engineering – Week 4 Assignment

# SpendWise Budget Tracker
## Week 5: Build the JavaScript Foundation for SpendWise

### Project Overview
SpendWise is a Budget Tracker application designed to help users manage their budgets, monitor expenses, and calculate their remaining balances.

During Week 5, the project was enhanced by introducing JavaScript to transform the previously static dashboard into an application that can collect user input, process budgeting information, perform calculations, and display results in the browser console.

### Objectives
The main objectives of this week's exercise were to:

- Set up and link JavaScript to the existing SpendWise project.
- Understand JavaScript variables and data types.
- Collect user input using JavaScript prompts.
- Perform budget and expense calculations.
- Create reusable JavaScript functions.
- Display calculated results using the browser console.
- Connect HTML form elements to JavaScript.

### Technologies Used
- HTML5 – Application structure.
- CSS3 – Styling and dashboard layout.
- JavaScript – Application logic and budget calculations.
- Visual Studio Code – Code editor.
- Google Chrome – Browser testing.
- Git and GitHub – Version control and project hosting.

### Project Structure

```text
SpendWise/
│
├── index.html
├── style.css
├── script.js
├── README.md
└── istockphoto-2202419565-612x612.jpg
```


<!-- //WEEK 5 -->

# SpendWise Budget Tracker

## Week 5: Build the JavaScript Foundation for SpendWise

### Week 5 Implementation

#### 1. Set Up and Link JavaScript

Created an external JavaScript file named `script.js` and connected it to the existing `index.html` file.

The following script tag was added immediately before the closing `</body>` tag:

```html
<script src="script.js"></script>
```

This enables the browser to load and execute the JavaScript code when the HTML document is opened.

#### 2. Store Application Data

Used JavaScript variables to store important budgeting information:

- `budgetExpenses` – Stores the user's total available budget.
- `expenses` – Stores the user's total expenses.
- `remainingBudget` – Stores the calculated remaining budget.

Used `let` to declare variables whose values may change during program execution.

#### 3. Collect User Input

Used the JavaScript `prompt()` function to collect the user's budget and total expenses.

Example:

```javascript
let budgetExpenses = Number(prompt("Enter your budget expenses: "));
let expenses = Number(prompt("Enter your expenses: "));
```

The `Number()` function converts the input values from strings into numbers, allowing mathematical calculations.

The HTML expense form also collects:

- Expense name.
- Expense amount.
- Expense category.

#### 4. Perform Budget Calculations

Implemented mathematical operations to calculate the remaining budget by subtracting total expenses from the available budget.

**Formula:**

```javascript
remainingBudget = budgetExpenses - expenses;
```

This calculation helps users determine how much money remains after expenses.

#### 5. Create Reusable Functions

Created a reusable JavaScript function called `addNewExpense()` to organize the expense-processing logic.

The function:

- Collects expense details from the HTML form.
- Processes the expense amount.
- Updates the remaining budget.
- Displays the updated budgeting information.

Using functions makes the code reusable, organized, and easier to maintain.

#### 6. Display Results Using Console Output

Used `console.log()` to display clearly labeled budgeting information in the browser's developer console.

The information includes:

- Total Budget.
- Total Expenses.
- Remaining Budget.
- Expense Name.
- Expense Amount.
- Expense Category.
- Updated Remaining Budget.

This makes it easier to test and debug the application's JavaScript functionality.

#### 7. Connect HTML Elements to JavaScript Using the DOM

Used Document Object Model (DOM) methods to access and interact with HTML elements.

Methods implemented:

```javascript
document.getElementById();
document.querySelector();
```

These methods allow JavaScript to locate HTML elements such as input fields and buttons.

#### 8. Implement Event Handling

Connected the Add Expense button to the JavaScript function using the `addEventListener()` method.

Example:

```javascript
addButton.addEventListener("click", addNewExpense);
```

This event listener detects when a user clicks the Add Expense button and executes the `addNewExpense()` function.

It allows users to interact with the SpendWise application through the HTML interface.

### Sample Budget Calculation

| Description | Amount |
|---|---:|
| Total Budget | $20,000 |
| Total Expenses | $15,000 |
| Remaining Balance | $5,000 |

### Expected Console Output

```text
Total Budget: $ 20000
Total Expenses: $ 15000
Remaining Budget: $ 5000

Expenses Name: Groceries
Expenses Amount: $ 1000
Expenses Category: Food
Updated Remaining Budget: $ 4000
```

### JavaScript Concepts Learned

By completing Week 5, I gained practical experience in:

1. Declaring and using JavaScript variables.
2. Understanding JavaScript data types.
3. Collecting user input using `prompt()`.
4. Converting input values using `Number()`.
5. Performing mathematical calculations.
6. Creating and calling reusable functions.
7. Accessing HTML elements through the DOM.
8. Implementing event listeners to respond to user interactions.
9. Displaying application results using `console.log()`.
10. Integrating JavaScript with an existing HTML and CSS project.

### Future Improvements

The next development steps for SpendWise include:

- Dynamically adding expenses to the HTML expense table.
- Displaying updated budget information on the dashboard.
- Adding expense validation and error handling.
- Storing expense records using browser Local Storage.
- Developing interactive budget reports and analytics.

### Conclusion

Week 5 marked an important milestone in the development of SpendWise. By introducing JavaScript, the application moved beyond a static dashboard and gained the foundation for processing budgeting information and handling user interactions.

Through this implementation, I strengthened my understanding of JavaScript fundamentals, DOM manipulation, functions, variables, user input, and event handling.

These concepts provide a strong foundation for developing more interactive and dynamic web applications.

---

### Project Information

- **Project:** SpendWise Budget Tracker
- **Module:** Software Engineering
- **Week:** 5 – JavaScript Foundation
- **Developer:** Mohamed
- **Status:** Week 5 Development Completed

# SpendWise Budget Tracker
### Week 6 – Make SpendWise Interactive

## 1. Project Overview

SpendWise is a web-based budget tracking application designed to help users manage their budgets, record daily expenses, monitor spending, and track their remaining balance.

In Week 6, the existing SpendWise project was enhanced with JavaScript functionality to make the application interactive. Users can set a budget, add expenses, delete expense records, and receive feedback based on their budgeting activities.

This project demonstrates how JavaScript can be used to make decisions, manage multiple records, process data, manipulate the DOM, and respond to user interactions.

## 2. Project Objectives

The main objectives of this project are to:

- Apply JavaScript conditional statements to make budgeting decisions.
- Use arrays to store and manage multiple expense records.
- Use loops to process stored expense information.
- Manipulate the DOM to update dashboard information dynamically.
- Implement event listeners to respond to user actions.
- Connect JavaScript functions and webpage elements to create an interactive application.

## 3. Features Implemented

### 3.1 Budget Management
- Enter and set a total budget.
- Display the total budget on the dashboard.
- Validate budget input before accepting it.

### 3.2 Expense Management
- Add new expenses using an input form.
- Record expense names, amounts, categories, and dates.
- Store multiple expenses in a JavaScript array.
- Delete individual expense records.

### 3.3 Budget Calculations
- Calculate total expenses.
- Calculate the remaining budget.
- Recalculate dashboard information when expenses are added or deleted.

### 3.4 Budget Feedback
The application uses conditional statements to provide feedback based on the user's budget situation.

Examples include:
- Notification when the user is within budget.
- Notification when the entire budget has been used.
- Warning when expenses exceed the available budget.
- Prompt to set a budget before adding expenses.

### 3.5 Dynamic Dashboard
JavaScript DOM manipulation is used to update dashboard values and expense records without manually refreshing the webpage.

## 4. JavaScript Concepts Applied

| Requirement | Implementation |
|---|---|
| Decision Making | `if`, `else if`, and `else` statements |
| Multiple Records | Arrays and array methods |
| Processing Data with Loops | `for` loop |
| Dynamic Dashboard | DOM manipulation and `textContent` |
| User Interactions | Event listeners and form submission |
| Connecting Everything | Functions, calculations, events, and dashboard updates |

## 5. Technologies Used

- **HTML5** – Structures the application.
- **CSS3** – Styles the dashboard and user interface.
- **JavaScript** – Handles application logic, calculations, and user interactions.
- **Visual Studio Code** – Code editor.
- **Git and GitHub** – Version control and project hosting.

## 6. Project Structure

```text
SpendWise/
│
├── index.html       # Application structure
├── style.css        # Application styling
├── script.js        # JavaScript functionality
└── README.md        # Project documentation
```

## 7. How to Run the Application

1. Clone or download the SpendWise project repository.
2. Open the project folder in Visual Studio Code.
3. Open the `index.html` file in your browser, or use the Live Server extension.
4. Enter your total budget.
5. Add expenses using the expense form.
6. View your updated dashboard.
7. Delete an expense when necessary.

## 8. Learning Outcomes

Through this project, I gained practical experience in:

- Using JavaScript to implement decision-making logic.
- Managing multiple records using arrays.
- Processing data using loops.
- Selecting and updating HTML elements through DOM manipulation.
- Handling user actions with event listeners.
- Connecting JavaScript functions to create a functional web application.
- Debugging and testing JavaScript functionality.

## 9. Conclusion

The Week 6 development of SpendWise demonstrates how JavaScript transforms a static webpage into an interactive web application.

By implementing decision-making statements, arrays, loops, DOM manipulation, and event listeners, I enhanced the existing SpendWise Budget Tracker to support interactive budget and expense management.

This project represents an important step in developing my practical JavaScript and frontend development skills.

---

**Project:** SpendWise Budget Tracker  
**Module:** JavaScript Foundation – Week 6  
**Assignment:** Make SpendWise Interactive  
**Developer:** Mohamed  
**Status:** Week 6 Implementation Completed




<!-- Week 7 -->
# SpendWise – Budget Tracker

## 1. Project Description

SpendWise is a responsive and interactive budget tracking web application designed to help users manage their personal finances effectively.

The application allows users to set a budget, record daily expenses, organize spending into different categories, monitor total expenses, and calculate their remaining budget.

SpendWise aims to encourage better financial management by providing a simple and user-friendly interface for tracking income, expenses, and savings.

## 2. Technologies Used

The project was developed using the following technologies:

- **HTML5** – Provides the structure of the application.
- **CSS3** – Handles styling, layout, responsiveness, and visual presentation.
- **JavaScript** – Implements application functionality, calculations, conditional statements, arrays, DOM manipulation, and event handling.
- **Git & GitHub** – Used for version control and project hosting.
- **Netlify** – Used for website hosting and continuous deployment.

## 3. Project Features

- Set and manage a personal budget.
- Add and record expenses.
- Organize expenses into different categories:
  - Food
  - Transport
  - Rent
  - Entertainment
  - Other
- Calculate total expenses automatically.
- Monitor the remaining budget.
- Display expense information dynamically.
- Provide interactive feedback based on budgeting conditions.
- Responsive user interface for different screen sizes.

## 4. GitHub Repository Information

The SpendWise project is maintained in a public GitHub repository.

- **Repository Name:** SpendWise
- **GitHub Username:** mohamedsenetor2024
- **Repository URL:** https://github.com/mohamedsenetor2024/SpendWise

GitHub was used to store the complete project source code, manage changes, and maintain version history throughout development.

## 5. Live Website

The SpendWise application has been successfully deployed and is accessible online through Netlify.

**Live Website:** https://spendwiseexpense-tracker.netlify.app/

## 6. Deployment Process Summary

The application was successfully deployed using GitHub and Netlify.

The deployment process involved the following steps:

1. **Deployment Readiness:** Reviewed the project structure and ensured that all HTML, CSS, JavaScript, and other required files were properly organized.
2. **GitHub Repository:** Created and configured a public GitHub repository and pushed the complete SpendWise project files.
3. **Netlify Deployment:** Connected the GitHub repository to Netlify and deployed the application.
4. **Custom Site Name:** Changed the default Netlify subdomain to `spendwiseexpense-tracker.netlify.app`.
5. **Continuous Deployment:** Made a visible update to the application, committed and pushed the changes to GitHub, and verified that Netlify automatically deployed the latest version.
6. **Final Testing:** Tested the live application to confirm that the website, styles, JavaScript functionality, and assets loaded correctly.

## 7. Continuous Deployment Verification

Continuous deployment was successfully tested.

After making a visible change to the SpendWise application, the updated files were pushed to the connected GitHub repository.

Netlify automatically detected the new commit, triggered a deployment, and published the updated version of the website.

This confirmed that the GitHub and Netlify integration was working correctly.

## 8. Challenges Encountered During Deployment

During the development and deployment process, some challenges included:

- Ensuring the project files were properly organized for deployment.
- Configuring the GitHub repository correctly.
- Connecting GitHub to Netlify.
- Configuring the custom Netlify site name.
- Verifying that CSS and JavaScript files loaded correctly on the live website.
- Confirming that automatic deployments worked after pushing updates.

These challenges provided practical experience in troubleshooting and deploying web applications.

## 9. Lessons Learned

Through this assignment, I gained practical knowledge and experience in:

- Preparing web applications for production.
- Creating and managing public GitHub repositories.
- Using Git for version control.
- Deploying websites using Netlify.
- Connecting GitHub repositories to Netlify.
- Configuring custom website domains and subdomains.
- Understanding continuous deployment workflows.
- Testing and verifying live websites.
- Maintaining and updating deployed web applications.

## 10. Conclusion

Completing the SpendWise deployment assignment was an important milestone in my web development journey.

I successfully transformed my local SpendWise project into a live web application accessible through the internet.

This assignment strengthened my understanding of GitHub, Netlify, version control, web hosting, and continuous deployment.

**SpendWise is now live and accessible online!**

---

**Project:** SpendWise – Budget Tracker  
**Developer:** Mohamed  
**Deployment Platform:** Netlify  
**Repository Hosting:** GitHub  
**Status:** Successfully Deployed 🚀