// mocks/authors-handlers.ts
import { http, HttpResponse } from 'msw';
import authors from './authors.json';

const sortAuthors = (
  data: { id: number; name: string; img: string }[],
  regex: RegExp,
  locale: string
) =>
  data
    .filter((author) => regex.test(author.name))
    .sort((a, b) => a.name.localeCompare(b.name, locale));

export const authorsHandlers = [
  http.get('http://localhost:9090/author-list', async ({ request }) => {
    await sleep(200);

    // request객체에는 searchParams가 없으므로 기본 js URL객체로 변환
    const url = new URL(request.url);
    const keyword = url.searchParams.get('keyword');
    const tag = url.searchParams.get('tag');

    let filterData = authors;

    // 태그에 따른 필터링 적용
    if (tag !== 'undefined' && tag) {
      filterData = filterData.filter((author) => author.tag === Number(tag));
    }

    // 검색어에 따른 필터링 적용
    if (keyword !== 'undefined' && keyword) {
      filterData = filterData.filter((item) => item.name.includes(keyword));
    }

    // 이름 정렬 적용
    const koreanAuthors = sortAuthors(filterData, /^[가-힣]/, 'ko-KR');
    const englishAuthors = sortAuthors(filterData, /^[A-Za-z]/, 'en-US');
    const numberAuthors = sortAuthors(filterData, /^[0-9]/, 'en-US');

    const sortedData = [...koreanAuthors, ...englishAuthors, ...numberAuthors];

    // 검색어 조건 따진 후 정렬한 데이터 보냄
    return HttpResponse.json(sortedData);
  }),
];

async function sleep(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
