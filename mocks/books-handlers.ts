// mocks/books-handlers.ts
import { http, HttpResponse } from 'msw';
import books from './books.json';

export const booksHandlers = [
  http.get('http://localhost:9090/books', async () => {
    await sleep(200);

    return HttpResponse.json(books);
  }),

  http.get('http://localhost:9090/book-list', async ({ request }) => {
    await sleep(200);

    // request객체에는 searchParams가 없으므로 기본 js URL객체로 변환
    const url = new URL(request.url);
    // parseInt는 문자열만 허용하므로 Number로 변경
    const page = Number(url.searchParams.get('page'));
    const cate = url.searchParams.get('category');

    // 페이지별 데이터 가져오기
    function getDataByPage(
      data: {
        id: number;
        title: string;
        author: string;
        image: string;
        series: string;
        date: string;
        price: string;
        category: string;
      }[],
      page: number,
      limit: number
    ) {
      // 총 페이지 (ceil : 올림)
      const totalPages = Math.ceil(data.length / limit);

      if (page < 1 || page > totalPages) {
        return [];
      }

      // 잘라낼 배열 시작 위치
      const start = (page - 1) * limit;
      // 끝 위치
      const end = start + limit;

      return {
        result: data.slice(start, end),
        total: data.length,
      };
    }

    // cate가 각 category인 경우 모두 보냄
    if (cate) {
      const filtered = books.filter((book) => book.category === cate);
      const result = getDataByPage(filtered, page, 7);
      return HttpResponse.json(result);
    }

    // cate가 null인 경우 모두 보냄
    const result = getDataByPage(books, page, 7);
    return HttpResponse.json(result);
  }),

  http.get('http://localhost:9090/magazine', async () => {
    await sleep(200);

    const filteredData = books.filter((book) =>
      book.title.includes('창작과비평')
    );

    return HttpResponse.json(filteredData);
  }),

  http.get('http://localhost:9090/kids-magazine', async () => {
    await sleep(200);

    const filteredData = books.filter((book) =>
      book.title.includes('창비어린이')
    );

    return HttpResponse.json(filteredData);
  }),
];

async function sleep(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
