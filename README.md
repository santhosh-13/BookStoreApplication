# QA Automation Assignment – Playwright (TypeScript)

## Project Overview

This project contains UI and API automation test scenarios implemented using **Playwright with TypeScript** following the **Page Object Model (POM)** design pattern.

The assignment includes UI and API automation with validations, reusable page classes, test data management, and secure environment variable handling.

---

## Features

### UI Automation

* Navigate to DemoQA website
* Login using manually created user
* Validate username and logout button
* Search for the book **"Learning JavaScript Design Patterns"**
* Validate search result
* Extract **Title, Author, and Publisher**
* Store book details into a file (`book-details.txt`)
* Logout successfully

### API Automation

Using Reqres API:

* Create a user
* Validate response status code
* Fetch and store `userId`
* Get user details
* Update user name
* Validate updated response

---

## Tech Stack

* Playwright
* TypeScript
* Node.js
* Dotenv (Environment Variable Management)

---

## Framework Design Pattern

This framework follows the **Page Object Model (POM)** approach for better maintainability and reusability.

* **Pages** → Reusable page classes
* **Tests** → Test execution logic
* **Test Data** → JSON-based test data
* **Environment Variables** → API key managed securely using `.env`

---

## Project Structure

```txt
project-root/
│── tests/
│   ├── UItest.spec.ts
│   ├── APItest.spec.ts
│
│── pages/
│   ├── LoginPage.ts
│   ├── BookStorePage.ts
│
│── test-data/
│   ├── data.json
│
│── book-details.txt
│── .env
│── .gitignore
│── package.json
│── playwright.config.ts
│── README.md
```

---

## Installation

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

## Environment Setup

Create a `.env` file in project root and add:

```env
API_KEY=your_reqres_api_key
```

---

## Execute Tests

Run all tests:

```bash
npx playwright test
```

Run only UI tests:

```bash
npx playwright test tests/UItest.spec.ts
```

Run only API tests:

```bash
npx playwright test tests/APItest.spec.ts
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

---

## Test Report

Generate and open Playwright HTML Report:

```bash
npx playwright show-report
```

---

## UI Test Scenario

1. Navigate to DemoQA website
2. Navigate to Book Store Application
3. Login using manually created credentials
4. Validate username and logout button
5. Search for:

   * **Learning JavaScript Design Patterns**
6. Validate search result
7. Extract:

   * Title
   * Author
   * Publisher
8. Save book details into:

   * `book-details.txt`
9. Logout successfully

---

## API Test Scenario

### Create User

* Send POST request
* Validate status code `201`
* Store generated `userId`

### Get User Details

* Send GET request
* Validate response data

### Update User

* Send PUT request
* Update user name
* Validate updated response


---

## Run Report Screenshot

After execution, the Playwright HTML report can be viewed using:

```bash
npx playwright show-report
```

---

