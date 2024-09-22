import { assertStatusCode } from "../../../helpers/assertionsHelper";
import { makeRequest } from "../../../helpers/makeRequest";

const BASE_URL = "https://rickandmortyapi.com/api/";

/**
 * Sanity Tests
 * @group sanity_tests
 */
describe("Rick and Morty API - Sanity Tests", () => {
  test("should respond with a 200 status for the characters endpoint", async () => {
    const response = await makeRequest("get", `${BASE_URL}/character`);
    assertStatusCode(response, 200);
  });

  test("should respond with a 200 status for the episodes endpoint", async () => {
    const response = await makeRequest("get", `${BASE_URL}/episode`);
    assertStatusCode(response, 200);
  });

  test("should respond with a 200 status for the locations endpoint", async () => {
    const response = await makeRequest("get", `${BASE_URL}/location`);
    assertStatusCode(response, 200);
  });

  test("should respond with a 200 status for the specific character endpoint", async () => {
    const response = await makeRequest("get", `${BASE_URL}/character/1`);
    assertStatusCode(response, 200);
  });

  test("should return 404 for non-existent endpoint", async () => {
    const response = await makeRequest("get", `${BASE_URL}/nonexisting`);
    assertStatusCode(response, 404);
  });
});
