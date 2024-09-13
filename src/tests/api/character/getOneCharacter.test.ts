import { assertStatusCode } from "../../../helpers/assertionsHelper";
import { makeRequest } from "../../../helpers/makeRequest";
import {
  validateResponseStructure,
  validateCharacterData,
  validateNotFoundErrorMessage,
  validateNonIntegerErrorMessage,
} from "../../../helpers/validateCharacterHelper";
const BASE_URL = "https://rickandmortyapi.com/api";

/**
 * Tests - GET Single Character - Valid Character ID
 * @group single_character
 */
describe("Rick and Morty API Tests - Get One Character - Valid Character ID", () => {
  it("Verifies that the API returns a character with a valid ID.", async () => {
    const response = await makeRequest("get", `${BASE_URL}/character/1`);
    assertStatusCode(response, 200);
    validateResponseStructure(response.body);
  });
  it("Verifies that the API returns expected character details", async () => {
    const response = await makeRequest("get", `${BASE_URL}/character/1`);
    assertStatusCode(response, 200);
    validateCharacterData(response.body);
  });
});

/**
 * Parametrized tests - GET Single Character -  Not Found Character ID
 * @group single_character
 */
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

/**
 * Tests - GET Single Character - Invalid Character ID
 * @group single_character
 */
describe("Rick and Morty API Tests - Get One Character - Invalid Datatype Of Character ID", () => {
  it("Verifies that the API handle invalid non-integer character ID correctly", async () => {
    const response = await makeRequest("get", `${BASE_URL}/character/abc`);
    assertStatusCode(response, 500);
    validateNonIntegerErrorMessage(response.body);
  });
});
