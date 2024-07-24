import request, { Response } from 'supertest';
import { App } from 'supertest/types';
/**
 * A helper function to make HTTP requests, which can be used across different tests.
 * @param method 
 * @param url 
 * @param body 
 * @param headers 
 * @returns 
 */
export async function makeRequest(
  method: 'get' | 'post' | 'put' | 'delete',
  url: string,
  body?: any,
  headers?: Record<string, string>
): Promise<Response> {
  let req = request(url)[method]('/');

  if (headers) {
    Object.keys(headers).forEach((key) => {
      req = req.set(key, headers[key]);
    });
  }

  if (body) {
    req = req.send(body);
  }

  return req;
}
