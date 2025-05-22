//app /(main) /bookList /page.tsx
'use client';

import { useQuery } from '@tanstack/react-query';
import { use, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Pagination from '@/app/components/Pagination';
import BookResult from '@/app/components/book-list/BookResult';

type BookList = {
  id: number;
  title: string;
  author: string;
  image: string;
  series: string;
  date: string;
  price: string;
  category: string;
};

const cateList = [
  '전체',
  '문학',
  '인문교양',
  '어린이',
  '청소년',
  '그림책',
  '만화',
  '교사 및 부모',
  '정기간행물',
  '토닥스토리',
];

export default function BookList({
  searchParams,
}: {
  searchParams: Promise<{ category: string; page: string }>;
}) {
  const paramsObj = use(searchParams);
  const [params] = useState(new URLSearchParams(paramsObj));

  const initialCategory = params.get('category') || '';

  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [cate, setCate] = useState(initialCategory);

  const router = useRouter();

  const { isPending, data, isError, error } = useQuery<{
    result: BookList[];
    total: number;
  }>({
    queryKey: ['book-list', page, cate],
    queryFn: () => {
      return fetch(
        `http://localhost:9090/book-list?page=${page}&category=${cate}`
      ).then((res) => res.json());
    },
  });

  // data 변경시 totalPage 계산
  useEffect(() => {
    if (data) {
      setTotalPage(Math.ceil(data?.total / 7) || 0);
    }
  }, [data]);

  // 페이지 변경시 쿼리 파라미터 추가
  useEffect(() => {
    params.set('page', page.toString());
    router.push(`?${params.toString()}`);
  }, [page]);

  function handleCate(e: React.MouseEvent<HTMLButtonElement>) {
    if ((e.target as HTMLButtonElement).innerText !== '전체') {
      params.set('category', (e.target as HTMLButtonElement).innerText);
      setCate((e.target as HTMLButtonElement).innerText);
    } else {
      params.delete('category');
      setCate('');
    }
    router.push(`?${params.toString()}`);
    setPage(1);
  }

  return (
    <main className="h-auto mt-[20px] pt-[148px] pb-[150px]">
      <div className="max-w-[1770px] mx-auto px-[60px] max-sm:px-[28px]">
        <div className="flex items-baseline justify-between flex-wrap">
          <h2 className="text-[56px] font-bold tracking-tight leading-[88px] max-sm:text-[32px] max-sm:leading-[46px] max-sm:break-keep">
            창비의 책
          </h2>
          <span className="inline-block text-[14px] leading-[28px]">
            {page} / {totalPage} 페이지
          </span>
        </div>
        <div>
          <BookResult
            handleCate={handleCate}
            cateList={cateList}
            cate={cate}
            isPending={isPending}
            isError={isError}
            error={error}
            data={data?.result as BookList[]}
          />
        </div>
        <div className="mt-[134px]">
          {data && data?.result?.length > 0 && (
            <Pagination page={page} setPage={setPage} totalPage={totalPage} />
          )}
        </div>
      </div>
    </main>
  );
}
