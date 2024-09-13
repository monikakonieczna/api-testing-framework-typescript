import request, { Response } from "supertest";
import { API_KEY } from "../../../config";
import {
  assertStatusCode,
} from "../../../helpers/assertionsHelper";
import { makeRequest } from "../../../helpers/makeRequest";
const BASE_URL = "https://rickandmortyapi.com/api";

/**
 * Tests - GET multiple characters by adding an array of ids as parameter
 * @group multiple_characters
 */
describe("Rick and Morty API Tests - Get Multiple Character", () => {
  it("should fetch mutliple characters by adding an array of ids as parameter", async () => {
    const response = await makeRequest("get", `${BASE_URL}/character/[1,2]`);
    assertStatusCode(response, 200);
    expect(response.body).toBeInstanceOf(Array);
  });

  it("should fetch mutliple characters by adding an array of ids as parameter without brackets", async () => {
    const response = await makeRequest("get", `${BASE_URL}/character/1,2`);
    assertStatusCode(response, 200);
    expect(response.body).toBeInstanceOf(Array);
  });
});

/**
 * Parametrized tests - GET Multiple Characters - Multiple valid ids
 * @group multiple_characters
 */
describe.each([
  [200, "1,2"],
  [200, "1,2,3"],
  [200, "10,20,30"],
])(
  "Rick and Morty API Tests - Get Multiple Characters - Valid characters ids",
  (code, ids) => {
    it("Verifies that the API returns multiple characters by their IDs with status 200", async () => {
      const response = await makeRequest("get", `${BASE_URL}/character/${ids}`);
      assertStatusCode(response, code);
    });
  }
);


/**
 * Parametrized tests - GET Multiple Characters - Non existing ids
 * @group multiple_characters
 */
describe.each([
  [404, "1,100"],
  [404, "1,2,46"],
  [404, "1,2,67"]
])(
  "Rick and Morty API Tests - Get Multiple Characters - Invalid characters ids",
  (code, ids) => {
    it("Verifies that the API returns multiple characters by their IDs with status 200", async () => {
      const response = await makeRequest("get", `${BASE_URL}/character/${ids}`);
      assertStatusCode(response, code);
      //todo: assert error message
    });
  }
);

/**
 * Tests - GET multiple characters - Multiple valid ids
 * @group multiple_characters
 */
describe("Rick and Morty API Tests - Get Multiple Character", () => {
  it("should return characters with consistent details", async () => {
    const response = await makeRequest("get", `${BASE_URL}/character/[1,2]`);
    assertStatusCode(response, 200);
    //todo: check response body
  });
});

/**
 * Tests - GET multiple characters - Not valid type of ids
 * @group multiple_characters
 */
describe("Rick and Morty API Tests - Get Multiple Character - Non numeric id", () => {
  it("should return an error for invalid input format (non-numeric ID)", async () => {
    const response = await makeRequest("get", `${BASE_URL}/character/[1,abc]`);
    assertStatusCode(response, 500);
    //todo: check response body
  });
});
