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

- <a href="https://jestjs.io/">Jest</a>
- <a href="https://www.typescriptlang.org/">TypeScript</a>
- <a href="https://www.npmjs.com/package/supertest">SuperTest</a>
- <a href="https://chancejs.com/">Chance</a>

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
- <a href="https://jestjs.io/docs/getting-started">Jest Documentation</a>
- <a href="https://jestjs.io/docs/cli">Jest CLI Options</a>

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

## Useful Commands

### Run All Tests

```shell
npm test
```
