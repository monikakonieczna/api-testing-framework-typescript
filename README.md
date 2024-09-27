<h1>
  Practice api test automation with SuperTest, Typescript & Jest on <a href="https://rickandmortyapi.com/">The Rick and Morty API
</a>
</h1>

> **Note**
>
> +  **<a href="https://rickandmortyapi.com/">The Rick and Morty API
</a>** ia REST(ish) and GraphQL API based on the television show Rick and Morty. You will have access to about hundreds of characters, images, locations and episodes. The Rick and Morty API is filled with canonical information as seen on the TV show.
>

## Configuration
This project uses TypeScript and Jest for testing. The tsconfig.json and jest.config.ts files are included in the root directory.

- <a href="https://jestjs.io/" style="color:green;">Jest</a>
- <a href="https://www.typescriptlang.org/" style="color:green;">TypeScript</a>
- <a href="https://www.npmjs.com/package/supertest" style="color:green;">SuperTest</a>
- <a href="https://chancejs.com/" style="color:green;">Chance</a>

This tests are purely for Jest, TS & SuperTest practice.

### Using Chance for Fake Data Generation
This project uses the Chance library to generate random data for testing purposes. Chance is a minimalist JavaScript library that provides a wide range of functions to create random data, such as names, addresses, phone numbers, and more. It's particularly useful in testing to create realistic but non-deterministic test data.
#### Why Use Chance?
- **Random Data for Testing** Chance helps to create random data dynamically, which can be used to test various edge cases in your API tests.
- **Better Coverage** By generating diverse sets of input data, Chance can help uncover bugs or issues that might not be found with static test data.
- **Readability and Maintainability** Using Chance makes your tests cleaner by abstracting away the creation of mock data.


### Testing with Jest
This project uses Jest, a popular JavaScript testing framework, to write and run tests for the API. Jest is well-known for its simplicity, powerful features, and ease of use, making it a great choice for testing JavaScript and TypeScript applications.
#### Why Use Jest?
- **Easy to Use** Jest is designed to be simple and straightforward, with an easy setup and intuitive API.
- **Built-in Features** Jest comes with a lot of features out-of-the-box, such as test runners, assertion libraries, mocking capabilities, and code coverage reports.
- **Great for API Testing** Jest, combined with tools like supertest, provides a comprehensive framework for writing and executing API tests.
- <a href="https://jestjs.io/docs/getting-started" style="color:green;">Jest Documentation</a>
- <a href="https://jestjs.io/docs/cli" style="color:green;">Jest CLI Options</a>

### API Testing with Supertest
This project uses Supertest to test the API endpoints. Supertest is a popular library for testing HTTP servers in Node.js, and it works seamlessly with testing frameworks like Jest to perform end-to-end HTTP testing.
#### Why Use Supertest?
- **Simplifies API Testing** Supertest provides an intuitive API for making HTTP requests (like GET, POST, PUT, DELETE) to your application's endpoints, making it easier to test your APIs.
- **Integrates with Jest** Supertest works well with Jest, allowing you to write expressive tests for your HTTP endpoints directly within your Jest test suite.
- **Supports Promises** Supertest supports promises, which allows you to write tests in an asynchronous manner, handling asynchronous HTTP requests and responses cleanly.

## Getting Started

## Prerequisites
This guide will help you set up the project and run the tests locally.
- Node.js (v18.x or higher recommended)
- npm (comes with Node.js)

## Setup Instructions
1. Clone the repository
```
git clone https://github.com/monikakonieczna/api-testing-framework-typescript.git
cd api-testing-framework-typescript
```
2. Install dependencies
```
npm install
```
3. Run tests
To run all tests:
```
npm test
```
To run specific group of tests, like sanity tests:
```
npm run test:sanity
```

## Project Structure
- .github/workflows/: GitHub Actions workflow configurations
- src/helpers/: Helper functions and utilities used throughout the project.
- src/interfaces/: TypeScript interfaces for typing and structure definitions.
- src/test_data/: Sample data for tests.
- src/tests/: Contains all test files.
- src/setupTests.ts: A setup file for Jest, which runs before each test to load environment variables from .env file.
- jest.config.ts: Jest configuration file for test runner settings.
- tsconfig.json: TypeScript configuration file that defines how the TypeScript compiler should behave.
- .gitignore: This file specifies which files and directories should be ignored by Git.
- package.json:  This is the core file for any Node.js project. It contains metadata about the project, including dependencies, scripts, and versioning.

