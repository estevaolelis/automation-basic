# E2E Automation with Playwright

End-to-End (E2E) test suite built with Playwright and TypeScript to practice web automation with a focus on quality, resilience, and maintainability.

## Table of Contents

- About the project
- Technologies
- Project structure
- Prerequisites
- Installation
- Environment setup
- Running the tests
- Applied best practices
- Author

## About the project

This repository contains automation scenarios for The Internet Herokuapp website, covering common flows such as:

- basic authentication
- element validation
- add and remove components
- broken images verification

The main goal is to improve automation skills with a simple and scalable foundation.

## Technologies

- Playwright
- TypeScript
- Node.js
- dotenv

## Project structure

```text
automation-basic/
|- the-internet/                # test files (.spec.ts)
|- playwright.config.ts         # global Playwright configuration
|- package.json
|- playwright-report/           # HTML report generated after execution
|- test-results/                # execution artifacts and traces
```

## Prerequisites

- Node.js 18 or higher
- npm

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/automation-basic.git
cd automation-basic
```

2. Install dependencies:

```bash
npm install
```

3. Install Playwright browsers:

```bash
npx playwright install
```

## Environment setup

Create a .env file in the project root with:

```env
BASE_URL=https://the-internet.herokuapp.com
USER_AUTH=your_username
PASS_AUTH=your_password
```

Notes:

- BASE_URL is used as the base URL for tests
- USER_AUTH and PASS_AUTH are used in basic authentication scenarios

## Running the tests

Run the full suite:

```bash
npx playwright test
```

Run in UI mode:

```bash
npx playwright test --ui
```

Run in headed mode (visible browser):

```bash
npx playwright test --headed
```

Open the latest HTML report:

```bash
npx playwright show-report
```

## Applied best practices

- using more robust selectors to reduce flakiness
- state validations with Playwright matchers
- centralized configuration in playwright.config.ts
- sensitive variables isolated through .env
- trace enabled on first retry to simplify debugging

## Author

Estevao Lelis Florentino de Paula

- LinkedIn: https://linkedin.com/in/your-profile
- GitHub: https://github.com/your-username