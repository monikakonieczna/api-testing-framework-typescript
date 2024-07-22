import request, { Response } from 'supertest';

/**
 * A set of common assertions to reduce repetitive code in tests.
 */


export function assertStatusCode(response: Response, expectedStatus: number) {
  expect(response.status).toBe(expectedStatus);
}

export function assertResponseBody(response: Response, expectedBody: any) {
  expect(response.body).toMatchObject(expectedBody);
}