## Third-Party Libraries
### Jest Runner Groups
jest-runner-groups is a Jest plugin that adds tagging functionality to organize and run groups of tests based on custom tags. This is particularly useful for running specific subsets of tests or organizing tests by category.
#### Usage
To properly tag your tests, you need to add a docblock with the @group tag to every test file you have. For example, your test should look like the following to belong to the api/character/single_character group:
```
/**
 * Tests - GET Single Character by adding the id as a parameter
 * @group single_character
 */
describe('Rick and Morty API Tests - Get One Character', () => {
  it('should fetch a single_character by ID', async () => {
    const response = await makeRequest('get', `${BASE_URL}/character/1`);
    assertStatusCode(response, 200);
    validateCharacter(response.body);
  });
});
```
Your tests may have multiple groups per file.
#### Run groups of tests
I’ve set up several custom npm scripts in package.json to facilitate running different groups of tests. These scripts utilize jest-runner-groups to execute specific subsets of tests based on their assigned groups.
The following scripts are configured to run tests based on different groups:
- test:single_character: Runs only the tests tagged as "single_character".
- test:all_characters: Runs only the tests tagged as "all_characters".
- test:multiple_characters: Runs only the tests tagged as "multiple_characters".
- test:filter_characters: Runs only the tests tagged as "filter_characters".
- test:all: Runs all tests in the suite.

### Parametrize Tests with Jest
When writing api tests, it is common to have multiple test cases that run the same logic with different inputs and expected outputs. Jest provides a convenient way to handle this by allowing parameterized tests. This technique allows you to define a single test structure and run it multiple times with different values, reducing redundancy and improving maintainability.
#### How to Parametrize Tests in Jest
In Jest, you can use the test.each or describe.each functions to define parameterized tests. These functions allow you to specify a table of inputs and expected results that the test framework will loop over, executing the test for each case.

Example of describe.each

- describe.each groups related test cases that share common input data
- Each test case within the describe block runs with the provided parameters

```
describe.each([
  [99999, 404],
  [0, 404],
  [-1, 404],
  [1.5, 404],
])(
  "Rick and Morty API Tests - Get One Character - Not Existing Character ID",
  (id, statusCode) => {
    it("Verifies that the API handle invalid character ID correctly", async () => {
      const response = await makeRequest("get", `${BASE_URL}/character/${id}`);
      assertStatusCode(response, statusCode);
      validateNotFoundErrorMessage(response.body);
    });
  }
);
```

## GitHub Actions
### GitHub Actions - Nightly Workflow
This repository includes a GitHub Actions workflow that runs every night at midnight (UTC). The workflow is triggered using a cron schedule and is designed to automate tasks like testing on a daily basis.

#### Workflow Details:
- **Trigger Time:** Midnight (00:00 UTC) every day.
- **Workflow File:** [`.github/workflows/nightly-workflow.yml`](.github/workflows/nightly-workflow.yml)
- **Key Tasks:**
  - Automatically checks out the repository.
  - Executes sanity tests

### GitHub Actions - Run Tests By Group
This repository includes a GitHub Actions workflow that allows you to run specific groups of tests on demand. The workflow can be manually triggered via the GitHub interface using `workflow_dispatch`, where you can select a test group to run.

### Workflow Details:
- **Trigger:** Manually using the `Run workflow` button from the GitHub Actions tab.
- **Workflow File:** [`.github/workflows/run-tests-by-group.yml`](.github/workflows/run-tests-by-group.yml)
- **Test Group Options:**
  - `all`: Runs the full test suite.
  - `sanity`: Runs a sanity check with a smaller set of key tests.
  - `single_character`: Runs tests related to a single character.
  - `all_characters`: Runs tests for all characters.
  - `multiple_characters`: Runs tests involving multiple characters.
  - `filter_characters`: Runs tests that filter characters.