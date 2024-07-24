/**
 * A helper function to validate the structure of the response data.
 * @param character 
 */
export function validateCharacter(character: any) {
  expect(character).toHaveProperty('id');
  expect(character).toHaveProperty('name');
  expect(character).toHaveProperty('status');
  expect(character).toHaveProperty('species');
  expect(character).toHaveProperty('type');
  expect(character).toHaveProperty('gender');
  expect(character).toHaveProperty('origin');
  expect(character).toHaveProperty('location');
  expect(character).toHaveProperty('image');
  expect(character).toHaveProperty('episode');
  expect(character).toHaveProperty('url');
  expect(character).toHaveProperty('created');
}