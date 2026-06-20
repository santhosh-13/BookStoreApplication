# Playwright Automation Framework

## Project Overview

This project contains UI and API automation test scenarios implemented using **Playwright with TypeScript** following the **Page Object Model (POM)** design pattern.

The framework includes end-to-end UI automation, API validation, reusable page classes, test data management, environment-based execution, reporting, and Jenkins CI integration.

---

## Features

### UI Automation

* End-to-end web application testing
* Cross-browser testing (Chromium, Firefox, WebKit)
* Page Object Model (POM) implementation
* Reusable page methods and utilities
* Data-driven testing using JSON files
* Parallel test execution
* Environment-based configuration
* Robust locator strategies for reliable execution

### API Automation

* REST API testing using Playwright Request Context
* GET, POST, PUT, PATCH, DELETE request validation
* Response status code validation
* Authentication handling
* JSON schema validation
* Request and response assertions
* Data extraction and chaining between APIs

### CI/CD Integration

* Jenkins pipeline integration
* Automated test execution
* Continuous regression testing
* Automated report generation
* Faster feedback for development teams

---

## Tech Stack

* Playwright
* TypeScript
* Node.js
* Jenkins
* Git & GitHub
* Dotenv (Environment Variable Management)

---

## Framework Design Pattern

This framework follows the **Page Object Model (POM)** approach for better maintainability, scalability, and reusability.

* **Pages** → Reusable page classes
* **Tests** → Test execution logic
* **Fixtures** → Shared setup and teardown
* **Utilities** → Common reusable functions
* **Test Data** → JSON-based test data management
* **Environment Variables** → Secure configuration using `.env`

---

## Project Structure

```txt
project-root/
│── tests/
│   ├── ui/
│   ├── api/
│
│── pages/
│   ├── LoginPage.ts
│   ├── DashboardPage.ts
│   ├── BasePage.ts
│
│── fixtures/
│
│── utils/
│
│── test-data/
│   ├── data.json
│
│── reports/
│
│── .env
│── .gitignore
│── package.json
│── playwright.config.ts
│── Jenkinsfile
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
BASE_URL=https://your-application-url.com
USERNAME=testuser
PASSWORD=testpassword
API_BASE_URL=https://api.example.com
```

---

## Execute Tests

Run all tests:

```bash
npx playwright test
```

Run only UI tests:

```bash
npx playwright test tests/ui
```

Run only API tests:

```bash
npx playwright test tests/api
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Run tests in a specific browser:

```bash
npx playwright test --project=chromium
```

---

## Jenkins Integration

The framework supports automated execution through Jenkins.

### Jenkins Pipeline Steps

1. Pull latest code from GitHub
2. Install project dependencies
3. Install Playwright browsers
4. Execute test suite
5. Generate reports
6. Publish results

### Jenkins Execution Commands

```bash
npm install
npx playwright install
npx playwright test
```

---

## Test Report

Generate and open Playwright HTML Report:

```bash
npx playwright show-report
```

---

## Reporting & Debugging

* Playwright HTML Reports
* Trace Viewer
* Screenshot capture on failures
* Video recording support
* Detailed execution logs

View traces:

```bash
npx playwright show-trace trace.zip
```

---

## Framework Highlights

* UI & API Automation in a single framework
* Page Object Model (POM)
* Reusable utilities and fixtures
* Environment-based execution
* Data-driven testing
* Cross-browser testing
* Parallel execution
* Jenkins CI integration
* Scalable and maintainable architecture

---

