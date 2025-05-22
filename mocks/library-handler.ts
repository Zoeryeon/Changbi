// mocks/library-handlers.ts
import { http, HttpResponse } from 'msw';
import library from './library.json';

export const libraryHandlers = [
  http.get('http://localhost:9090/library', async ({ request }) => {
    await sleep(200);

    // request객체에서 URL을 추출하여 searchParams 접근
    const url = new URL(request.url);
    // 쿼리 파라미터 추출 및 기본값 처리
    const keyword = url.searchParams.get('keyword');
    const tag = url.searchParams.get('tag');
    const page = Number(url.searchParams.get('page'));

    // 페이지별 데이터 가져오기
    function getDataByPage(
      data: {
        id: number;
        tag: number;
        cate: string | null;
        title: string;
        url: string;
        down: string | null;
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

    let filterData = library;

    // 태그에 따른 필터링 적용
    if (tag !== 'undefined' && tag) {
      filterData = filterData.filter((item) => item.tag === Number(tag));
    }

    // 검색어에 따른 필터링 적용
    if (keyword !== 'undefined' && keyword) {
      filterData = filterData.filter((item) => item.title.includes(keyword));
    }

    const result = getDataByPage(filterData, page, 5);

    return HttpResponse.json({ tag, page, keyword, ...result });
  }),
];

async function sleep(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
