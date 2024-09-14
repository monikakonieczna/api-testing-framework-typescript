import request, { Response } from "supertest";
import { API_KEY } from "../../../config";
import { assertStatusCode } from "../../../helpers/assertionsHelper";
import { makeRequest } from "../../../helpers/makeRequest";
import {
  validateErrorMessageForNonInteger,
  validateErrorMessageForNonIntegerArray,
  validateResponseStructure,
  validateThreeCharactersIds,
} from "../../../helpers/multipleCharactersHelper";
const BASE_URL = "https://rickandmortyapi.com/api";

/**
 * Tests - GET Multiple Characters by Adding an Array of IDs as Parameter
 * @group multiple_characters
 */
describe("Rick and Morty API Tests - Get Multiple Character", () => {
  it("should fetch mutliple characters by adding an array of ids as parameter", async () => {
    const response = await makeRequest("get", `${BASE_URL}/character/[1,2]`);
    assertStatusCode(response, 200);
    expect(response.body).toBeInstanceOf(Array);
    validateResponseStructure(response.body);
  });

  it("should fetch mutliple characters by adding an array of ids as parameter without brackets", async () => {
    const response = await makeRequest("get", `${BASE_URL}/character/1,2`);
    assertStatusCode(response, 200);
    expect(response.body).toBeInstanceOf(Array);
  });
});

/**
 * Parametrized tests - GET Multiple Characters - Multiple Valid IDs
 * @group multiple_characters
 */
describe.each([
  [200, 1, 2, 3],
  [200, 1, 10, 825],
  [200, 10, 20, 826],
])(
  "Rick and Morty API Tests - Get Multiple Characters - Valid characters ids",
  (code, id1, id2, id3) => {
    it("Verifies that the API returns multiple characters by their IDs with status 200", async () => {
      const response = await makeRequest(
        "get",
        `${BASE_URL}/character/${id1},${id2},${id3}`
      );
      assertStatusCode(response, code);
      validateThreeCharactersIds(response.body, id1, id2, id3);
    });
  }
);

/**
 * Parametrized tests - GET Multiple Characters - Multiple Invalid IDs
 * @group multiple_characters
 */
describe.each([
  [404, 1, 827],
  [404, 1, 0],
  [404, 2, -1],
  [404, 2, 1.5],
])(
  "Rick and Morty API Tests - Get Multiple Characters - Invalid characters ids",
  (code, id1, id2) => {
    it("Verifies that the API returns only existing characters by their IDs with status 200", async () => {
      const response = await makeRequest(
        "get",
        `${BASE_URL}/character/${id1},${id2}`
      );
      assertStatusCode(response, code);
      expect(response.body.length).toBe(1);
    });
  }
);

/**
 * Test - GET Multiple Characters With Non-Numeric ID
 * @group multiple_characters
 */
describe("Rick and Morty API Tests - Get Multiple Character", () => {
  it("should return error message and 500 status", async () => {
    const response = await makeRequest("get", `${BASE_URL}/character/1,abc`);
    assertStatusCode(response, 500);
    validateErrorMessageForNonInteger(response.body);
  });
});

/**
 * Test - GET Multiple Characters With Non-Numeric ID In The Array
 * @group multiple_characters
 */
describe("Rick and Morty API Tests - Get Multiple Character - Non numeric id", () => {
  it("should return an error for invalid input format (non-numeric ID)", async () => {
    const response = await makeRequest("get", `${BASE_URL}/character/[1,abc]`);
    assertStatusCode(response, 500);
    validateErrorMessageForNonIntegerArray(response.body);
  });
});
