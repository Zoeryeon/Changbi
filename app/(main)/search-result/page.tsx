//app /(main) /search-result /page.tsx
'use client';

import Pagination from '@/app/components/Pagination';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { use, useEffect, useRef, useState } from 'react';
import Books from '@/app/components/search-result/Books';
import Authors from '@/app/components/search-result/Authors';
import News from '@/app/components/search-result/News';

const buttonLabels = ['도서', '저자', '새소식'];

export default function SearchResult({
  searchParams,
}: {
  searchParams: Promise<{ search: string; page: string; keyword: string }>;
}) {
  const paramsObj = use(searchParams);
  const [params] = useState(new URLSearchParams(paramsObj));

  const initialSearch = params.get('searchCategory') || 'books';

  const [page, setPage] = useState(parseInt(params.get('page') || '1', 10));
  const [totalPage, setTotalPage] = useState(0);
  const [search, setSearch] = useState(initialSearch);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  const { isPending, data, isError, error } = useQuery({
    queryKey: ['search-result', page, paramsObj.keyword, search],
    queryFn: () => {
      return fetch(
        `http://localhost:9090/search-result?searchCategory=${search}&page=${page}&keyword=${paramsObj.keyword}`
      ).then((res) => res.json());
    },
  });
  console.log(data);

  // data 변경시 totalPage 계산
  useEffect(() => {
    if (data) {
      setTotalPage(Math.ceil(data?.total / 3) || 0);
    }
  }, [data]);

  // 페이지 변경시 쿼리 파라미터 추가
  useEffect(() => {
    params.set('page', page.toString());
    params.set('searchCategory', search);
    router.push(`?${params.toString()}`);
  }, [page, search]);

  function handleKeyword(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (inputRef?.current?.value) {
      params.set('keyword', inputRef.current.value);
    } else {
      params.delete('keyword');
    }
    router.push(`?${params.toString()}`);

    // 검색 실행 후 검색어, 커서 초기화
    if (inputRef.current) {
      inputRef.current.blur();
    }
  }

  function handlerCategory(label: string) {
    setPage(1);

    if (label === '도서') {
      setSearch('books');
    } else if (label === '저자') {
      setSearch('authors');
    } else if (label === '새소식') {
      setSearch('news');
    }
  }

  return (
    <main className="h-auto mt-[20px] pt-[148px] pb-[150px] max-sm:pt-[90px] max-sm:pb-[90px]">
      <div className="max-w-[1770px] mx-auto px-[60px] max-sm:px-[28px]">
        <div className="flex items-baseline justify-between flex-wrap">
          <h2 className="text-[56px] font-bold tracking-tight leading-[88px] max-sm:text-[32px] max-sm:leading-[46px] max-sm:break-keep">
            검색
          </h2>
        </div>
        <div className="flex items-start justify-between">
          <div className="mt-[60px] mr-[150px] max-md:mr-0 max-md:flex max-md:gap-[12px] max-md:w-full max-md:mt-[24px] max-md:absolute max-md:top-0 max-md:-left-[80px] max-md:pl-[80px] max-md:pr-[80px] max-sm:-left-[28px] max-sm:pl-[28px] max-sm:pr-[28px] max-sm:flex-wrap">
            {buttonLabels.map((label, index) => (
              <button
                key={index}
                type="button"
                className={`block h-[42px] w-[204px] pl-[25px] ml-[1px] leading-[42px] -tracking-widest rounded-[10px] mb-[20px] text-left max-md:w-auto max-md:pl-[22px] max-md:pr-[22px] max-md:mb-0 max-md:shrink-0 max-sm:h-[34px] max-sm:text-[14px] max-sm:leading-[34px] max-sm:px-[18px] ${
                  (label === '도서' && search === 'books') ||
                  (label === '저자' && search === 'authors') ||
                  (label === '새소식' && search === 'news')
                    ? 'bg-[#2c3338] text-white'
                    : 'bg-point1 hover:bg-[#e7e7e8]'
                }`}
                onClick={() => handlerCategory(label)}
              >
                {label}
              </button>
            ))}
          </div>
          <div>
            <div className="w-[964px] max-md:mt-[36px] max-md:w-full">
              <form
                onSubmit={handleKeyword}
                className="relative w-full h-[70px] border-b-[4px] border-b-gray-500 max-sm:h-auto max-sm:border max-sm:border-[#e6e6e6] max-sm:rounded-[10px]"
              >
                <input
                  ref={inputRef}
                  type="search"
                  placeholder="검색어를 입력하세요"
                  className="block outline-0 border-0 w-full h-[56px] leading-[56px] text-[30px] font-bold placeholder:font-bold p-0 max-md:font-medium max-md:placeholder:font-medium max-sm:leading-[40px] max-sm:h-[40px] max-sm:px-[16px] max-sm:text-[14px] max-sm:font-normal max-sm:placeholder:font-normal"
                  autoComplete="off"
                  defaultValue={paramsObj.keyword}
                />
                <button
                  type="submit"
                  className="absolute w-[62px] h-[62px] bg-[url('/images/searchinputicon.svg')] bg-no-repeat bg-center right-0 top-0 hover:bg-[#f6f6f6] max-sm:bg-[url('/images/headersearchicon.svg')] max-sm:h-[40px] max-sm:w-[54px]"
                ></button>
              </form>
            </div>
            <div>
              {!paramsObj.keyword && (
                <div className="w-full h-[300px] flex justify-center items-center flex-col text-center">
                  <h1 className="text-[20px] leading-[34px] -tracking-wider font-medium">
                    검색어를 입력해주세요.
                  </h1>
                </div>
              )}
              <div>
                {isPending && <p>Loading...</p>}
                {isError && <p>{error.message}</p>}
                {search === 'books' && data?.result?.length > 0 && (
                  <Books data={data.result} />
                )}
                {search === 'authors' && <Authors data={data} />}
                {search === 'news' && data?.result?.length > 0 && (
                  <News data={data.result} />
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
        </div>
      </div>
    </main>
  );
}
