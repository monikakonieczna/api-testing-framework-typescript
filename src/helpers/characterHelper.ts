import * as fs from "fs";
import * as path from "path";

// Function to load JSON data from the file
const loadJsonData = (fileName: string): any => {
  const filePath = path.join(__dirname, "../test_data/get_character", fileName);
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
};

// Load test data
const validCharacterId1 = loadJsonData("valid_character_id_1.json");
const notFoundCharacter = loadJsonData("not_found_character.json");
const nonIntegerId = loadJsonData("non_integer_id.json");

/**
 * A helper function to validate the structure of the response data for existing character
 * @param character
 */
export function validateResponseStructure(character: any) {
  expect(character).toHaveProperty("id");
  expect(character).toHaveProperty("name");
  expect(character).toHaveProperty("status");
  expect(character).toHaveProperty("species");
  expect(character).toHaveProperty("type");
  expect(character).toHaveProperty("gender");
  expect(character).toHaveProperty("origin");
  expect(character).toHaveProperty("location");
  expect(character).toHaveProperty("image");
  expect(character).toHaveProperty("episode");
  expect(character).toHaveProperty("url");
  expect(character).toHaveProperty("created");
}

/**
 * A helper function to validate that the response body contains the expected character data
 * @param character
 */
export function validateCharacterData(character: Character) {
  expect(character.id).toEqual(validCharacterId1.id);
  expect(character.name).toEqual(validCharacterId1.name);
  expect(character.status).toEqual(validCharacterId1.status);
  expect(character.type).toEqual(validCharacterId1.type);
  expect(character.gender).toEqual(validCharacterId1.gender);
  expect(character.url).toEqual(validCharacterId1.url);
  expect(character.created).toEqual(validCharacterId1.created);
}

/**
 * A helper function to verify the error response message for not existing character
 * @param character
 */
export function validateNotFoundErrorMessage(error: Error) {
  expect(error.message).toEqual(notFoundCharacter.message);
}

/**
 * A helper function to verify the error response message for non-integer character id
 * @param character
 */
export function validateNonIntegerErrorMessage(error: Error) {
  expect(error.message).toEqual(nonIntegerId.message);
}
