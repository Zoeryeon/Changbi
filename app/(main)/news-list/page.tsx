//app /(main) /news /page.tsx
'use client';

import Pagination from '@/app/components/Pagination';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
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
        <div className="flex items-start justify-between max-md:block">
          <div className="mr-[300px]"></div>
          <div className="w-[964px] max-md:mt-[36px] max-md:w-full">
            <form
              onSubmit={handleKeyword}
              className="relative w-full h-[70px] border-b-[4px] border-b-gray-500 max-sm:h-auto max-sm:border max-sm:border-[#e6e6e6] max-sm:rounded-[10px]"
            >
              <input
                ref={inputRef}
                type="search"
                placeholder="검색어를 입력하세요"
                className="block outline-0 border-0 w-full h-[56px] leading-[56px] text-[30px] font-bold placeholder:font-bold max-sm:leading-[40px] max-sm:h-[40px] max-sm:px-[16px] max-sm:text-[14px] max-sm:font-normal max-sm:placeholder:font-normal"
                autoComplete="off"
                defaultValue={paramsObj.keyword}
              />
              <button
                type="submit"
                className="absolute w-[62px] h-[62px] bg-[url('/images/searchinputicon.svg')] bg-no-repeat bg-center right-0 top-0 hover:bg-[#f6f6f6] max-sm:bg-[url('/images/headersearchicon.svg')] max-sm:h-[40px] max-sm:w-[54px]"
              ></button>
            </form>
            {isPending && <p>Loading...</p>}
            {isError && <p>{error.message}</p>}
            {data && data?.result?.length > 0 && (
              <ul className="mt-[56px] border-t border-t-[#e6e6e6] text-left max-sm:mt-[26px]">
                {data.result.map(
                  (news: {
                    id: number;
                    category: string;
                    title: string;
                    date: string;
                  }) => (
                    <li key={news.id}>
                      <Link
                        href="/NewsDetail"
                        className="flex flex-col justify-center border-b border-b-[#e6e6e6] pt-[14px] pb-[13px] group hover:bg-[#f6f6f6]"
                      >
                        <strong className="flex items-start font-normal text-[20px] leading-[34px] max-sm:flex-col max-sm:text-[16px] max-sm:leading-[26px]">
                          <em className="inline-block bg-[#f7f7f7] group-hover:bg-[#eee] py-[2px] px-[12px] rounded-[4px] mr-[12px] shrink-0 mt-[1px] text-[14px] leading-[28px] font-normal italic max-sm:text-[12px] max-sm:py-0 max-sm:px-[8px] max-sm:mt-0 max-sm:mb-[4px]">
                            {news.category}
                          </em>
                          {news.title}
                        </strong>
                        <span className="text-[14px] leading-[28px] max-sm:leading-[26px] max-sm:font-normal">
                          {news.date}
                        </span>
                      </Link>
                    </li>
                  )
                )}
              </ul>
            )}
            <div className="mt-[134px]">
              {data && data?.result?.length > 0 && (
                <Pagination
                  page={page}
                  setPage={setPage}
                  totalPage={totalPage}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
