// mocks/books-handlers.ts
import { http, HttpResponse } from 'msw';
import books from './books.json';
import authors from './authors.json';
import news from './news.json';

// 저자 오름차순 정렬
const sortAuthors = (
  data: { id: number; name: string; img: string }[],
  regex: RegExp,
  locale: string
) =>
  data
    .filter((author) => regex.test(author.name))
    .sort((a, b) => a.name.localeCompare(b.name, locale));

export const searchHandlers = [
  http.get('http://localhost:9090/search-result', async ({ request }) => {
    await sleep(200);

    const url = new URL(request.url);
    const search = url.searchParams.get('searchCategory');
    const keyword = url.searchParams.get('keyword');
    const page = Number(url.searchParams.get('page'));

    // searchCategory에 따라 데이터 보냄
    if (search === 'books') {
      // 페이지별 books데이터 가져오기
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

      // 검색어에 대한 데이터 필터링하여 보냄
      if (keyword !== 'undefined' && keyword) {
        const searched = books.filter((item) => {
          return item.title.includes(keyword);
        });
        const result = getDataByPage(searched, page, 3);
        return HttpResponse.json(result);
      }
    }
    if (search === 'authors') {
      // 검색어에 대한 authors데이터 필터링하여 보냄
      let filterData = authors;

      // 검색어에 따른 필터링 적용
      if (keyword !== 'undefined' && keyword) {
        filterData = filterData.filter((item) => item.name.includes(keyword));
      }

      // 이름 정렬 적용
      const koreanAuthors = sortAuthors(filterData, /^[가-힣]/, 'ko-KR');
      const englishAuthors = sortAuthors(filterData, /^[A-Za-z]/, 'en-US');
      const numberAuthors = sortAuthors(filterData, /^[0-9]/, 'en-US');

      const sortedData = [
        ...koreanAuthors,
        ...englishAuthors,
        ...numberAuthors,
      ];

      // 검색어 조건 따진 후 정렬한 데이터 보냄
      return HttpResponse.json(sortedData);
    }
    if (search === 'news') {
      // 페이지별 news데이터 가져오기
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
        const searched = news.filter((item) => {
          return item.title.includes(keyword);
        });
        const result = getDataByPage(searched, page, 3);
        return HttpResponse.json(result);
      }
    }

    // 검색어 없는 경우 안보냄
    return HttpResponse.json(null);
  }),
];

async function sleep(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
