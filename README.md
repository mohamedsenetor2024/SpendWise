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