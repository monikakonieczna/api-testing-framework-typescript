import request, { Response } from 'supertest';
import { API_KEY } from '../../../config';
import { assertStatusCode, assertResponseBody } from '../../../helpers/assertionsHelper';
import { makeRequest } from '../../../helpers/makeRequest';
import { makeRequest2 } from '../../../helpers/requestWithParams';
import { validateCharacter } from '../../../helpers/validateCharacter';
const BASE_URL = 'https://rickandmortyapi.com/api';

/**
 * Tests - Filter characters using additional query parameters
 * @group filter_characters
 */
describe('Rick and Morty API Tests - Filter characters', () => {
  it('should fetch characters based on query param: name', async () => {
    const response = await makeRequest('get', `${BASE_URL}/character/?name=morty`);
    console.log(response.statusCode);
  });

  it('should fetch characters based on query param: status', async () => {
    /*const queryParams = { status: 'alive' };
    try {
      const response = await request(BASE_URL)
      .get('/character')
      .query({ status: 'alive' });
      console.log(response.status);

    } catch (error) {
      console.error('Error fetching characters:', error);
    }
*/
const queryParams = { status: 'alive' };

  try {
    const response = await makeRequest2({
      method: 'get',
      endpoint: `${BASE_URL}/character`,
      queryParams,
    });

    console.log('Response status:', response.status);
    console.log('Response body:', response.body);
  } catch (error) {
    console.error('Error fetching characters:', error);
  }
  });
});