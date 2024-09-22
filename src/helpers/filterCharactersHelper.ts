import * as fs from "fs";
import * as path from "path";

// Function to load JSON data from the file
const loadJsonData = (fileName: string): any => {
  const filePath = path.join(
    __dirname,
    "../test_data/filter_characters",
    fileName
  );
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
};

// Load test data
const nonexistingCharacter = loadJsonData("not_existing_character.json");

/**
 * A helper function to verify the error response message for non-existing character
 * @param character
 */
export function validateNonExistingCaharcterErrorMessage(error: Error) {
  expect(error.message).toEqual(nonexistingCharacter.message);
}
