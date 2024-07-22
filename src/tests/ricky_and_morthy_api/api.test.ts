import request, { Response } from 'supertest';
import { API_KEY } from '../../config';
import { assertStatusCode, assertResponseBody } from '../../helpers/assertionsHelper';
import { makeRequest } from '../../helpers/makeRequest';
import { validateCharacter } from '../../helpers/validateCharacter';
const BASE_URL = 'https://rickandmortyapi.com/api';

describe('Rick and Morty API Tests - Character', () => {
  it('should fetch all characters', async () => {
    const response = await makeRequest('get', `${BASE_URL}/character`);
    assertStatusCode(response, 200);
    expect(response.body.results).toBeInstanceOf(Array);


  });

  it('should fetch a single character by ID', async () => {
    const response = await makeRequest('get', `${BASE_URL}/character/1`);
    assertStatusCode(response, 200);
    validateCharacter(response.body);
  });
});