import request, { Response } from "supertest";
/**
 * A helper function to make HTTP requests, which can be used across different tests.
 * @param method
 * @param url
 * @param body
 * @param headers
 * @returns
 */
export async function makeRequest(
  method: "get" | "post" | "put" | "delete",
  url: string,
  body?: any,
  headers?: Record<string, string>
): Promise<Response> {
  // Call the method with the path (which is the url in this case)
  let req = request("")[method](url);

  // Set headers if provided
  if (headers) {
    Object.keys(headers).forEach((key) => {
      req = req.set(key, headers[key]);
    });
  }

  // Add body if provided
  if (body) {
    req = req.send(body);
  }
  return req;
}
