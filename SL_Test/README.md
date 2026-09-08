# Swag Labs — QA Automation

End-to-end test automation project for the [Swag Labs](https://www.saucedemo.com/) e-commerce application, developed using Playwright and TypeScript.

## About the Project

This project was created to practise UI test automation and apply QA fundamentals to a realistic e-commerce application.

The tests focus on the authentication and shopping cart flows, covering common user actions and validating the expected application behaviour.

## Scope

The automated tests cover:

* Login with valid credentials
* Login with invalid credentials
* Adding a product to the shopping cart
* Removing a product from the shopping cart

The project does not currently cover checkout, payment processing, or API testing.

## Technologies

* **Playwright** — End-to-end test automation
* **TypeScript** — Programming language
* **Node.js** — Runtime environment
* **Git / GitHub** — project hosting

## Project Structure

```text
SL_TEST/
├── tests/
│   └── SLMain.spec.ts
├── .gitignore
├── playwright.config.ts
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```


## Installation

Clone the repository and install the dependencies:

```bash
npm install
```

Install the Playwright browsers if necessary:

```bash
npx playwright install
```

## Running the Tests

Run all tests:

```bash
npx playwright test
```

Run the tests in headed mode:

```bash
npx playwright test --headed
```

Open the HTML test report:

```bash
npx playwright show-report
```

## Test Results

The test results are based on the latest local execution.

| Metric      | Result        |
| ----------- | ------------- |
| Total tests | 4 |
| Passed      | 4 |
| Failed      | 0 |
| Skipped     | 0 |


## What I Learned

Through this project, I practised:

* Writing end-to-end tests with Playwright
* Using TypeScript for test automation
* Creating reliable locators and assertions
* Organising test files and test data
* Running tests and analysing the HTML report
* Understanding the relationship between test scenarios and automated test cases

## Future Improvements

Possible future improvements include:

* Expanding product and shopping cart coverage
* Adding checkout-related scenarios
* Introducing Page Object Model where it improves maintainability
* Adding cross-browser test execution
* Integrating the tests into a CI/CD pipeline

## Author

**Isis Fukuda**

This project was created as part of my QA Automation learning journey.
