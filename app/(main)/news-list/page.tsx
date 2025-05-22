//app /(main) /news /page.tsx
'use client';

import NewsResult from '@/app/components/news-list/NewsResult';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { use, useEffect, useRef, useState } from 'react';

type NewsList = {
  id: number;
  category: string;
  title: string;
  date: string;
};

export default function NewsList({
  searchParams,
}: {
  searchParams: Promise<{ keyword: string; page: string }>;
}) {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const paramsObj = use(searchParams);
  const [params] = useState(new URLSearchParams(paramsObj));

  const inputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  const { isPending, data, isError, error } = useQuery<{
    result: NewsList[];
    total: number;
  }>({
    queryKey: ['news-list', page, paramsObj.keyword],
    queryFn: () => {
      return fetch(
        `http://localhost:9090/news-list?page=${page}&keyword=${paramsObj.keyword}`
      ).then((res) => res.json());
    },
  });

  // data 변경시 totalPage 계산
  useEffect(() => {
    if (data) {
      setTotalPage(Math.ceil(data?.total / 5) || 0);
    }
  }, [data]);

  // 페이지 변경시 쿼리 파라미터 추가
  useEffect(() => {
    params.set('page', page.toString());
    router.push(`?${params.toString()}`);
  }, [page]);

  // 검색 시 쿼리 파라미터 추가
  function handleKeyword(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (inputRef?.current?.value) {
      params.set('keyword', inputRef.current.value);
    } else {
      params.delete('keyword');
    }
    router.push(`?${params.toString()}`);
    setPage(1);

    // 검색 실행 후 입력값 커서 초기화
    if (inputRef.current) {
      inputRef.current.blur();
    }
  }

  return (
    <main className="h-auto mt-[20px] pt-[148px] pb-[150px] max-sm:pt-[90px]">
      <div className="max-w-[1770px] mx-auto px-[60px] max-sm:px-[28px]">
        <div className="flex items-baseline justify-between flex-wrap">
          <h2 className="text-[56px] font-bold tracking-tight leading-[88px] max-sm:text-[32px] max-sm:leading-[46px] max-sm:break-keep">
            새소식
          </h2>
          <span className="inline-block text-[14px] leading-[28px]">
            {page} / {totalPage} 페이지
          </span>
        </div>
        <div>
          <NewsResult
            handleKeyword={handleKeyword}
            inputRef={inputRef}
            paramsObj={paramsObj}
            isPending={isPending}
            isError={isError}
            error={error}
            data={data?.result}
            page={page}
            setPage={setPage}
            totalPage={totalPage}
          />
        </div>
      </div>
    </main>
  );
}
