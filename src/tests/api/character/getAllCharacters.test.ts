import request, { Response } from "supertest";
import { API_KEY } from "../../../config";
import {
  assertStatusCode,
  assertResponseBody,
} from "../../../helpers/assertionsHelper";
import { makeRequest } from "../../../helpers/makeRequest";
import { validateNotFoundErrorMessage, validatePage2Structure, validatePage42Structure, validatePageStructure, validatePaginationInfo } from "../../../helpers/validateAllCharactersHelper";

const BASE_URL = "https://rickandmortyapi.com/api";

/**
 * Tests - Access the list of characters by using the /character endpoint.
 * @group all_characters
 */
describe("Rick and Morty API Tests - Get All Characters", () => {
  it("Verifies that the API returns the first page of characters and 200 status code", async () => {
    const response = await makeRequest("get", `${BASE_URL}/character`);
    assertStatusCode(response, 200);
    validatePageStructure(response.body);
  });
  it("Verifies that the API returns the second page of characters and 200 status code", async () => {
    const response = await makeRequest("get", `${BASE_URL}/character?page=2`);
    assertStatusCode(response, 200);
    validatePage2Structure(response.body);
  });
  it("Verifies that the API returns the last page of characters and 200 status code", async () => {
    const response = await makeRequest("get", `${BASE_URL}/character?page=42`);
    assertStatusCode(response, 200);
    validatePage42Structure(response.body);
  });
  it("Verifies that the API returns the pagination info", async () => {
    const response = await makeRequest("get", `${BASE_URL}/character`);
    assertStatusCode(response, 200);
    validatePaginationInfo(response.body, 826, 42, "https://rickandmortyapi.com/api/character?page=2", null)
  });
});

/**
 * Parametrized tests - GET Single Character -  Pagination
 * @group all_characters
 */
describe.each([
  ["?page=2", 826, 42, "https://rickandmortyapi.com/api/character?page=3", "https://rickandmortyapi.com/api/character?page=1"],
  ["?page=3", 826, 42, "https://rickandmortyapi.com/api/character?page=4", "https://rickandmortyapi.com/api/character?page=2"],
  ["?page=42", 826, 42, null, "https://rickandmortyapi.com/api/character?page=41"]
])(
  "Rick and Morty API Tests - Get All Characters - Pagination Info",
  (page, count, pages, next, prev) => {
    it("Verifies that the API returns pagination info", async () => {
      const response = await makeRequest("get", `${BASE_URL}/character${page}`);
      assertStatusCode(response, 200);
      validatePaginationInfo(response.body, count, pages, next, prev)
    });
  }
);

/**
 * Tests - Access the list of characters by using the /character endpoint with invalid data.
 * @group all_characters
 */
describe.each([
  [43, 404],
  [44, 404],
  [0, 404],
  [-1, 404],
  [1.5, 404],
])(
  "Rick and Morty API Tests - Get All Characters - Invalid data",
  (page, statusCode) => {
    it("Verifies that the API returns invalid result for a page beyond the last.", async () => {
      const response = await makeRequest("get", `${BASE_URL}/character?page=${page}`);
      assertStatusCode(response, statusCode);
      validateNotFoundErrorMessage(response.body);
    });
  }
);
