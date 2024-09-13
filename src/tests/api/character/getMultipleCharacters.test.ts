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
 * Parametrized tests - GET Multiple Characters
 * @group multiple_characters
 */
describe.each([
  [200, "1,2"],
  [200, "1,2,3"],
  [200, "10,20,30"],
])(
  "Rick and Morty API Tests - Get All Characters - Valid characters ids",
  (code, ids) => {
    it("Verifies that the API returns multiple characters by their IDs with status 200", async () => {
      const response = await makeRequest("get", `${BASE_URL}/character/${ids}`);
      assertStatusCode(response, code);
    });
  }
);
