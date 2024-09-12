import request, { Response } from "supertest";
import { API_KEY } from "../../../config";
import {
  assertStatusCode,
  assertResponseBody,
} from "../../../helpers/assertionsHelper";
import {
  validateResponseStructure,
  validateCharacterData,
  validateNotFoundErrorMessage,
  validateNonIntegerErrorMessage,
} from "../../../helpers/validateCharacter";
import { makeRequest } from "../../../helpers/makeRequest";
const BASE_URL = "https://rickandmortyapi.com/api";

/**
 * Tests - Access the list of characters by using the /character endpoint.
 * @group all_characters
 */
describe("Rick and Morty API Tests - Get All Characters", () => {
  it("Verifies that the API returns all characters and 200 status code", async () => {
    const response = await makeRequest("get", `${BASE_URL}/character`);
    assertStatusCode(response, 200);
  });
});

/**
 * Tests - Access the list of characters by using the /character endpoint.
 * @group all_characters
 */
describe("Rick and Morty API Tests - Get All Characters - Pagination", () => {
  it("Verifies that the pagination fields exist in the response.", async () => {
    const response = await makeRequest("get", `${BASE_URL}/character`);
  });
});

/**
 * Tests - Access the list of characters by using the /character endpoint.
 * @group all_characters
 */
describe("Rick and Morty API Tests - Get All Characters - Characters data", () => {
  it("Verifies that the response contains character data in a list.", async () => {
    const response = await makeRequest("get", `${BASE_URL}/character`);
  });
  it("Verifies that the list of characters contains key fields like name, status, and species..", async () => {
    const response = await makeRequest("get", `${BASE_URL}/character`);
  });
  it("Verifies whether the pagination works correctly.", async () => {
    const response = await makeRequest("get", `${BASE_URL}/character?page=2`);
    //# Page 2 should have a previous page
    //# Page 2 should have a next page
  });
});

/**
 * Tests - Access the list of characters by using the /character endpoint with invalid data.
 * @group all_characters
 */
describe.each([
  [99999, 404],
  [0, 404],
  [-1, 404],
  [1.5, 404],
])(
  "Rick and Morty API Tests - Get All Characters - Invalid data",
  (page, statusCode) => {
    it("Verifies that the API returns a 404 error for non existing page.", async () => {
      const response = await makeRequest(
        "get",
        `${BASE_URL}/character?page=${page}`
      );
      assertStatusCode(response, statusCode);
      validateNotFoundErrorMessage(response.body);
    });
  }
);
