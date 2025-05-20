// mocks/about-handlers.ts
import { http, HttpResponse } from 'msw';
import year from './year.json';
import history from './history.json';

export const aboutHandlers = [
  http.get('http://localhost:9090/about', async () => {
    await sleep(200);

    return HttpResponse.json({ year, history });
  }),
];

async function sleep(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
