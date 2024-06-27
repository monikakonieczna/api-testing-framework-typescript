import request from 'supertest';
import { API_KEY } from '../../config';

const BASE_URL = 'http://api.openweathermap.org/data/3.0';

describe('OpenWeatherMap API', () => {
  it('should fetch current weather data for a city', async () => {
    const city = 'London';
    const response = await request(BASE_URL)
      .get('/weather')
      .query({ q: city, appid: API_KEY });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('weather');
    expect(response.body).toHaveProperty('main');
    expect(response.body.name).toBe(city);
  });

  it('should fetch 5 day / 3 hour forecast data for a city', async () => {
    const city = 'London';
    const response = await request(BASE_URL)
      .get('/forecast')
      .query({ q: city, appid: API_KEY });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('list');
    expect(Array.isArray(response.body.list)).toBe(true);
    expect(response.body.city.name).toBe(city);
  });
});