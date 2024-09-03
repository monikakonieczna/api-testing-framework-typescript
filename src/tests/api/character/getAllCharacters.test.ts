import request, { Response } from 'supertest';
import { API_KEY } from '../../../config';
import { assertStatusCode, assertResponseBody } from '../../../helpers/assertionsHelper';
import { makeRequest } from '../../../helpers/makeRequest';
import { validateCharacter } from '../../../helpers/validateCharacter';
const BASE_URL = 'https://rickandmortyapi.com/api';

/**
 * Tests - Access the list of characters by using the /character endpoint.
 * @group all_characters
 */
describe('Rick and Morty API Tests - Get All Characters', () => {
  it('should fetch all characters', async () => {
    const response = await makeRequest('get', `${BASE_URL}/character`);
    assertStatusCode(response, 200);
    expect(response.body.info).toHaveProperty('count');
  });
});