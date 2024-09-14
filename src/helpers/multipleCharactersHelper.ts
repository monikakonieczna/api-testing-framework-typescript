import * as fs from "fs";
import * as path from "path";


// Function to load JSON data from the file
const loadJsonData = (fileName: string): any => {
  const filePath = path.join(__dirname, "../test_data/get_multiple_characters", fileName);
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
};

// Load test data
const validTwoCharactersStructure = loadJsonData("valid_two_characters.json");
const errorMessageCastFailed = loadJsonData("non_integer_character.json");
const errorMessageBadArray = loadJsonData("non_integer_character_array.json");

export function validateThreeCharactersIds(
characters: Characters,
  id1: number,
  id2: number,
  id3: number
) {
  expect(characters[0].id).toEqual(id1);
  expect(characters[1].id).toEqual(id2);
  expect(characters[2].id).toEqual(id3);
}

export function validateTwoCharactersIds(
    characters: Characters,
    id1: number,
    id2: number
  ) {
    expect(characters[0].id).toEqual(id1);
    expect(characters[1].id).toEqual(id2);
  }

export function validateResponseStructure(characters: Characters){
  expect(characters).toEqual(validTwoCharactersStructure);
}

export function validateErrorMessageForNonInteger(characters: Characters){
  expect(characters).toEqual(errorMessageCastFailed);
}

export function validateErrorMessageForNonIntegerArray(characters: Characters){
  expect(characters).toEqual(errorMessageBadArray);
}