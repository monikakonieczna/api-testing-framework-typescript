import request from 'supertest';

interface RequestOptions {
    method: 'get' | 'post' | 'put' | 'delete';
    endpoint: string;
    queryParams?: Record<string, any>;
    body?: any;
    headers?: Record<string, string>;
  }
  
  export async function makeRequest2({
    method,
    endpoint,
    queryParams = {},
    body = null,
    headers = {}
  }: RequestOptions) {
    try {
      let req = request(endpoint)[method]('/');
  
      if (headers) {
        Object.keys(headers).forEach(key => {
          req = req.set(key, headers[key]);
        });
      }
  
      if (queryParams) {
        req = req.query(queryParams);
      }
  
      if (body) {
        req = req.send(body);
      }
  
      const response = await req;
      return response;
    } catch (error) {
      console.error(`Error making ${method.toUpperCase()} request to ${endpoint}:`, error);
      throw error; // Re-throw the error for further handling if needed
    }
  }