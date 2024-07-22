/**
 * A helper function to validate the structure of the response data.
 * @param character 
 */
export function validateCharacter(character: any) {
  expect(character).toHaveProperty('id');
  expect(character).toHaveProperty('name');
  expect(character).toHaveProperty('status');
  expect(character).toHaveProperty('species');
  // Add more fields as necessary
}