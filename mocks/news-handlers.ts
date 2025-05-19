// mocks/news-handlers.ts
import { http, HttpResponse } from 'msw';
import news from './news.json';

export const newsHandlers = [
  http.get('http://localhost:9090/news', async () => {
    await sleep(200);

    return HttpResponse.json(news);
  }),

  http.get('http://localhost:9090/news-list', async ({ request }) => {
    await sleep(200);

    // request객체에는 searchParams가 없으므로 기본 js URL객체로 변환
    const url = new URL(request.url);
    const keyword = url.searchParams.get('keyword');
    // parseInt는 문자열만 허용하므로 Number로 변경
    const page = Number(url.searchParams.get('page'));

    // 페이지별 데이터 가져오기
    function getDataByPage(
      data: {
        id: number;
        category: string;
        title: string;
        date: string;
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

    // 검색어에 대한 데이터 필터링하여 보냄
    if (keyword !== 'undefined' && keyword) {
      const filterd = news.filter((item) => {
        return item.title.includes(keyword);
      });
      const result = getDataByPage(filterd, page, 5);
      return HttpResponse.json(result);
    }

    // 검색어 없는 경우 모두 보냄
    const result = getDataByPage(news, page, 5);
    return HttpResponse.json(result);
  }),

  // recruit 에서 사용
  http.get('http://localhost:9090/recruit', async () => {
    await sleep(200);

    // 날짜 기준 내림차순 정렬, 상위 3개 추출
    const sortedNews = news
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 3);

    return HttpResponse.json(sortedNews);
  }),
];

async function sleep(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
