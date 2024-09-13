import * as fs from "fs";
import * as path from "path";

// Function to load JSON data from the file
const loadJsonData = (fileName: string): any => {
  const filePath = path.join(__dirname, "../test_data/get__all_characters", fileName);
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
};

// Load test data
const validCharactersPage1 = loadJsonData("valid_characters_page_1.json");
const validCharactersPage2 = loadJsonData("valid_characters_page_2.json");
const validCharactersPage42 = loadJsonData("valid_characters_page_42.json");
const notFoundPage = loadJsonData("not_found_page.json");

/**
 * A helper function to validate the structure of the response data for existing character - Page 1
 * @param character
 */
export function validatePage1Structure(characters: Characters) {
    expect(characters).toEqual(validCharactersPage1);
}

/**
 * A helper function to validate the structure of the response data for existing character - Page 2
 * @param character
 */
export function validatePage2Structure(characters: Characters) {
    expect(characters).toEqual(validCharactersPage2);
}

/**
 * A helper function to validate the structure of the response data for existing character - Page 42
 * @param character
 */
export function validatePage42Structure(characters: Characters) {
    expect(characters).toEqual(validCharactersPage42);
}

/**
 * A helper function to validate that the response body contains the expected character data
 * @param character
 */

export function validatePaginationInfo(characters: Characters, count: number, pages: number, next: string | null, prev: string | null) {
  expect(characters.info.count).toEqual(count);
  expect(characters.info.pages).toEqual(pages);
  expect(characters.info.next).toEqual(next);
  expect(characters.info.prev).toEqual(prev);

}

/**
 * A helper function to verify the error response message for not existing page
 * @param character
 */
export function validateNotFoundErrorMessage(error: Error) {
  expect(error.message).toEqual(notFoundPage.message);
}