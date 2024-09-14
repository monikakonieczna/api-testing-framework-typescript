import * as fs from "fs";
import * as path from "path";

// Function to load JSON data from the file
const loadJsonData = (fileName: string): any => {
  const filePath = path.join(__dirname, "../test_data/get_all_characters", fileName);
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
 */
export function validatePage1Structure(page: Page) {
    expect(page).toEqual(validCharactersPage1);
}

/**
 * A helper function to validate the structure of the response data for existing character - Page 2
 */
export function validatePage2Structure(page: Page) {
    expect(page).toEqual(validCharactersPage2);
}

/**
 * A helper function to validate the structure of the response data for existing character - Page 42
 */
export function validatePage42Structure(page: Page) {
    expect(page).toEqual(validCharactersPage42);
}

/**
 * A helper function to validate that the response body contains the expected character data
 */

export function validatePaginationInfo(page: Page, count: number, pages: number, next: string | null, prev: string | null) {
  expect(page.info.count).toEqual(count);
  expect(page.info.pages).toEqual(pages);
  expect(page.info.next).toEqual(next);
  expect(page.info.prev).toEqual(prev);
}

/**
 * A helper function to verify the error response message for not existing page
 */
export function validateNotFoundErrorMessage(error: Error) {
  expect(error.message).toEqual(notFoundPage.message);
}