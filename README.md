<h1>
  Practice api test automation with SuperTest, Typescript & Jest on <a href="https://rickandmortyapi.com/">The Rick and Morty API
</a>
</h1>

> **Note**
>
> +  **<a href="https://rickandmortyapi.com/" style="color:green;">The Rick and Morty API
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

## Project Structure

### Prerequisites

- Node.js 

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

### Run All Tests

```shell
npm test
```
