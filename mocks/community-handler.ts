// mocks/community-handlers.ts
import { http, HttpResponse } from 'msw';
import community from './community.json';

//데이터 그룹화
const groupByGroup = (data: { group: string }[]) => {
  return data.reduce((acc: Record<string, { group: string }[]>, item) => {
    const { group } = item;
    if (!acc[group]) {
      acc[group] = [];
    }
    acc[group].push(item);
    return acc;
  }, {});
};
export const communityHandlers = [
  http.get('http://localhost:9090/community', async () => {
    await sleep(200);

    const groupedData = groupByGroup(community); // 그룹화된 데이터 생성
    return HttpResponse.json(groupedData);
  }),
];

async function sleep(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
