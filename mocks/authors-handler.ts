// mocks/authors-handlers.ts
import { http, HttpResponse } from 'msw';
import authors from './authors.json';

export const authorsHandlers = [
  http.get('http://localhost:9090/author-list', async ({ request }) => {
    await sleep(200);

    // request객체에는 searchParams가 없으므로 기본 js URL객체로 변환
    const url = new URL(request.url);
    const tag = url.searchParams.get('tag');

    const filtered = authors.filter((author) => author.tag === Number(tag));

    return HttpResponse.json(filtered);
  }),
];

async function sleep(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
