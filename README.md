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
