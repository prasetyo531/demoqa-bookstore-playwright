# demoqa-bookstore-playwright
This repository contains UI automation test scripts for **DemoQA Book Store Application** using **Playwright + JavaScript**.

The project implements:
- Page Object Model (POM)
- Data Layer & Helper Layer
- Dynamic username generator
- Scenario-based testing
- ESLint v9 + Prettier
- Video recording of test execution

---

## Project Structure
```
tests/
├─ scenario/
│ ├─ register.test.js
│ ├─ login.test.js
│
├─ pageobjects/
│ ├─ home.page.js
│ ├─ onboarding.page.js
│
├─ data/
│ ├─ register.data.js
│ ├─ login.data.js
│
├─ utils/
│ ├─ register.helper.js
│ ├─ login.helper.js
│ ├─ generator.helper.js
│
└─ fixtures/
│ ├─ setup.page.js

eslint.config.cjs
.prettierrc
package.json
playwright.config.js
```

# Build and Test
TODO: Describe and show how to build your code and run the tests. 
```
1. cd
2. npm install              # check package.json
3. cp .env.example .env
4. npm run test
```

# Test Cases

Below are the functional test cases implemented in this automation project.

---

## **TC-001 — User Registration**

| Field | Description |
|------|-------------|
| **Test Case ID** | TC-001 |
| **Title** | As a guest, I should successfully register |
| **Precondition** | User is on `/login` page |
| **Test Data** | First Name, Last Name, Dynamic Username, Password |
| **Steps** | 1. Navigate to login page<br>2. Click “New User”<br>3. Fill registration form<br>4. Solve CAPTCHA<br>5. Click "Register" |
| **Expected Result** | JavaScript alert appears with message **“User Register Successfully.”** |

---

## **TC-002 — User Login**

| Field | Description |
|------|-------------|
| **Test Case ID** | TC-002 |
| **Title** | As a guest, I should successfully login |
| **Precondition** | A user is already registered |
| **Test Data** | Dynamic Username + Password |
| **Steps** | 1. Navigate to `/login`<br>2. Enter username<br>3. Enter password<br>4. Click “Login” |
| **Expected Result** | User table displays the logged-in username in the book list section |

---

## **TC-003 — View Complete Book List**

| Field | Description |
|------|-------------|
| **Test Case ID** | TC-003 |
| **Title** | As a user, I should be able to view the complete list of books |
| **Precondition** | User is logged in |
| **Test Data** | N/A |
| **Steps** | 1. Navigate to `/books`<br>2. Wait until book table & headers are displayed |
| **Expected Result** | All book table headers (Image, Title, Author, Publisher) and the full book list are visible |

---

## **TC-004 — Search Book by Keyword**

| Field | Description |
|------|-------------|
| **Test Case ID** | TC-004 |
| **Title** | As a user, I should be able to search for a book and see matching results |
| **Precondition** | User is logged in |
| **Test Data** | Search term: `"Git Pocket Guide"` |
| **Steps** | 1. Navigate to `/books`<br>2. Type search keyword<br>3. Click search icon<br>4. Wait for result row to be displayed |
| **Expected Result** | A row containing **“Git Pocket Guide”** appears in the table |

---