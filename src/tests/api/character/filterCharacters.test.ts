import request, { Response } from "supertest";
import { API_KEY } from "../../../config";
import { assertStatusCode } from "../../../helpers/assertionsHelper";
import { makeRequest } from "../../../helpers/makeRequest";
import { validateNonExistingCaharcterErrorMessage } from "../../../helpers/filterCharactersHelper";
import { validatePage1Structure } from "../../../helpers/allCharactersHelper";
import { generateRandomString } from "../../../helpers/dataGenerator";

const BASE_URL = "https://rickandmortyapi.com/api/character";
const randomString = generateRandomString();
console.log(randomString);

/**
 * Tests - Rick and Morty API - Filter Characters by name
 * @group filter_characters
 */
describe.each([["Rick", 200]])(
  "Rick and Morty API - Filter Characters by name",
  (name, statusCode) => {
    it("should filter characters by name", async () => {
      const response = await makeRequest("get", `${BASE_URL}/?name=${name}`);
      assertStatusCode(response, statusCode);
      response.body.results.forEach((character: Character) => {
        expect(character.name).toContain(`${name}`);
      });
    });
  }
);

/**
 * Tests - Rick and Morty API - Filter Characters by status
 * @group filter_characters
 */
describe.each([["Alive", 200]])(
  "Rick and Morty API - Filter Characters by status",
  (status, statusCode) => {
    it("should filter characters by status", async () => {
      const response = await makeRequest(
        "get",
        `${BASE_URL}/?status=${status}`
      );
      assertStatusCode(response, statusCode);
      response.body.results.forEach((character: any) => {
        expect(character.status).toBe(`${status}`);
      });
    });
  }
);

/**
 * Tests - Rick and Morty API - Filter Characters by species
 * @group filter_characters
 */
describe.each([["Human", 200]])(
  "Rick and Morty API - Filter Characters by species",
  (species, statusCode) => {
    it("should filter characters by species", async () => {
      const response = await makeRequest(
        "get",
        `${BASE_URL}/?species=${species}`
      );
      assertStatusCode(response, statusCode);
      response.body.results.forEach((character: any) => {
        expect(character.species).toBe(`${species}`);
      });
    });
  }
);

/**
 * Tests - Rick and Morty API - Filter Characters by gender
 * @group filter_characters
 */
describe.each([["Male", 200]])(
  "Rick and Morty API - Filter Characters by gender",
  (gender, statusCode) => {
    it("should filter characters by gender", async () => {
      const response = await makeRequest(
        "get",
        `${BASE_URL}/?gender=${gender}`
      );
      assertStatusCode(response, statusCode);
      response.body.results.forEach((character: any) => {
        expect(character.gender).toBe(`${gender}`);
      });
    });
  }
);

/**
 * Tests - Rick and Morty API - Negative Test Cases - Filter Characters by non-existing filter value
 * @group filter_characters
 */
describe.each([
  ["name", "Male", 404],
  ["status", "Male", 404],
  ["species", "Male", 404],
  ["gender", "halo", 404],
])(
  "Rick and Morty API - Filter Characters by non-existing filter value",
  (filter, filter_value, statusCode) => {
    it("should filter characters by gender", async () => {
      const response = await makeRequest(
        "get",
        `${BASE_URL}/?${filter}=${filter_value}`
      );
      assertStatusCode(response, statusCode);
      validateNonExistingCaharcterErrorMessage(response.body);
    });
  }
);

/**
 * Tests - Rick and Morty API - Filter Characters by non-existing filters
 * @group filter_characters
 */
describe("Rick and Morty API - Filter Characters by non-existing filters", () => {
  it("ignore unknown filters and return the first page", async () => {
    const response = await makeRequest(
      "get",
      `${BASE_URL}/?${randomString}=${randomString}`
    );
    assertStatusCode(response, 200);
    validatePage1Structure(response.body);
  });
});
