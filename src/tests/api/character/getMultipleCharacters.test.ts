import request, { Response } from 'supertest';
import { API_KEY } from '../../../config';
import { assertStatusCode, assertResponseBody } from '../../../helpers/assertionsHelper';
import { makeRequest } from '../../../helpers/makeRequest';
import { validateCharacter } from '../../../helpers/validateCharacter';
const BASE_URL = 'https://rickandmortyapi.com/api';

/**
 * Tests - GET multiple characters by adding an array of ids as parameter
 * @group multiple_characters
 */
describe('Rick and Morty API Tests - Get Multiple Character', () => {
  it('should fetch mutliple characters by adding an array of ids as parameter', async () => {
    const response = await makeRequest('get', `${BASE_URL}/character/[1,2]`);
    assertStatusCode(response, 200);
    expect(response.body).toBeInstanceOf(Array);
  });

  it('should fetch mutliple characters by adding an array of ids as parameter without brackets', async () => {
    const response = await makeRequest('get', `${BASE_URL}/character/1,2`);
    assertStatusCode(response, 200);
    expect(response.body).toBeInstanceOf(Array);
  });
});