# QA Automation Assignment – Playwright (JavaScript)

## Project Overview

This project contains UI and API automation test scenarios implemented using **Playwright with JavaScript**.

The assignment includes:

### UI Automation

* Navigate to DemoQA website
* Login using manually created user
* Validate username and logout button
* Search for the book **"Learning JavaScript Design Patterns"**
* Validate search result
* Print **Title, Author, and Publisher** into a file
* Logout successfully

### API Automation

Using Reqres API:

* Create a user
* Validate response status code
* Fetch and store `userId`
* Get user details
* Update user name and validate response

---

## Tech Stack

* Playwright
* JavaScript
* Node.js

---

## Project Structure

```txt
project-root/
│── tests/
│   ├── UItest.spec.js
│   ├── APItest.spec.js
│
│── playwright-report/
│── test-results/
│── package.json
│── playwright.config.js
│── README.md
```

---

## Installation

Clone the repository:

```bash
git clone <your-github-repo-link>
```

Navigate to project:

```bash
cd <project-folder-name>
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

## Execute Tests

Run all tests:

```bash
npx playwright test
```

Run only UI tests:

```bash
npx playwright test UItest.spec.js
```

Run only API tests:

```bash
npx playwright test APItest.spec.js
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

1. Navigate to DemoQA
2. Login using manually created credentials
3. Validate username and logout button
4. Search for:

   * **Learning JavaScript Design Patterns**
5. Validate search result
6. Store Title, Author, and Publisher into a file
7. Logout

---

## API Test Scenario

### Create User

* POST request to create user
* Validate status code `201`
* Store generated `userId`

### Get User

* GET user details
* Validate response

### Update User

* PUT request to update user data
* Validate updated name

**Note:** Reqres is a mock API and does not persist dynamically created users. Therefore, an existing user endpoint was used for GET and PUT validations.

---

## Author

Your Name
